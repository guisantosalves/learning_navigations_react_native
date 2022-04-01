import React from 'react';
import {View, Text, Button} from 'react-native';

export default props => {
  return (
    <View style={{flex: 1}}>
        {/* primeiro renderiza o botao e depois o props.children */}
        
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {/* renderização condicional voltar */}
      {props.voltar ? (
          <Button
            title="voltar"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        ) : (
          false
        )}
        {/* renderização condicional avançar */}
        {props.avancar ? (
          <Button
            title="avançar"
            onPress={() => {
              props.navigation.navigate(props.avancar);
            }}
          />
        ) : (
          false
        )}
      </View>

      <View style={{flex: 1}}>
          {props.children}
      </View>
    </View>
  );
};
