import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ServiceDetailsScreen } from '../screens/ServiceDetailsScreen'
import { DepartmentsScreen } from '../screens/DepartmentsScreen'
import { CitySelectionScreen } from '../screens/CitySelectionScreen'
import { ServiceSelectionScreen } from '../screens/ServiceSelectionScreen'
import { ListingScreen } from '../screens/ListingScreen'

const Stack = createNativeStackNavigator()

export const MainRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName='CitySelection'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Service' component={ServiceDetailsScreen} />
      <Stack.Screen name='DepartmentsScreen' component={DepartmentsScreen} />
      <Stack.Screen name='CitySelection' component={CitySelectionScreen} />
      <Stack.Screen name='ListingScreen' component={ListingScreen} />
      <Stack.Screen name='ServiceSelection' component={ServiceSelectionScreen} />
    </Stack.Navigator>
  )
}