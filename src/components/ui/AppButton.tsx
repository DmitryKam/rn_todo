import React from 'react';
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';

import {AppTextBold} from './AppTextBold';
import {THEME} from '../../theme';

type AppButtonPropsType = {
    onPress: () => void
    color?: string
}

export const AppButton: React.FC<AppButtonPropsType> = (props) => {
    const {children, onPress, color = THEME.MAIN_COLOR} = props
    const Wrapper: React.ElementType = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
})