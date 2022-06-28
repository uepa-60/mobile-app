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

export const ServiceDetailsScreen = ({ route }) => {
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

      <View
        style={{
          marginTop: 20,
          marginBottom: 50,
          flex: 1,
          borderRadius: 4,
          backgroundColor: '#ecfff1',
          // paddingVertical: 27,
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
          content={route.params.item.endereco}
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
          content={route.params.item.descricao}
        />

        {
          route.params.item.servicos &&
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
              route.params.item.servicos.reduce(
                (servicosAnteriores, servico) => {
                  return servicosAnteriores + servico + '\n'
                }, '')
            }
          />
        }

        {
          route.params.item.telefones &&
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
              route.params.item.telefones.reduce(
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
          content={route.params.item.horario}
        />
        {
          route.params.item.site &&
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
            content={route.params.item.site}
          />
        }
        {
          route.params.item.endereco &&
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
                latitude: route.params.item.coordenadas.latitude ?? 0,
                longitude: route.params.item.coordenadas.longitude ?? 0,
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
                  latitude: route.params.item.coordenadas.latitude || 1,
                  longitude: route.params.item.coordenadas.longitude || 0,
                }}
                title={route.params.item.nome}
                description={route.params.item.endereco}
              />
            </MapView>
          </>
        }
      </View>
    </ScrollView>
  )
}