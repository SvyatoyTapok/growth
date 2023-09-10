import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles';
import Header from '../../components/Header/Header';
import RegInput from '../../components/RegInput/Reginput';
import { emailRegex } from '../../components/constants';
import Button from '../../components/Button/Button';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Login() {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const currectEmail = useMemo(() => emailRegex.test(emailValue), [emailValue])
    const canGoForward = useMemo(() => currectEmail && passwordValue.length >= 8, [emailValue, passwordValue])
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.centerContainer}>
                <RegInput secure={false} color={currectEmail ? '#90EE90' : '#FFF'} title='Login' value={emailValue} setValue={setEmailValue} />
                <RegInput secure={true} title='Password' value={passwordValue} setValue={setPasswordValue} />
                <View style={styles.warningContainer}>
                    <BouncyCheckbox
                        size={24}
                        fillColor='#353542'
                        disableText={true}
                        style={{ width: 25 }}
                        iconStyle={{ borderRadius: 6 }}
                        unfillColor='#353542'
                    />
                    <Text style={styles.rememberText}>Remember me</Text>
                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.forgotText}>Forgot passoword</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button disabled={!canGoForward} title={'Sign in'} backgroundColor={canGoForward ? '#FF7966' : 'rgba(255, 255, 255, 0.10)'} shadow={true} onPress={() => { }} fontColor={canGoForward ? '#FFF' : '#000'} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Login