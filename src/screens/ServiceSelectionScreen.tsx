import React from 'react'
import { View } from 'react-native'
import { Card } from '../components/Card'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

import { BackButton } from '../components/BackButton'
import { RootStackParamList } from '../routes/MainRoute'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ServiceSelectionScreen'
>

export const ServiceSelectionScreen = ({ route: { params } }: Props) => {
  const navigation = useNavigation<Props['navigation']>()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 15
      }}
    >
      <BackButton />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              flexBasis: '20%',
              alignItems: 'flex-start'
            }}
          >
            <FontAwesome5 name="hand-holding-heart" size={35} color="white" />
          </View>

          <View
            style={{
              flexBasis: '80%',
              alignItems: 'flex-end'
            }}
          >
            <Card
              title="Serviços de Saúde"
              onPress={() => {
                navigation.navigate('ListingScreen', {
                  ...params,
                  type: 'health'
                })
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              flexBasis: '20%',
              alignItems: 'flex-start'
            }}
          >
            <Ionicons name="ios-people" size={35} color="white" />
          </View>
          <View
            style={{
              flexBasis: '80%',
              alignItems: 'flex-end'
            }}
          >
            <Card
              title="Serviços Sociais"
              onPress={() => {
                navigation.navigate('ListingScreen', {
                  ...params,
                  type: 'social'
                })
              }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
