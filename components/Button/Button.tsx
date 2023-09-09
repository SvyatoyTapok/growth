import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Shadow } from 'react-native-shadow-2'
type Props = {
    title: string,
    backgroundColor: string,
    shadow: boolean,
    onPress: () => void,
    leftIcon?: JSX.Element,
    fontColor: string,
    disabled?: boolean,
}

const Button = ({ title, backgroundColor, shadow, onPress, leftIcon, fontColor, disabled }: Props) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <Shadow
                disabled={!shadow}
                style={styles.shadowStyle}
                distance={3}
                startColor={backgroundColor}
                containerStyle={[styles.container, { backgroundColor: backgroundColor }]}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    {leftIcon
                        ? leftIcon
                        : null}
                    <Text style={[styles.titleText, { color: fontColor }]}>{title}</Text>
                </View>
            </Shadow>
        </TouchableOpacity>
    )
}

export default Button