import React from 'react';
import {StyleSheet, Text} from 'react-native';

type AppTextPropsType = {
    style?: Object
}

export const AppText: React.FC<AppTextPropsType> = (props) => {
    const {children, style} = props

    return (
        <Text style={{...styles.default, ...style}}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
})