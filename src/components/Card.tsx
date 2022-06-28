import React from 'react'
import { Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../routes/MainRoute'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Props = {
  title: string,
  goTo: keyof RootStackParamList,
  parameters: any,
}

// TODO: refactor these types
type B = keyof RootStackParamList

type A = NativeStackNavigationProp<RootStackParamList, B>

export const Card = ({ title, goTo, parameters }: Props) => {
  const navigation = useNavigation<A>()

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
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}
      onPress={() => {
        navigation.navigate(goTo, parameters)
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'RegularFont',
          fontSize: 30,
          color: '#34A853'
        }}
      >
        {title}
      </Text>
    </Pressable>
  )
}