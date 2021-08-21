import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';
import { ScreenState } from './src/context/screen/ScreenState';

export type TodosType = {
    id:string
    title:string
}

async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState<boolean>(false)

    if (!isReady) {
        return <AppLoading
            startAsync={loadApplication}
            onError={() => console.log('Error')}
            onFinish={() => setIsReady(true)}
        />
    }

    return (
        <ScreenState>
          <TodoState>
            <MainLayout />
          </TodoState>
        </ScreenState>
    );
}