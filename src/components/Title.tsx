import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

type Props = {
  title: string,
  style?: Partial<StyleProp<TextStyle>>
}

export const Title = ({ title, ...props }: Props) => {
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
      {title}
    </Text>
  )
}