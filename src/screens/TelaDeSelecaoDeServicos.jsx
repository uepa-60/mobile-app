import React from 'react'
import { View } from 'react-native'
import { Titulo } from '../components/Titulo'
import { CardSelecao } from '../components/CardSelecao'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

export const TelaDeSelecaoDeServicos = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between'
      }}
    >
      <Titulo
        titulo='App60+'
        style={{
          textAlign: 'center',
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly'
        }}
      >

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            // borderColor: 'red',
            // borderWidth: 1,
          }}
        >
          <FontAwesome5 name='hand-holding-heart' size={24} color='white' />
          <CardSelecao
            titulo='Serviços de Saúde'
            chave='saude'
          />

        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            // borderColor: 'red',
            // borderWidth: 1,
          }}
        >
          <Ionicons name='ios-people' size={24} color='white' />
          <CardSelecao
            titulo='Serviços Sociais'
            chave='sociais'
          />
        </View>
      </View>

    </View>
  )
}