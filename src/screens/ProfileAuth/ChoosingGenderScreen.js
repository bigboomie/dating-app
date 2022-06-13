import { View, StyleSheet, Text } from 'react-native';
import Button from '../../components/UI/Button';
import { GlobalStyles, TextStyles } from './../../constants/styles';
import NavigationHeader from './../../components/UI/NavigationHeader';
import Select from '../../components/UI/Select';
import { useState } from 'react';

const data = [
    {
        value: 'male',
        label: 'Man',
        icon: 'checkmark',
    },
    {
        value: 'female',
        label: 'Woman',
        icon: 'checkmark',
    },
    {
        value: 'other',
        label: 'Choose another',
        icon: 'chevron-forward',
    },
];

function ChoosingGenderScreen({ navigation }) {
    const [selectedValue, setSelectedValue] = useState(data[0].value);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleSkipButton = () => {
        navigation.navigate('Homepage');
    };

    const handleFinishButtonPress = () => {
        navigation.navigate('Homepage');
    };

    return (
        <View style={styles.container}>
            <NavigationHeader
                hasBack
                hasSkip
                onBackPress={handleBackPress}
                onSkipPress={handleSkipButton}
            />
            <Text style={styles.title}>I am a</Text>
            <Select
                data={data}
                value={selectedValue}
                onItemSelect={setSelectedValue}
            />
            <Button
                style={styles.button}
                onPress={handleFinishButtonPress}
                textColor={GlobalStyles.textColor.white}
            >
                Finish
            </Button>
        </View>
    );
}

export default ChoosingGenderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingTop: 128,
        paddingBottom: 48,
        backgroundColor: GlobalStyles.colors.white,
    },
    title: {
        ...TextStyles.heading1,
        color: GlobalStyles.textColor.primary100,
    },
    button: {
        backgroundColor: GlobalStyles.colors.red,
        alignSelf: 'stretch',
    },
});
