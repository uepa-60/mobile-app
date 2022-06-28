import React from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BackButton } from '../components/BackButton'
import { Divider } from '../components/Divider'
import { Title } from '../components/Title'
import { mappedLocalData } from '../utils/localDataMapping'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../routes/MainRoute'

type B = keyof RootStackParamList

type A = NativeStackNavigationProp<RootStackParamList, B>

export const ListingScreen = ({ route }) => {
  const navigation = useNavigation<A>()
  const { tipo, cidade } = route.params

  const { localidades } = mappedLocalData[cidade][tipo]

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
        title={'Serviços ' + (route.params.tipo === 'saude' ? 'de saúde' : 'sociais')}
      />

      <Divider />

      <View
        style={{
          marginTop: 20,
          marginBottom: 30
        }}
      >

        {
          localidades.map((localidade, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  route.params.tipo === 'saude'
                    ? navigation.navigate('ServiceDetailsScreen', { item: localidade })
                    : navigation.navigate('ListingScreen', { item: localidade })
                }}
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
                      fontSize: 30,
                      fontFamily: 'RegularFont',
                      color: '#34A853'
                    }}
                  >{localidade.nome}</Text>
                </View>
              </Pressable>
            )
          })
        }

      </View>

    </ScrollView>
  )
}