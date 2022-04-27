import React from 'react'
import { Text } from 'react-native'

export const Titulo = ({ titulo }) => {
  return (
    <Text
      style={{
        fontSize: 26,
        marginTop: 25,
        fontFamily: 'MediumFont',
        color: '#fff',
      }}
    >
      {titulo}
    </Text>
  )
}