import React from 'react'
import { Title } from '../components/Title'
import { View, ScrollView } from 'react-native'
import { Divider } from '../components/Divider'
import { Subtitle } from '../components/Subtitle'
// import MapView, { Marker } from 'react-native-maps';
import { BackButton } from '../components/BackButton'
import { RootStackParamList } from '../routes/MainRoute';
import { ServicesList } from '../components/ServicesList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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

      <Title
        title={params.nome}
      />

      <Divider />

      <View
        style={{
          marginTop: 20,
          marginBottom: 30,
          flex: 1,
          borderRadius: 4,
          backgroundColor: '#ecfff1',
          padding: 15,
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

        <Subtitle
          subtitle={'Endereço'}
          content={params.endereco}
        />

        <Subtitle
          subtitle={'Descrição'}
          content={params.descricao}
        />

        {
          params.servicos &&
          <>
            <Subtitle
              subtitle={'Serviços disponíveis'} />
            <ServicesList servicos={params.servicos} />
          </>
        }

        {
          params.telefones &&
          <Subtitle
            subtitle={'Telefone'}
            style={{
              marginTop: 10
            }}
            content={
              params.telefones.reduce(
                (telefonesAnteriores, telefone, i) => {
                  return telefonesAnteriores + telefone + (i === params.telefones.length - 1 ? '' : ', ')
                }, '')
            }
          />
        }
        <Subtitle
          subtitle={'Horário'}
          content={params.horario}
        />
        {
          params.site &&
          <Subtitle
            subtitle={'Site'}
            type='link'
            content={params.site}
          />
        }
      </View>
    </ScrollView>
  )
}