import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import {Navbar} from './components/Navbar';
import {THEME} from './theme';
import {MainScreen} from './screens/MainScreen';
import {TodoScreen} from './screens/TodoScreen';
import {ScreenContext} from './context/screen/screenContext';

export const MainLayout: React.FC = (props) => {
    const {todoId} = useContext(ScreenContext)

    return (
        <View style={styles.wrapper}>
            <Navbar title={'Todo App'}/>
            <View style={styles.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: THEME.PADDING_VERTICAL,
        flex:1
    },
    wrapper: {
        flex: 1
    }
});