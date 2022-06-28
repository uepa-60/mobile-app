import React from 'react'
import { View } from 'react-native'
import { Card } from '../components/Card'
import { BackButton } from '../components/BackButton'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

export const ServiceSelectionScreen = ({ route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between'
      }}
    >
      <BackButton />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          padding: 25
        }}
      >

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >

          <View
            style={{
              flexBasis: '20%',
              alignItems: 'flex-start',
            }}
          >
            <FontAwesome5 name='hand-holding-heart' size={35} color='white' />
          </View>

          <View
            style={{
              flexBasis: '80%',
              alignItems: 'flex-end'
            }}
          >
            <Card
              title='Serviços de Saúde'
              goTo={'Listagem'}
              parameters={{ ...route.params, tipo: 'saude' }}
            />
          </View>

        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexBasis: '20%',
              alignItems: 'flex-start',
            }}
          >
            <Ionicons name='ios-people' size={35} color='white' />
          </View>
          <View
            style={{
              flexBasis: '80%',
              alignItems: 'flex-end'
            }}
          >
            <Card
              title='Serviços Sociais'
              goTo={'Listagem'}
              parameters={{ ...route.params, tipo: 'sociais' }}
            />
          </View>
        </View>
      </View>

    </View>
  )
}