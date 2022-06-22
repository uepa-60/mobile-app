import React from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { Divisor } from '../components/Divisor'
import { Titulo } from '../components/Titulo'
import { mappedLocalData } from '../utils/localDataMapping'

export const TelaDeListagem = ({ route }) => {
  const navigation = useNavigation()
  const { tipo, cidade } = route.params

  const { localidades } = mappedLocalData[cidade][tipo]

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 15
      }}
      showsVerticalScrollIndicator={false}
    >

      <BotaoDeVoltar />

      <Titulo
        titulo={'Serviços ' + (route.params.tipo === 'saude' ? 'de saúde' : 'sociais')}
      />

      <Divisor />

      <View
        style={{
          marginTop: 20,
          marginBottom: 30
        }}  
      >

        {
          localidades.map((localidade, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  route.params.tipo === 'saude'
                    ? navigation.navigate('Servico', { item: localidade })
                    : navigation.navigate('ListagemDepartamentos', { item: localidade })
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
                      fontSize: 30,
                      fontFamily: 'RegularFont',
                      color: '#34A853'
                    }}
                  >{localidade.nome}</Text>
                </View>
              </Pressable>
            )
          })
        }

      </View>

    </ScrollView>
  )
}