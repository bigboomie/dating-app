import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/styles';

function IconButton({ icon, iconSize, iconColor, onPress, style }) {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.buttonContainer}>
                    <Ionicons name={icon} size={iconSize} color={iconColor} />
                </View>
            </Pressable>
        </View>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
    buttonContainer: {},
});
