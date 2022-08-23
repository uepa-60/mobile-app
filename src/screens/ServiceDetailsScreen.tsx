import React from 'react'
import { Title } from '../components/Title'
import { View, ScrollView } from 'react-native'
import { Divider } from '../components/Divider'
import { Subtitle } from '../components/Subtitle'
import { BackButton } from '../components/BackButton'
import { RootStackParamList } from '../routes/MainRoute'
import { ServicesList } from '../components/ServicesList'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { COLORS } from '../styles/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'ServiceDetailsScreen'>

export const ServiceDetailsScreen = ({ route: { params } }: Props) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 15
      }}
      showsVerticalScrollIndicator={false}
    >
      <BackButton />

      <Title title={params.name} />

      <Divider />

      <View
        style={{
          marginTop: 20,
          marginBottom: 30,
          flex: 1,
          borderRadius: 4,
          backgroundColor: COLORS.primary2,
          padding: 15,
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
        <Subtitle subtitle={'Endereço'} content={params.address} />

        <Subtitle subtitle={'Descrição'} content={params.description} />

        {params.services && (
          <>
            <Subtitle subtitle={'Serviços disponíveis'} />
            <ServicesList servicos={params.services} />
          </>
        )}

        {params.telephones && (
          <Subtitle
            subtitle={'Telefone'}
            style={{
              marginTop: 10
            }}
            content={params.telephones.reduce((previous, tel, i) => {
              return (
                previous +
                tel +
                (i === params.telephones.length - 1 ? '' : ', ')
              )
            }, '')}
          />
        )}
        <Subtitle
          subtitle={'Horário'}
          content={params.time}
          style={{
            marginTop: 10
          }}
        />
        {params.site && (
          <Subtitle subtitle={'Site'} type='link' content={params.site} />
        )}
      </View>
    </ScrollView>
  )
}
