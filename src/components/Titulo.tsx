import React from 'react'
import { Text } from 'react-native'

export const Titulo = ({ titulo, ...props }) => {
  const { style, ...rest } = props

  return (
    <Text
      style={{
        fontSize: 30,
        marginTop: 25,
        fontFamily: 'MediumFont',
        color: '#fff',
        ...style
      }}
      {...rest}
    >
      {titulo}
    </Text>
  )
}