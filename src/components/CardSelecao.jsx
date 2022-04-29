import React from 'react'
import { Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const CardSelecao = ({ titulo, chave }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        borderRadius: 25,
        flex: 1,
        maxWidth: 150,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}
      onPress={() => {
        navigation.navigate('Listagem', {
          tipo: chave,
          titulo: titulo
        })
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'RegularFont',
          fontSize: 21,
          color: '#34A853'
        }}
      >
        {titulo}
      </Text>
    </Pressable>
  )
}