import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Stack = createStackNavigator()

//dentro do stack.navigator ficam as telas 
//options usa para dar o title
export default (props) => {
    return(
        <Stack.Navigator initialRouteName='TelaA' 
        screenOptions={{headerShown: true}}>
            <Stack.Screen name='TelaA' 
            options={{title: 'informações iniciais'}}
            component={TelaA}/>
            <Stack.Screen name='TelaB' component={TelaB}/>
            <Stack.Screen name='TelaC' component={TelaC}/>
        </Stack.Navigator>
    )
}