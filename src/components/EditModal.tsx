import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, TextInput, View } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';

type EditModalPropsType = {
    visible:any
    onCancel:() => void
    value:string
    onSave:(title:string) => void
}

export const EditModal = (props:EditModalPropsType) => {
    const {visible, onCancel, value, onSave} = props
    const [title, setTitle] = useState<string>(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error!', `Min length 3 symbols. Now is ${title.trim().length} symbols`)
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }

    return (
        <Modal
            visible={visible}
            animationType={'slide'}
            transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                    placeholder={'Enter name'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={cancelHandler}>
                        Cancel
                    </AppButton>
                <AppButton onPress={saveHandler}>
                Save
                </AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})