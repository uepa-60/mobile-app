import React from 'react'
import { Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../styles/theme'

export const BackButton = (): JSX.Element => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => {
        navigation.goBack()
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          width: 35,
          height: 35,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6
        }}
      >
        <Ionicons name='arrow-back' size={24} color={COLORS.primary2} />
      </View>
    </Pressable>
  )
}
