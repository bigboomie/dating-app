import { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import CodeInputItem from './CodeInputItem';

function CodeInput({ value, setValue, onConfirm }) {
    const code1Ref = useRef(null);
    const code2Ref = useRef(null);
    const code3Ref = useRef(null);
    const code4Ref = useRef(null);
    const code5Ref = useRef(null);
    const code6Ref = useRef(null);

    return (
        <View style={styles.container}>
            <CodeInputItem
                forwardRef={code1Ref}
                autoFocus={!value.pin1.length}
                value={value.pin1}
                onChangeText={(text) => {
                    setValue({ ...value, pin1: text });
                    code2Ref.current.focus();
                }}
                onFocus={() => setValue({ ...value, pin1: '' })}
            />
            <CodeInputItem
                forwardRef={code2Ref}
                autoFocus={false}
                value={value.pin2}
                onChangeText={(text) => {
                    setValue({ ...value, pin2: text });
                    code3Ref.current.focus();
                }}
                onFocus={() => setValue({ ...value, pin2: '' })}
            />
            <CodeInputItem
                forwardRef={code3Ref}
                autoFocus={false}
                value={value.pin3}
                onChangeText={(text) => {
                    setValue({ ...value, pin3: text });
                    code4Ref.current.focus();
                }}
                onFocus={() => setValue({ ...value, pin3: '' })}
            />
            <CodeInputItem
                forwardRef={code4Ref}
                autoFocus={false}
                value={value.pin4}
                onChangeText={(text) => {
                    setValue({ ...value, pin4: text });
                    code5Ref.current.focus();
                }}
                onFocus={() => setValue({ ...value, pin4: '' })}
            />
            <CodeInputItem
                forwardRef={code5Ref}
                autoFocus={false}
                value={value.pin5}
                onChangeText={(text) => {
                    setValue({ ...value, pin5: text });
                    code6Ref.current.focus();
                }}
                onFocus={() => setValue({ ...value, pin5: '' })}
            />
            <CodeInputItem
                forwardRef={code6Ref}
                autoFocus={false}
                value={value.pin6}
                onChangeText={(text) => {
                    setValue({ ...value, pin6: text });
                    code6Ref.current.blur();
                }}
                onFocus={() => setValue({ ...value, pin6: '' })}
                onBlur={() => {
                    onConfirm();
                }}
            />
        </View>
    );
}

export default CodeInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
