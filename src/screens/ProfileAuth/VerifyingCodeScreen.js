import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import IconButton from '../../components/UI/IconButton';
import CodeInput from '../../components/UI/CodeInput';
import { GlobalStyles, TextStyles } from './../../constants/styles';
import Button from './../../components/UI/Button';
import {
    PhoneAuthProvider,
    getAuth,
    signInWithCredential,
} from 'firebase/auth';

const auth = getAuth();

function VerifyingCodeScreen({ route, navigation }) {
    const [value, setValue] = useState({
        pin1: '',
        pin2: '',
        pin3: '',
        pin4: '',
        pin5: '',
        pin6: '',
    });
    const [message, setMessage] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            navigation.navigate('ProfileDetailScreen');
        }
    }, [isLoggedIn, navigation]);

    const verificationId = route.params?.verifyPhoneNumberId;

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleResendPress = () => {
        setValue({
            pin1: '',
            pin2: '',
            pin3: '',
            pin4: '',
            pin5: '',
            pin6: '',
        });
    };

    const verifyCode = async () => {
        const pin = Object.values(value).join('');
        try {
            const credential = PhoneAuthProvider.credential(
                verificationId,
                pin
            );
            await signInWithCredential(auth, credential);
            setIsLoggedIn(true);
        } catch (err) {
            setMessage('Invalid verification code!');
            handleResendPress();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.verifyingContainer}>
                <Text style={styles.time}>00:42</Text>
                <Text style={styles.subtitle}>
                    Type the verification code {'\n'} we've sent you
                </Text>
                <CodeInput
                    onConfirm={verifyCode}
                    value={value}
                    setValue={setValue}
                />
                {message && <Text style={styles.error}>{message}</Text>}
            </View>
            <Button
                onPress={handleResendPress}
                style={styles.resendButton}
                textColor={GlobalStyles.colors.red}
            >
                Send Again
            </Button>
            <IconButton
                icon="chevron-back-outline"
                iconColor={GlobalStyles.colors.red}
                iconSize={24}
                style={styles.backButton}
                onPress={handleBackPress}
            />
        </View>
    );
}

export default VerifyingCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 40,
        paddingTop: 128,
        paddingBottom: 64,
        backgroundColor: GlobalStyles.colors.white,
    },
    verifyingContainer: {
        alignSelf: 'stretch',
    },
    time: {
        ...TextStyles.heading1,
        textAlign: 'center',
        color: GlobalStyles.textColor.primary100,
        marginBottom: 8,
    },
    subtitle: {
        ...TextStyles.heading4,
        textAlign: 'center',
        color: GlobalStyles.textColor.primary70,
        marginBottom: 48,
    },
    resendButton: {
        backgroundColor: GlobalStyles.colors.white,
        borderWidth: 0,
        marginTop: 54,
    },
    backButton: {
        padding: 14,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.border,
        borderRadius: 15,
        position: 'absolute',
        top: 44,
        left: 40,
    },
    error: {
        ...TextStyles.heading6,
        textAlign: 'center',
        marginTop: 16,
        color: GlobalStyles.colors.red,
    },
});
