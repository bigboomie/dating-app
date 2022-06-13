import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from './../../constants/styles';

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/img/Coming.gif')}
                resizeMethod="auto"
                style={styles.image}
            />
        </View>
    );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 48,
        backgroundColor: GlobalStyles.colors.white,
    },
    image: {
        height: 250,
        width: '100%',
    },
});
