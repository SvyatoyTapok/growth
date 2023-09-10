import React, { useState, useMemo } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native'
import styles from './styles';
import Header from '../../components/Header/Header';
import RegInput from '../../components/RegInput/Reginput';
import * as Progress from 'react-native-progress';
import Button from '../../components/Button/Button';
import { emailRegex } from '../../components/constants';
import { useNavigation } from '@react-navigation/native';
function Register2() {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width / 5.15
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const currectEmail = useMemo(() => emailRegex.test(emailValue), [emailValue])
    // (?=.*[0-9]) - строка содержит хотя бы одно число;
    const containsNumber = useMemo(() => /[0-9]/.test(passwordValue), [passwordValue])
    // (?=.* [!@#$ %^&*]) - строка содержит хотя бы один спецсимвол;
    const containsSpec = useMemo(() => /[!@#$%^&*]/.test(passwordValue), [passwordValue])
    // (?=.* [A - Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
    const containsUpperCase = useMemo(() => /[A-Z]/.test(passwordValue), [passwordValue])

    const superEasyPassword = useMemo(() => passwordValue.length ? 1 : 0, [passwordValue])
    const easyPassword = useMemo(() => passwordValue.length >= 8 && containsNumber ? 1 : 0, [passwordValue])
    const mediumPassword = useMemo(() => easyPassword && (containsUpperCase || containsSpec) ? 1 : 0, [passwordValue])
    const hardPassword = useMemo(() => easyPassword && (containsSpec && containsUpperCase) ? 1 : 0, [passwordValue])

    const canGoForward = useMemo(() => currectEmail && Boolean(easyPassword) ? true : false, [passwordValue, emailValue])
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.centerContainer}>
                <RegInput secure={false} color={currectEmail ? '#90EE90' : '#FFF'} title='E-mail address' value={emailValue} setValue={setEmailValue} />
                <RegInput secure={true} title='Password' value={passwordValue} setValue={setPasswordValue} />
                <View style={styles.progressContainer}>
                    <Progress.Bar progress={superEasyPassword} borderRadius={0} borderWidth={0} color={'#f1807e'} unfilledColor='#353542' width={windowWidth} />
                    <Progress.Bar progress={easyPassword} borderRadius={0} borderWidth={0} color={'#ff9248'} unfilledColor='#353542' width={windowWidth} />
                    <Progress.Bar progress={mediumPassword} borderRadius={0} borderWidth={0} color={'#FFF000'} unfilledColor='#353542' width={windowWidth} />
                    <Progress.Bar progress={hardPassword} borderRadius={0} borderWidth={0} color={'#90EE90'} unfilledColor='#353542' width={windowWidth} />
                </View>
                <View style={styles.warningContainer}>
                    <Text style={styles.warningText}>Use 8 or more characters with a mix of letters, numbers & symbols.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={'Get started, it’s free!'} disabled={!canGoForward} backgroundColor={!canGoForward ? 'rgba(255, 255, 255, 0.10)' : '#FF7966'} shadow={true} onPress={() => { }} fontColor={canGoForward ? '#FFF' : '#000'} />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>Do you have already an account?</Text>
                <Button
                    title={'Sign in'}
                    backgroundColor={'rgba(255, 255, 255, 0.10)'}
                    shadow={false}
                    onPress={() => navigation.navigate('Login')}
                    fontColor={'#FFF'}
                />
            </View>
        </ScrollView>
    )
}

export default Register2