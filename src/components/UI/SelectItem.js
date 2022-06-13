import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles, TextStyles } from './../../constants/styles';

const SelectItem = ({
    label,
    value,
    isSelected,
    icon,
    iconColor,
    iconSize,
    style,
    onPress,
}) => {
    return (
        <Pressable onPress={onPress}>
            <View
                style={[styles.container, isSelected && styles.selected, style]}
            >
                <Text
                    style={[styles.label, isSelected && styles.contentSelected]}
                >
                    {label}
                </Text>
                <Ionicons
                    name={icon}
                    color={iconColor}
                    size={iconSize}
                    style={isSelected && styles.contentSelected}
                />
            </View>
        </Pressable>
    );
};

export default SelectItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.border,
        borderRadius: 15,
    },
    selected: {
        backgroundColor: GlobalStyles.colors.red,
    },
    label: {
        ...TextStyles.heading5b,
        color: GlobalStyles.textColor.primary100,
    },
    contentSelected: {
        color: GlobalStyles.textColor.white,
    },
});
