import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { TelaDeServico } from './src/screens/TelaDeServico';

export default function App() {
  return (
    <View>
      <TelaDeServico />
      <StatusBar style="auto" />
    </View>
  );
}
