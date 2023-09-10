import React from 'react';
import { View, Text, TextInput } from 'react-native'
import styles from './styles';

type Props = {
    title: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    color?: string,
    secure: boolean,
}
function RegInput({ title, value, setValue, color, secure }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    secureTextEntry={secure}
                    autoCapitalize='none'
                    value={value}
                    inputMode='email'
                    maxLength={37}
                    onChangeText={setValue}
                    style={[{ marginHorizontal: 15 }, color ? { color: color } : { color: '#FFF' }]}
                />
            </View>
        </View>
    )
}

export default RegInput