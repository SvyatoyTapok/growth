import React from 'react';
import { ImageBackground, StatusBar, View, Text } from 'react-native'
import styles from './styles';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
function WelcomeScreen() {
    const image = require('../../assets/WelcomeScreen.png')
    const navigation = useNavigation();
    return (
        <ImageBackground style={styles.mainContainer} source={image}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#1C1C23'} />
            <Header />
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitleText}>Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna risus.</Text>
                <View>
                    <Button onPress={() => navigation.navigate('Register1')} shadow={true} title='Get started' backgroundColor='#FF7966' fontColor={'#FFF'} />
                    <Button onPress={() => { }} shadow={false} title='I have an account' backgroundColor='rgba(255, 255, 255, 0.10)' fontColor={'#FFF'} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen