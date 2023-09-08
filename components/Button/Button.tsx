import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Shadow } from 'react-native-shadow-2'

type Props = {
    title: string,
    backgroundColor: string,
    shadow: boolean
}

const Button = ({ title, backgroundColor, shadow }: Props) => {
    return (
        <TouchableOpacity>
            <Shadow
                disabled={!shadow}
                style={styles.shadowStyle}
                distance={6}
                startColor={'#ff7f3780'}
                containerStyle={[styles.container, { backgroundColor: backgroundColor }]}
            >
                <Text style={styles.titleText}>{title}</Text>
            </Shadow>
        </TouchableOpacity>
    )
}

export default Button