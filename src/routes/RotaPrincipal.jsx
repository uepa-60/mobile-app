import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TelaDeServico } from '../screens/TelaDeServico'
import { TelaDeSelecaoDeServicos } from '../screens/TelaDeSelecaoDeServicos'
import { TelaDeListagem } from '../screens/TelaDeListagem'

const Stack = createNativeStackNavigator()

export const RotaPrincipal = () => {
  return (
    <Stack.Navigator initialRouteName='Selecao'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Servico' component={TelaDeServico} />
      <Stack.Screen name='Listagem' component={TelaDeListagem} />
      <Stack.Screen name='Selecao' component={TelaDeSelecaoDeServicos}
        options={{

        }}
      />
    </Stack.Navigator>
  )
}