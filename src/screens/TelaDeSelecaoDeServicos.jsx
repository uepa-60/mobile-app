import React from 'react'
import { View } from 'react-native'
import { CardSelecao } from '../components/CardSelecao'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

export const TelaDeSelecaoDeServicos = ({ route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between'
      }}
    >
      <BotaoDeVoltar />

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
            <CardSelecao
              titulo='Serviços de Saúde'
              irPara={'Listagem'}
              parametros={{ ...route.params, tipo: 'saude' }}
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
            <CardSelecao
              titulo='Serviços Sociais'
              irPara={'Listagem'}
              parametros={{ ...route.params, tipo: 'sociais' }}
            />
          </View>
        </View>
      </View>

    </View>
  )
}