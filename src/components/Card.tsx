import React from 'react'
import { Text, Pressable } from 'react-native'
import { COLORS } from '../styles/theme'

type Props = {
  title: string
  onPress: () => void
}

export const Card = ({ title, onPress }: Props) => {
  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        borderRadius: 25,
        width: '100%',
        maxWidth: 250,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6
      }}
      onPress={onPress}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'RegularFont',
          fontSize: 30,
          color: COLORS.primary
        }}
      >
        {title}
      </Text>
    </Pressable>
  )
}
