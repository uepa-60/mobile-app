import { StatusBar } from 'expo-status-bar';
import { TelaDeServico } from './src/screens/TelaDeServico.jsx';
import AppLoading from 'expo-app-loading';
import { JosefinSans_500Medium, useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans'

export default function App() {
  const [fontsLoaded] = useFonts({
    MediumFont: JosefinSans_500Medium,
    RegularFont: JosefinSans_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="auto" />
      <TelaDeServico />
    </>
  );
}
