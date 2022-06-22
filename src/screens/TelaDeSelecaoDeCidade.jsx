import React from 'react'
import { View, } from 'react-native'
import { CardSelecao } from '../components/CardSelecao'
import { Divisor } from '../components/Divisor'
import { Titulo } from '../components/Titulo'

export const TelaDeSelecaoDeCidade = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 15
      }}
    >

      <Titulo titulo={'VOCÊ DESEJA VER OS SERVIÇOS DE QUAL CIDADE? '} />
      <Divisor />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CardSelecao
          titulo='Belém'
          irPara={'Selecao'}
          parametros={{ cidade: 'belem' }}
        />

        <CardSelecao
          titulo='Ananindeua'
          irPara={'Selecao'}
          parametros={{ cidade: 'ananindeua' }}
        />
      </View>
    </View>
  )
}