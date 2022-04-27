import React from 'react'
import { Text } from 'react-native'

export const Subtitulo = ({ subtitulo }) => {
  return (
    <Text
      style={{
        fontSize: 32,
        fontFamily: 'MediumFont',
        color: '#34A853',
      }}
    >
      {subtitulo}
    </Text>
  )
}