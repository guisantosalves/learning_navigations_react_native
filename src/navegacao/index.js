//no index é react-navigation native
//no stack que é o react-navigation/stack

import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Stack from './Stack'
import Tab from './Tab'
import 'react-native-gesture-handler';

//navigationContainer -> Stack
export default (props) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab/>
                {/* <Stack /> */}
                {/* index -> stack -> PassoStack(recebe Tela e renderiza como children) */}
            </NavigationContainer>
        </SafeAreaView>
    )
}