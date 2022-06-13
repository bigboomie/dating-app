import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SelectItem from './SelectItem';
import { GlobalStyles } from './../../constants/styles';

const Select = ({ data, value, onItemSelect }) => {
    return (
        <View style={styles.container}>
            {data.map((item) => (
                <SelectItem
                    key={item.value}
                    value={item.value}
                    label={item.label}
                    icon={item.icon}
                    iconColor={GlobalStyles.colors.border}
                    iconSize={20}
                    style={styles.item}
                    isSelected={item.value === value}
                    onPress={() => onItemSelect(item.value)}
                />
            ))}
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    item: {
        marginBottom: 10,
    },
});
