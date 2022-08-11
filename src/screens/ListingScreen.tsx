import React, { useEffect } from 'react'
import { Title } from '../components/Title'
import { Divider } from '../components/Divider'
import { BackButton } from '../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../routes/MainRoute'
import { mappedLocalData } from '../utils/localDataMapping'
import { ScrollView, View, Text, Pressable } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'ListingScreen'>

export const ListingScreen = ({ route }: Props) => {
  const navigation = useNavigation<Props['navigation']>()

  const cityData =
    'city' in route.params ? mappedLocalData[route.params.city] : null
  const data =
    'type' in route.params
      ? route.params.type === 'social'
        ? cityData.social
        : cityData.saude
      : null

  useEffect(() => {
    if (!data) {
      navigation.navigate('DepartmentsScreen', route.params)
    }
  }, [data])

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
        title={
          'Serviços ' +
          ('type' in route.params && route.params.type === 'health'
            ? 'de saúde'
            : 'sociais')
        }
      />

      <Divider />

      <View
        style={{
          marginTop: 20,
          marginBottom: 30
        }}
      >
        {data &&
          data.map((localidade, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  localidade.departamentos
                    ? navigation.navigate('ListingScreen', localidade)
                    : navigation.navigate('ServiceDetailsScreen', {
                        descricao: localidade.descricao,
                        endereco: localidade.endereco,
                        horario: localidade.horario,
                        nome: localidade.nome,
                        servicos: localidade.servicos,
                        site: localidade.site,
                        coordenadas: localidade.coordenadas,
                        telefones: localidade.telefones
                      })
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
                      height: 3
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 30,
                      fontFamily: 'RegularFont',
                      color: '#34A853'
                    }}
                  >
                    {localidade.nome}
                  </Text>
                </View>
              </Pressable>
            )
          })}
      </View>
    </ScrollView>
  )
}
