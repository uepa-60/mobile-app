import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { TelaDeServico } from './src/screens/TelaDeServico.jsx';
import { JosefinSans_500Medium, useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans'
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    MediumFont: JosefinSans_500Medium,
    RegularFont: JosefinSans_400Regular,
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
        <StatusBar style="light" translucent={false} backgroundColor={'#34A853'} />
        <TelaDeServico />
      </View>
    </View>
  );
}
