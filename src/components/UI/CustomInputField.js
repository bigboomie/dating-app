import { View, TextInput, StyleSheet, Text } from 'react-native';
import { TextStyles } from '../../constants/styles';
import { GlobalStyles } from './../../constants/styles';

const CustomInputField = ({ value, onChangeText, label, style, ...rest }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                {...rest}
                style={[styles.textInput, style]}
            />
        </View>
    );
};

export default CustomInputField;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingVertical: 8,
    },
    label: {
        ...TextStyles.heading7,
        color: GlobalStyles.textColor.primary40,
        position: 'absolute',
        top: -1,
        left: 29,
        backgroundColor: GlobalStyles.colors.white,
        zIndex: 1,
        paddingHorizontal: 8,
    },
    textInput: {
        ...TextStyles.heading6,
        color: GlobalStyles.textColor.primary100,
        height: 58,
        lineHeight: 14,
        paddingHorizontal: 20,
        borderColor: GlobalStyles.colors.border,
        borderWidth: 1,
        borderRadius: 15,
    },
});
