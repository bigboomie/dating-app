import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from './../../constants/styles';

const HomeScreen = ({ navigation }) => {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.white,
    },
});
