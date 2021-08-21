import React from 'react';
import {StyleSheet, Text} from 'react-native';

type AppBoldTextPropsType = {
    style?:Object
}

export const AppTextBold:React.FC<AppBoldTextPropsType> = (props) => {
    const {children, style} = props
    return (
        <Text style={{...styles.default, ...style}}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
})