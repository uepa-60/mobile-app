import React from 'react'
import { View, } from 'react-native'
import { Card } from '../components/Card'
import { Divider } from '../components/Divider'
import { Title } from '../components/Title'

export const CitySelectionScreen = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 25
      }}
    >

      <Title title={'VOCÊ DESEJA VER OS SERVIÇOS DE QUAL CIDADE? '} />
      <Divider />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Card
          title='Belém'
          goTo={'Selecao'}
          parameters={{ cidade: 'belem' }}
        />

        <Card
          title='Ananindeua'
          goTo={'Selecao'}
          parameters={{ cidade: 'ananindeua' }}
        />
      </View>
    </View>
  )
}