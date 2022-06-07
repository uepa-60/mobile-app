import React from 'react'
import { Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const CardSelecao = ({ titulo, irPara, parametros }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        borderRadius: 25,
        // flex: 1,
        // maxHeight: '60%',
        width: '100%',
        maxWidth: 250,
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
        navigation.navigate(irPara, parametros)
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'RegularFont',
          fontSize: 30,
          color: '#34A853'
        }}
      >
        {titulo}
      </Text>
    </Pressable>
  )
}