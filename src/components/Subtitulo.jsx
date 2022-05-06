import React from 'react'
import { Text } from 'react-native'

export const Subtitulo = ({ subtitulo, conteudo, tipo = 'padrao' }) => {
  const estilizacaoExtra = (tipo === 'link') ? {
    textDecorationLine: 'underline',
    color: '#00AEEF',
  } : undefined

  return (
    <>
      <Text
        style={{
          fontSize: 32,
          fontFamily: 'MediumFont',
          color: '#34A853',
        }}
      >
        {subtitulo}
      </Text>

      {conteudo &&
        <Text
          style={[
            {
              fontFamily: 'RegularFont',
              fontSize: 16,
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