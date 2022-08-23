/* eslint-disable camelcase */
import React from 'react'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { MainRoute } from './src/routes/MainRoute'
import { NavigationContainer } from '@react-navigation/native'
import {
  Roboto_700Bold,
  useFonts,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'
import { COLORS } from './src/styles/theme'

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    MediumFont: Roboto_700Bold,
    RegularFont: Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.primary
      }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: 500
        }}
      >
        <StatusBar
          style='light'
          translucent={false}
          backgroundColor={COLORS.primary}
        />
        <NavigationContainer
          theme={{
            colors: {
              background: 'transparent'
            }
          }}
        >
          <MainRoute />
        </NavigationContainer>
      </View>
    </View>
  )
}
