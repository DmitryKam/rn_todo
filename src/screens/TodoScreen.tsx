import React, {useContext, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {AntDesign, FontAwesome} from '@expo/vector-icons';

import {THEME} from '../theme';
import {AppCard} from '../components/ui/AppCard';
import {EditModal} from '../components/EditModal';
import {AppTextBold} from '../components/ui/AppTextBold';
import {AppButton} from '../components/ui/AppButton';
import {TodoContext} from '../context/todo/todoContext';
import {ScreenContext} from '../context/screen/screenContext';


export const TodoScreen: React.FC = (props) => {
    const {todos, updateTodo, removeTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState<boolean>(false)
    const todo = todos.find(todo => todo.id === todoId)

    const saveHandler = async (title: string) => {
        if (todo) {
            await updateTodo(todo.id, title)
            setModal(false)
        }
    }

    return todo ? (
        <View>
            <EditModal onSave={saveHandler} value={todo.title} visible={modal} onCancel={() => setModal(false)}/>
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name={'edit'} size={20}/>
                </AppButton>
            </AppCard>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen(null)}>
                        <AntDesign name={'back'} size={20} color={'#fff'}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={removeTodo.bind(null, todo.id)} color={THEME.DANGER_COLOR}>
                        <FontAwesome name={'remove'} size={20} color={'#fff'}/>
                    </AppButton>
                </View>
            </View>
        </View>
    ) : null
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        //width: Dimensions.get('window').width / 3
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 26
    }
})