import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ServiceDetailsScreen } from '../screens/ServiceDetailsScreen'
import { DepartmentsScreen } from '../screens/DepartmentsScreen'
import { CitySelectionScreen } from '../screens/CitySelectionScreen'
import { ServiceSelectionScreen } from '../screens/ServiceSelectionScreen'
import { ListingScreen } from '../screens/ListingScreen'

export type RootStackParamList = {
  ServiceDetailsScreen: any
  DepartmentsScreen: any
  CitySelectionScreen: any
  ListingScreen: any
  ServiceSelectionScreen: any
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
      <Stack.Screen name='ServiceDetailsScreen' component={ServiceDetailsScreen} />
      <Stack.Screen name='DepartmentsScreen' component={DepartmentsScreen} />
      <Stack.Screen name='CitySelectionScreen' component={CitySelectionScreen} />
      <Stack.Screen name='ListingScreen' component={ListingScreen} />
      <Stack.Screen name='ServiceSelectionScreen' component={ServiceSelectionScreen} />
    </Stack.Navigator>
  )
}