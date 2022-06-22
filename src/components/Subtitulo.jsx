import React from 'react'
import { Text, Linking, View } from 'react-native'

export const Subtitulo = ({ subtitulo, conteudo, tipo = 'padrao', icone }) => {
  const estilizacaoExtra = (tipo === 'link') ? {
    textDecorationLine: 'underline',
    color: '#00AEEF',
  } : undefined

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          
        }}
      >
        {
          icone
        }
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'MediumFont',
            color: '#34A853',
          }}
        >
          {subtitulo}
        </Text>

      </View>

      {conteudo &&
        <Text
          onPress={() => {
            if (tipo === 'link') {
              Linking.openURL(conteudo)
            }
          }}
          style={[
            {
              fontFamily: 'RegularFont',
              fontSize: 20,
              marginTop: 8,
              textAlign: 'justify',
              marginBottom: 13,
            },
            estilizacaoExtra
          ]}
        >
          {conteudo}
        </Text>

      }
    </>
  )
}