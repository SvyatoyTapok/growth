import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Apple from '../../assets/Apple.svg'
import FaceBook from '../../assets/Facebook.svg'
import Google from '../../assets/Google.svg'
function Register1() {
    return (
        <>
            <Header />
            <View style={{ position: 'absolute', alignSelf: 'center', width: '90%', bottom: 0, marginBottom: '10%' }}>
                <View style={styles.firstButtons}>
                    <Button
                        leftIcon={<Apple />}
                        title={'Sign up with Apple'}
                        backgroundColor={'#000'}
                        shadow={true}
                        onPress={() => { }}
                        fontColor={'#FFF'} />
                    <Button
                        leftIcon={<Google />}
                        title={'Sign up with Google'}
                        backgroundColor={'#FFF'}
                        fontColor={'#000'}
                        shadow={true}
                        onPress={() => { }}
                    />
                    <Button
                        leftIcon={<FaceBook />}
                        title={'Sign up with Facebook'}
                        backgroundColor={'#1771E6'}
                        shadow={true}
                        onPress={() => { }}
                        fontColor={'#FFF'}
                    />
                </View>
                <Button
                    disabled={true}
                    title='or'
                    backgroundColor={''}
                    shadow={false}
                    onPress={() => { }}
                    fontColor={'#FFF'} />
                <Button
                    title={'Sign up with E-mail'}
                    backgroundColor={'rgba(255, 255, 255, 0.10)'}
                    shadow={false}
                    onPress={() => { }}
                    fontColor={'#FFF'}
                />
                <Text style={{ color: '#666680', fontFamily: 'InterRegular', width: '100%', textAlign: 'center', bottom: 0 }}>
                    By registering, you agree to our Terms of Use. Learn how we collect, use and share your data.</Text>
            </View>
        </>
    )
}

export default Register1