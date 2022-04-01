import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';


const Tab = createBottomTabNavigator();

//dentro do stack.navigator ficam as telas
//options usa para dar o title
export default props => {
  return (
    <Tab.Navigator tabBarOptions={{
        
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {fontSize: 30}
    }} initialRouteName='TelaC'>
        <Tab.Screen name='TelaA' component={TelaA}/>
        <Tab.Screen name='TelaB' component={TelaB}/>
        <Tab.Screen name='TelaC' component={TelaC}/>
    </Tab.Navigator>
  )
};
