import { Text, View, StyleSheet, Pressable } from 'react-native';
import { TextStyles } from '../../constants/styles';

function Button({ children, onPress, style, textColor }) {
    return (
        <View style={{ ...style, borderRadius: 15 }}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.buttonContainer}>
                    <Text style={[styles.buttonText, { color: textColor }]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16,
    },
    buttonText: {
        ...TextStyles.heading5b,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
});
