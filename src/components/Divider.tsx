import React from 'react'
import { View } from 'react-native'

export const Divider = (): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 1,
        marginTop: 10,
        width: '100%',
      }}
    />
  )
}