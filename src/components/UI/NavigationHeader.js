import { StyleSheet } from 'react-native';
import IconButton from './IconButton';
import Button from './Button';
import { GlobalStyles } from './../../constants/styles';

function NavigationHeader({
    hasBack = false,
    onBackPress,
    hasSkip = false,
    onSkipPress,
}) {
    return (
        <>
            {hasBack && (
                <IconButton
                    icon="chevron-back-outline"
                    iconColor={GlobalStyles.colors.red}
                    iconSize={24}
                    style={styles.backButton}
                    onPress={onBackPress}
                />
            )}
            {hasSkip && (
                <Button
                    onPress={onSkipPress}
                    style={styles.buttonSkip}
                    textColor={GlobalStyles.colors.red}
                >
                    Skip
                </Button>
            )}
        </>
    );
}

export default NavigationHeader;

const styles = StyleSheet.create({
    backButton: {
        padding: 14,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.border,
        borderRadius: 15,
        position: 'absolute',
        top: 44,
        left: 40,
    },
    buttonSkip: {
        position: 'absolute',
        top: 40,
        right: 34,
    },
});
