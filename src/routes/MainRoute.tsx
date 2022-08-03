import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ServiceDetailsScreen } from '../screens/ServiceDetailsScreen'
import { DepartmentsScreen } from '../screens/DepartmentsScreen'
import { CitySelectionScreen } from '../screens/CitySelectionScreen'
import { ServiceSelectionScreen } from '../screens/ServiceSelectionScreen'
import { ListingScreen } from '../screens/ListingScreen'

type A = {
  nome: string
  endereco: string
  descricao: string
  horario: string
  site: string
  servicos: string[]
  telefones: string[]
  coordenadas: {
    latitude: number,
    longitude: number
  }
}

export type RootStackParamList = {
  CitySelectionScreen: undefined
  ListingScreen: {
    city: string
    type: 'health' | 'social'
  }
  ServiceSelectionScreen: {
    city: string
  }

  ServiceDetailsScreen: A
  DepartmentsScreen: any
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const MainRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName='CitySelectionScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='CitySelectionScreen' component={CitySelectionScreen} />
      <Stack.Screen name='ListingScreen' component={ListingScreen} />
      <Stack.Screen name='ServiceSelectionScreen' component={ServiceSelectionScreen} />

      <Stack.Screen name='ServiceDetailsScreen' component={ServiceDetailsScreen} />
      <Stack.Screen name='DepartmentsScreen' component={DepartmentsScreen} />
    </Stack.Navigator>
  )
}