import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextStyles } from '../../constants/styles';
import Button from './../../components/UI/Button';
import { GlobalStyles } from './../../constants/styles';
import CustomInputField from '../../components/UI/CustomInputField';
import AvatarInput from '../../components/UI/AvatarInput';
import ButtonWithIcon from './../../components/UI/ButtonWithIcon';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getFormattedDate } from './../../utils/dateUtils';

const ProfileDetailScreen = ({ navigation }) => {
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
        date: new Date(),
    });

    const [isChooseDate, setIsChooseDate] = useState(false);

    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            }),
        [navigation]
    );

    const inputFirstname = (text) => {
        setInputValue({ ...inputValue, firstname: text });
    };

    const inputLastname = (text) => {
        setInputValue({ ...inputValue, lastname: text });
    };

    const handleSubmitData = () => {
        navigation.navigate('ChoosingGenderScreen');
    };

    const handleSkipButton = () => {
        navigation.navigate('ChoosingGenderScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile details</Text>
            <AvatarInput style={styles.profileImage} />
            <View style={styles.inputsContainer}>
                <CustomInputField
                    label="First name"
                    value={inputValue.firstname}
                    onChangeText={inputFirstname}
                    style={styles.inputField}
                />
                <CustomInputField
                    label="Last name"
                    value={inputValue.lastname}
                    onChangeText={inputLastname}
                    style={styles.inputField}
                />
                <ButtonWithIcon
                    icon="calendar"
                    iconColor={GlobalStyles.colors.red}
                    iconSize={18}
                    onPress={() => {
                        setIsChooseDate(true);
                    }}
                    style={styles.dateInput}
                    textColor={GlobalStyles.colors.red}
                >
                    {getFormattedDate(inputValue.date)}
                </ButtonWithIcon>
            </View>
            <Button
                onPress={handleSubmitData}
                style={styles.buttonConfirm}
                textColor={GlobalStyles.textColor.white}
            >
                Confirm
            </Button>
            <Button
                onPress={handleSkipButton}
                style={styles.buttonSkip}
                textColor={GlobalStyles.colors.red}
            >
                Skip
            </Button>
            <DateTimePickerModal
                isVisible={isChooseDate}
                mode="date"
                onConfirm={(date) => {
                    setInputValue({ ...inputValue, date: date });
                    setIsChooseDate(false);
                }}
                onCancel={() => setIsChooseDate(false)}
                date={inputValue.date}
            />
        </View>
    );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 40,
        paddingTop: 128,
        backgroundColor: GlobalStyles.colors.white,
    },
    title: {
        ...TextStyles.heading1,
        color: GlobalStyles.textColor.primary100,
        textAlign: 'left',
    },
    profileImage: {
        alignSelf: 'center',
    },
    inputsContainer: {
        alignSelf: 'stretch',
    },
    inputField: {
        marginBottom: 16,
    },
    dateInput: {
        backgroundColor: 'rgba(233, 64, 87, 0.1)',
        borderRadius: 15,
    },
    buttonConfirm: {
        backgroundColor: GlobalStyles.colors.red,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonSkip: {
        position: 'absolute',
        top: 40,
        right: 34,
    },
});
