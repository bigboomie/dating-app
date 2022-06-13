import { forwardRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { GlobalStyles, TextStyles } from './../../constants/styles';

const CodeInputItem = ({
    value,
    onChangeText,
    forwardRef,
    autoFocus,
    onFocus = () => {},
    onBlur = () => {},
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            <TextInput
                ref={forwardRef}
                autoFocus={autoFocus}
                onFocus={() => {
                    setIsFocused(true);
                    onFocus();
                }}
                onBlur={() => {
                    setIsFocused(false);
                    onBlur();
                }}
                keyboardType="number-pad"
                value={value}
                showSoftInputOnFocus={true}
                maxLength={1}
                onChangeText={onChangeText}
                style={[
                    styles.inputText,
                    isFocused && styles.inputTextFocus,
                    value.length && styles.hasText,
                ]}
            />
        </View>
    );
};

export default CodeInputItem;

const styles = StyleSheet.create({
    inputText: {
        ...TextStyles.heading1,
        color: GlobalStyles.colors.border,
        paddingHorizontal: 8,
        paddingVertical: 8,
        width: 40,
        textAlign: 'center',
        backgroundColor: GlobalStyles.colors.white,
        lineHeight: 40,
        borderRadius: 15,
        borderColor: GlobalStyles.colors.border,
        borderWidth: 1,
    },
    inputTextFocus: {
        borderColor: GlobalStyles.colors.red,
        color: GlobalStyles.colors.red,
    },
    hasText: {
        color: GlobalStyles.textColor.white,
        backgroundColor: GlobalStyles.colors.red,
        borderColor: GlobalStyles.colors.red,
    },
});
