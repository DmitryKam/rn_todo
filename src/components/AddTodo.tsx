import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, Keyboard } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';

type AddTodoPropsType = {
    onSubmit:(title:string) => void
}

export const AddTodo = (props:AddTodoPropsType) => {
    const initialValue = 'Enter your todo!'
    const [value, setValue] = useState<string>('')
    const {onSubmit} = props

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Todo name can not be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       placeholder={initialValue}
                       value={value}
                       onChangeText={setValue}
                       autoCorrect={false}
                       autoCapitalize={'none'}
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo" size={24}>
                Add todo!
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})
