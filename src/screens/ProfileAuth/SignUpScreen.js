import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../assets/svgs/Logo';
import Button from '../../components/UI/Button';
import IconButton from '../../components/UI/IconButton';
import { GlobalStyles, TextStyles } from '../../constants/styles';

function SignUpScreen({ navigation }) {
    const handleSignInWithEmail = () => {};
    const handleSignInWithPhoneNumber = () => {
        navigation.navigate('PhoneNumberScreen');
    };
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo width={109} height={100} />
            </View>
            <View style={styles.signUpContainer}>
                <Text style={[TextStyles.heading4b, styles.signUpText]}>
                    Sign up to continue
                </Text>
                <Button
                    onPress={handleSignInWithEmail}
                    textColor={GlobalStyles.textColor.white}
                    style={styles.withEmailButton}
                >
                    Continue with email
                </Button>
                <Button
                    onPress={handleSignInWithPhoneNumber}
                    textColor={GlobalStyles.colors.red}
                    style={styles.withPhoneNumberButton}
                >
                    Use phone number
                </Button>
            </View>
            <View style={styles.alternativeLoginContainer}>
                <View style={styles.textWithHorizontalLine}>
                    <View style={styles.horizontalLine}></View>
                    <View>
                        <Text style={styles.alternativeTitle}>
                            or sign up with
                        </Text>
                    </View>
                    <View style={styles.horizontalLine}></View>
                </View>
                <View style={styles.alternativeButtonContainer}>
                    <IconButton
                        style={styles.alternativeButton}
                        icon="logo-facebook"
                        iconSize={32}
                        iconColor={GlobalStyles.colors.red}
                    />
                    <IconButton
                        style={styles.alternativeButton}
                        icon="logo-google"
                        iconSize={32}
                        iconColor={GlobalStyles.colors.red}
                    />
                    <IconButton
                        style={styles.alternativeButton}
                        icon="logo-apple"
                        iconSize={32}
                        iconColor={GlobalStyles.colors.red}
                    />
                </View>
            </View>
            <View style={styles.termAndPrivacy}>
                <Text style={styles.termAndPrivacyText}>Term of use</Text>
                <Text style={styles.termAndPrivacyText}>Privacy Policy</Text>
            </View>
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 48,
        paddingVertical: 40,
        backgroundColor: GlobalStyles.colors.white,
    },
    logoContainer: {
        paddingTop: 80,
        alignItems: 'center',
    },
    signUpContainer: {
        alignSelf: 'stretch',
    },
    signUpText: {
        color: GlobalStyles.textColor.primary100,
        marginBottom: 32,
        textAlign: 'center',
    },
    withEmailButton: {
        backgroundColor: GlobalStyles.colors.red,
        marginBottom: 20,
    },
    withPhoneNumberButton: {
        backgroundColor: GlobalStyles.colors.white,
        borderColor: GlobalStyles.colors.background,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    alternativeLoginContainer: {
        alignSelf: 'stretch',
    },
    textWithHorizontalLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    horizontalLine: {
        flex: 1,
        height: 1,
        backgroundColor: GlobalStyles.textColor.primary40,
    },
    alternativeTitle: {
        ...TextStyles.heading7,
        textAlign: 'center',
        color: GlobalStyles.textColor.primary100,
        marginHorizontal: 14,
    },
    alternativeButtonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    alternativeButton: {
        padding: 18,
        borderColor: GlobalStyles.colors.border,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 15,
    },
    termAndPrivacy: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        alignSelf: 'stretch',
    },
    termAndPrivacyText: {
        ...TextStyles.heading6,
        color: GlobalStyles.colors.red,
    },
});
