import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Title from '../../assets/Trackizer.svg';
import Logo from '../../assets/Icon.svg'
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer} >
                <Logo />
            </View>
            <View style={styles.titleContainer}>
                <Title />
            </View>
        </View>
    )
}

export default Header