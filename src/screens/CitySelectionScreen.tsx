import React from 'react'
import { View } from 'react-native'
import { Card } from '../components/Card'
import { Title } from '../components/Title'
import { Divider } from '../components/Divider'
import { RootStackParamList } from '../routes/MainRoute'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Props = NativeStackNavigationProp<
  RootStackParamList,
  'CitySelectionScreen'
>

export const CitySelectionScreen = (): JSX.Element => {
  const navigation = useNavigation<Props>()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 15
      }}
    >
      <Title title={'VOCÊ DESEJA VER OS SERVIÇOS DE QUAL CIDADE? '} />
      <Divider />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Card
          title='Belém'
          onPress={() => {
            navigation.navigate('ServiceSelectionScreen', { city: 'belem' })
          }}
        />

        <Card
          title='Ananindeua'
          onPress={() => {
            navigation.navigate('ServiceSelectionScreen', {
              city: 'ananindeua'
            })
          }}
        />
      </View>
    </View>
  )
}
