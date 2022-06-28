import React from 'react'
import { ScrollView, View, FlatList, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BackButton } from '../components/BackButton'
import { Divider } from '../components/Divider'
import { Title } from '../components/Title'
import { RootStackParamList } from '../routes/MainRoute'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type B = keyof RootStackParamList

type A = NativeStackNavigationProp<RootStackParamList, B>

export const DepartmentsScreen = ({ route }) => {
  const navigation = useNavigation<A>()

  const informacoesPai = {
    descricao: route.params.item.descricao,
    endereco: route.params.item.endereco,
    telefones: route.params.item.telefones,
    horario: route.params.item.horario,
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 25
      }}
      showsVerticalScrollIndicator={false}
    >

      <BackButton />

      <Title
        title={route.params.item.nome}
      />

      <Divider />

      <FlatList
        data={route.params.item.departamentos}
        style={{
          marginTop: 20
        }}
        keyExtractor={(_, index) => index + ''}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('ServiceDetailsScreen', {
                item: {
                  ...informacoesPai, ...item,
                }
              })}
            >
              <View
                style={{
                  paddingVertical: 44,
                  width: '100%',
                  marginBottom: 12,
                  borderRadius: 25,
                  backgroundColor: 'white',
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
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 25,
                    fontFamily: 'RegularFont',
                    color: '#34A853'
                  }}
                >
                  {item.nome}
                </Text>
              </View>
            </Pressable>
          )
        }}
      />
    </ScrollView>
  )
}