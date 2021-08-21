import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { TodosType } from '../../App';
import { AppText } from './ui/AppText';

type TodoPropsType = {
    todo:TodosType
    onRemove:(id:string) => void
    onOpen:(id:string) => void
}

export const Todo = (props:TodoPropsType) => {
    const {todo, onRemove, onOpen} = props

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onOpen.bind(null,todo.id)}
            onLongPress={onRemove.bind(null, todo.id)}>
            <View style={styles.todo}>
                <AppText>{todo.title}</AppText>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})