import React from 'react'
import { Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export const BotaoDeVoltar = () => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => {
        navigation.goBack()
      }}
    >
      <View
        style={{
          backgroundColor: '#A0F6B5',
          width: 35,
          height: 35,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <Ionicons name='arrow-back' size={24} color='#34A853' />
      </View>
    </Pressable>
  )
}