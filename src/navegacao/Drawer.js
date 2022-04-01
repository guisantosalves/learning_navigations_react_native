import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';


const Drawer = createDrawerNavigator();

//dentro do stack.navigator ficam as telas
//options usa para dar o title
export default props => {
  return (
    <Drawer.Navigator initialRouteName='TelaC'>
        <Drawer.Screen name='TelaA' component={TelaA}/>
        <Drawer.Screen name='TelaB' component={TelaB}/>
        <Drawer.Screen name='TelaC' component={TelaC}/>
    </Drawer.Navigator>
  )
};
