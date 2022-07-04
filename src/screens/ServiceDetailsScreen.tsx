import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import {
  Entypo,
  Zocial,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { Title } from '../components/Title'
import { View, ScrollView } from 'react-native'
import { Divider } from '../components/Divider'
import { Subtitle } from '../components/Subtitle'
import { BackButton } from '../components/BackButton'
import { RootStackParamList } from '../routes/MainRoute';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'ServiceDetailsScreen'>

export const ServiceDetailsScreen = ({ route: { params } }: Props) => {

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
        title={params.nome}
      />

      <Divider />

      <View
        style={{
          marginTop: 20,
          marginBottom: 50,
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
          icon={
            <Entypo
              name={'location'}
              size={25}
              color={'#34A853'} style={{
                marginRight: 10,
              }}
            />
          }
          content={params.endereco}
        />

        <Subtitle
          subtitle={'Descrição'}
          icon={
            <MaterialIcons
              name={'description'}
              size={25}
              color={'#34A853'} style={{
                marginRight: 10,
              }}
            />
          }
          content={params.descricao}
        />

        {
          params.servicos &&
          <Subtitle
            subtitle={'Serviços disponíveis'}
            icon={
              <FontAwesome5
                name={'wrench'}
                size={25}
                color={'#34A853'} style={{
                  marginRight: 10,
                }}
              />
            }
            content={
              params.servicos.reduce(
                (servicosAnteriores, servico) => {
                  return servicosAnteriores + servico + '\n'
                }, '')
            }
          />
        }

        {
          params.telefones &&
          <Subtitle
            subtitle={'Telefone'}
            icon={
              <Zocial
                name={'call'}
                size={25}
                color={'#34A853'} style={{
                  marginRight: 10,
                }}
              />
            }
            content={
              params.telefones.reduce(
                (telefonesAnteriores, telefone) => {
                  return telefonesAnteriores + telefone + ', '
                }, '')
            }
          />
        }
        <Subtitle
          subtitle={'Horário'}
          icon={
            <Ionicons
              name={'ios-time-outline'}
              size={25}
              color={'#34A853'} style={{
                marginRight: 10,
              }}
            />
          }
          content={params.horario}
        />
        {
          params.site &&
          <Subtitle
            subtitle={'Site'}
            type='link'
            icon={
              <MaterialCommunityIcons
                name={'web'}
                size={25}
                color={'#34A853'} style={{
                  marginRight: 10,
                }}
              />
            }
            content={params.site}
          />
        }
        {
          params.endereco &&
          <>
            <Subtitle
              subtitle={'Endereco'}
              icon={
                <Entypo
                  name={'map'}
                  size={25}
                  color={'#34A853'} style={{
                    marginRight: 10,
                  }}
                />
              }
              type='link'
            />
            <MapView
              region={{
                latitude: params.coordenadas.latitude ?? 0,
                longitude: params.coordenadas.longitude ?? 0,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.001,

              }}
              style={{
                width: '100%',
                height: 200
              }}
            >
              <Marker
                coordinate={{
                  latitude: params.coordenadas.latitude ?? 0,
                  longitude: params.coordenadas.longitude ?? 0,
                }}
                title={params.nome}
                description={params.endereco}
              />
            </MapView>
          </>
        }
      </View>
    </ScrollView>
  )
}