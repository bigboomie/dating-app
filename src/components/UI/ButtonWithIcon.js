import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextStyles } from '../../constants/styles';

function ButtonWithIcon({
    children,
    icon,
    iconSize,
    iconColor,
    textColor,
    onPress,
    style,
}) {
    return (
        <View style={[styles.container, style]}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.buttonContainer}>
                    <Ionicons name={icon} size={iconSize} color={iconColor} />
                    <Text style={{ ...styles.buttonText, color: textColor }}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default ButtonWithIcon;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonText: {
        ...TextStyles.heading6,
        marginLeft: 20,
    },
    pressed: {
        opacity: 0.7,
    },
});
