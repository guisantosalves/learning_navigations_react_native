import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

//dentro do stack.navigator ficam as telas
//options usa para dar o title
export default props => {
  return (
    <Stack.Navigator
      initialRouteName="TelaA"
      screenOptions={{headerShown: true}}>
          
      <Stack.Screen name="TelaA" options={{title: 'informações iniciais'}}>
            {props => (
            <PassoStack {...props} avancar="TelaB">
                <TelaA />
            </PassoStack>
            )}
      </Stack.Screen>

      <Stack.Screen name="TelaB" options={{title: 'informacoes secundárias'}}> 
            {props=>(
                <PassoStack {...props} voltar avancar="TelaC"> 
                    <TelaB {...props} /> 
                    {/* faz dessa maneira para passar dados de uma tela
                    para outra */}
                </PassoStack>
            )}
      </Stack.Screen>

      <Stack.Screen name="TelaC" options={{title: 'informacoes secundárias'}}> 
            {props=>(
                <PassoStack {...props} voltar avancar="TelaC">
                    <TelaC {...props}/>
                </PassoStack>
            )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
