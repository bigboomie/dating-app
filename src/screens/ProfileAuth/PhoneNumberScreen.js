import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { TextStyles } from '../../constants/styles';
import Button from './../../components/UI/Button';
import { GlobalStyles } from './../../constants/styles';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { firebaseConfig2 } from './../../constants/firebase';
import { getAuth, PhoneAuthProvider } from 'firebase/auth';

try {
    initializeApp(firebaseConfig2);
} catch (error) {}

const app = getApp();
const auth = getAuth();

if (!app?.options || Platform.OS === 'web') {
    throw new Error(
        'This example only works on Android or iOS, and requires a valid Firebase config.'
    );
}

const PhoneNumberScreen = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [message, showMessage] = useState();
    const [verificationId, setVerificationId] = useState('');

    const recaptchaVerifier = useRef(null);

    //Prevent from pressing device back
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );

    useEffect(() => {
        if (verificationId && verificationId.length) {
            navigation.navigate('VerifyingCodeScreen', {
                verifyPhoneNumberId: verificationId,
            });
        }
    }, [verificationId, navigation]);

    const handleSubmit = async () => {
        try {
            const phoneProvider = new PhoneAuthProvider(auth);
            const phoneVerificationId = await phoneProvider.verifyPhoneNumber(
                formattedValue,
                recaptchaVerifier.current
            );
            setVerificationId(phoneVerificationId);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={app.options}
                attemptInvisibleVerification={false}
            />
            <Text style={styles.title}>My mobile</Text>
            <Text style={styles.subtitle}>
                Please enter your valid phone number. We will send you a 4-digit
                code to verify your account.
            </Text>
            <PhoneInput
                defaultValue={value}
                defaultCode="VN"
                layout="first"
                onChangeText={(text) => {
                    setValue(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                autoFocus
                textContainerStyle={styles.phoneNumberInput}
                countryPickerButtonStyle={styles.countryPicker}
            />
            <Button
                onPress={handleSubmit}
                style={styles.button}
                textColor={GlobalStyles.colors.white}
            >
                Continue
            </Button>
        </View>
    );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 48,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 128,
        backgroundColor: GlobalStyles.colors.white,
    },
    title: {
        ...TextStyles.heading1,
        color: GlobalStyles.textColor.primary100,
    },
    subtitle: {
        ...TextStyles.heading6,
        color: GlobalStyles.textColor.primary70,
        marginBottom: 32,
    },
    phoneNumberInput: {
        backgroundColor: GlobalStyles.colors.white,
        borderRadius: 15,
        borderColor: GlobalStyles.colors.border,
        borderWidth: 1,
        borderStyle: 'solid',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0,
    },
    countryPicker: {
        borderColor: GlobalStyles.colors.border,
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    button: {
        backgroundColor: GlobalStyles.colors.red,
        alignSelf: 'stretch',
        borderRadius: 15,
        marginTop: 64,
    },
});
