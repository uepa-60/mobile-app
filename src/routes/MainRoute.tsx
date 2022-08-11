import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ServiceDetailsScreen } from '../screens/ServiceDetailsScreen'
import { DepartmentsScreen } from '../screens/DepartmentsScreen'
import { CitySelectionScreen } from '../screens/CitySelectionScreen'
import { ServiceSelectionScreen } from '../screens/ServiceSelectionScreen'
import { ListingScreen } from '../screens/ListingScreen'
import { WithDepartments, ServiceDetails } from '../types/types'

export type RootStackParamList = {
  CitySelectionScreen: undefined
  ListingScreen:
    | {
        city: string
        type: 'health' | 'social'
      }
    | WithDepartments
  ServiceSelectionScreen: {
    city: string
  }

  ServiceDetailsScreen: ServiceDetails
  DepartmentsScreen: WithDepartments
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
      <Stack.Screen
        name='CitySelectionScreen'
        component={CitySelectionScreen}
      />
      <Stack.Screen name='ListingScreen' component={ListingScreen} />
      <Stack.Screen
        name='ServiceSelectionScreen'
        component={ServiceSelectionScreen}
      />

      <Stack.Screen
        name='ServiceDetailsScreen'
        component={ServiceDetailsScreen}
      />
      <Stack.Screen name='DepartmentsScreen' component={DepartmentsScreen} />
    </Stack.Navigator>
  )
}
