import React from 'react'
import { Title } from '../components/Title'
import { Divider } from '../components/Divider'
import { BackButton } from '../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../routes/MainRoute'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, View, FlatList, Text, Pressable } from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'DepartmentsScreen'>

export const DepartmentsScreen = ({ route }) => {
  const navigation = useNavigation<Props['navigation']>()

  const informacoesPai = {
    descricao: route.params.descricao,
    endereco: route.params.endereco,
    telefones: route.params.telefones,
    coordenadas: route.params.coordenadas,
    horario: route.params.horario,
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 15
      }}
      showsVerticalScrollIndicator={false}
    >

      <BackButton />

      <Title
        title={route.params.nome}
      />

      <Divider />

      <FlatList
        data={route.params.departamentos}
        style={{
          marginTop: 20
        }}
        keyExtractor={(_, index) => index + ''}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('ServiceDetailsScreen', { ...informacoesPai, ...item })}
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
    </ScrollView >
  )
}