import React from 'react'
import { ScrollView, View, FlatList, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { Divisor } from '../components/Divisor'
import { Titulo } from '../components/Titulo'
import levantamento from '../../levantamento-servicos.json'

export const TelaDeListagem = ({ route }) => {
  const navigation = useNavigation()

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >

      <BotaoDeVoltar />

      <Titulo
        titulo={'Serviços ' + (route.params.tipo === 'saude' ? 'de saúde' : 'sociais')}
      />

      <Divisor />

      <FlatList
        data={
          levantamento[route.params.cidade][route.params.tipo]
        }
        style={{
          marginTop: 20
        }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                route.params.tipo === 'saude'
                  ? navigation.navigate('Servico', { item })
                  : navigation.navigate('ListagemDepartamentos', { item })
              }}
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