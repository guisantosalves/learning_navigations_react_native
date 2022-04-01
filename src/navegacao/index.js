//no index é react-navigation native
//no stack que é o react-navigation/stack

import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Stack from './Stack'
import Tab from './Tab'
import 'react-native-gesture-handler';

//navigation muda muito dependendo do versionamento do react-native
//navigationContainer -> Stack
export default (props) => {
    return(
        //drawer nao está funcionando
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                {/* <Drawer/> */}
                {/* drawer nao esta funcionando */}
                <Tab/>
                {/* a navegacao por tabs é a mais simples */}
                {/* <Stack /> */}
                {/* index -> stack -> PassoStack(recebe Tela e renderiza como children) */}
            </NavigationContainer>
        </SafeAreaView>
    )
}