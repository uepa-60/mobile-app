import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { Divisor } from '../components/Divisor'
import { Titulo } from '../components/Titulo'

const dadosTemp = {
  saude: [
    {
      id: 1,
      servico: 'UPA do Jurunas'
    },
    {
      id: 2,
      servico: 'UPA da Pedreira'
    },
    {
      id: 3,
      servico: 'UPA da Terra-Firme'
    },
    {
      id: 4,
      servico: 'UPA da Sacramenta'
    },
    {
      id: 5,
      servico: 'UPA da Marambaia'
    },
  ],
  sociais: [
    {
      id: 1,
      servico: 'servico a'
    },
    {
      id: 2,
      servico: 'servico b'
    },
    {
      id: 3,
      servico: 'servico c'
    },
    {
      id: 4,
      servico: 'servico d'
    },
    {
      id: 5,
      servico: 'servico e'
    },
  ]
}

export const TelaDeListagem = ({ route }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >

      <BotaoDeVoltar />

      <Titulo
        titulo={route.params.titulo}
      />

      <Divisor />

      <FlatList
        data={dadosTemp[route.params.tipo]}
        style={{
          marginTop: 20
        }}
        keyExtractor={item => item.id.toString()}
        renderItem={a => {
          return (
            <View
              style={{
                paddingVertical: 44,
                width: '100%',
                marginBottom: 12,
                borderRadius: 25,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  fontFamily: 'RegularFont',
                  color: '#34A853'
                }}
              >
                {a.item.servico}
              </Text>
            </View>
          )
        }}
      />
    </ScrollView>
  )
}