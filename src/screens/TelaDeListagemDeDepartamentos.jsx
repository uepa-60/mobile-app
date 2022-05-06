import React from 'react'
import { ScrollView, View, FlatList, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { Divisor } from '../components/Divisor'
import { Titulo } from '../components/Titulo'

export const TelaDeListagemDeDepartamentos = ({ route }) => {
  const navigation = useNavigation()

  const informacoesPai = {
    descricao: route.params.item.descricao,
    endereco: route.params.item.endereco,
    telefones: route.params.item.telefones,
    horario: route.params.item.horario,
  }

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >

      <BotaoDeVoltar />

      <Titulo
        titulo={route.params.item.nome}
      />

      <Divisor />

      <FlatList
        data={route.params.item.departamentos}
        style={{
          marginTop: 20
        }}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('Servico', {
                item: {
                  ...informacoesPai, ...item,
                }
              })}
            >
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
                  {item.nome}
                </Text>
              </View>
            </Pressable>
          )
        }}
      />
    </ScrollView>
  )
}