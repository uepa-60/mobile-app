import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TelaDeServico } from '../screens/TelaDeServico'
import { TelaDeListagemDeDepartamentos } from '../screens/TelaDeListagemDeDepartamentos'
import { TelaDeSelecaoDeCidade } from '../screens/TelaDeSelecaoDeCidade'
import { TelaDeSelecaoDeServicos } from '../screens/TelaDeSelecaoDeServicos'
import { TelaDeListagem } from '../screens/TelaDeListagem'

const Stack = createNativeStackNavigator()

export const RotaPrincipal = () => {
  return (
    <Stack.Navigator initialRouteName='Cidade'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Servico' component={TelaDeServico} />
      <Stack.Screen name='Cidade' component={TelaDeSelecaoDeCidade} />
      <Stack.Screen name='ListagemDepartamentos' component={TelaDeListagemDeDepartamentos} />
      <Stack.Screen name='Listagem' component={TelaDeListagem} />
      <Stack.Screen name='Selecao' component={TelaDeSelecaoDeServicos} />
    </Stack.Navigator>
  )
}