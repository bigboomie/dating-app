import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import IconButton from './IconButton';
import { GlobalStyles } from './../../constants/styles';
const AvatarInput = ({ style, onPress }) => {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Image
                    style={styles.avatarInput}
                    source={{
                        uri: 'https://i.pinimg.com/564x/10/53/7f/10537f156ba769e57d58d785bb61509b.jpg',
                    }}
                />
                <IconButton
                    icon="camera"
                    iconColor={GlobalStyles.colors.white}
                    iconSize={16}
                    onPress={() => {}}
                    style={styles.uploadButton}
                />
            </Pressable>
        </View>
    );
};

export default AvatarInput;

const styles = StyleSheet.create({
    avatarInput: {
        width: 99,
        height: 99,
        borderRadius: 25,
        alignSelf: 'center',
        position: 'relative',
    },
    uploadButton: {
        backgroundColor: GlobalStyles.colors.red,
        borderRadius: 20,
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -4,
        right: -2,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.white,
    },
    pressed: {
        opacity: 0.7,
    },
});
