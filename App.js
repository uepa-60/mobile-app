import { View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { RotaPrincipal } from './src/routes/RotaPrincipal'
import { NavigationContainer } from '@react-navigation/native'
import { Quicksand_700Bold, Quicksand_400Regular, useFonts } from '@expo-google-fonts/quicksand'

export default function App() {
  const [fontsLoaded] = useFonts({
    MediumFont: Quicksand_700Bold,
    RegularFont: Quicksand_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#34A853'
      }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: 500
        }}
      >
        <StatusBar style='light' translucent={false} backgroundColor={'#34A853'} />
        <NavigationContainer
          theme={{
            colors: {
              background: 'transparent',
            }
          }}
        >
          <RotaPrincipal />
        </NavigationContainer>
      </View>
    </View>
  )
}
