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
import { Titulo } from '../components/Titulo'
import { View, ScrollView, Text } from 'react-native'
import { Divisor } from '../components/Divisor'
import { Subtitulo } from '../components/Subtitulo'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { ListagemServicos } from '../components/ListagemServicos';

export const TelaDeServico = ({ route }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 15
      }}
      showsVerticalScrollIndicator={false}
    >
      <BotaoDeVoltar />

      <Titulo
        titulo={route.params.item.nome}
      />

      <Divisor />

      <View
        style={{
          marginTop: 20,
          marginBottom: 30,
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

        <Subtitulo
          subtitulo={'Endereço'}
          icone={
            <Entypo
              name={'location'}
              size={17}
              color={'#34A853'} style={{
                marginRight: 10,
              }}
            />
          }
          conteudo={route.params.item.endereco}
        />

        <Subtitulo
          subtitulo={'Descrição'}
          icone={
            <MaterialIcons
              name={'description'}
              size={17}
              color={'#34A853'} style={{
                marginRight: 10,
              }}
            />
          }
          conteudo={route.params.item.descricao}
        />

        {
          route.params.item.servicos &&
          <Subtitulo
            subtitulo={'Serviços disponíveis'}
            icone={
              <FontAwesome5
                name={'wrench'}
                size={17}
                color={'#34A853'} style={{
                  marginRight: 10,
                }}
              />
            }
          // conteudo={
          //   route.params.item.servicos.reduce(
          //     (servicosAnteriores, servico) => {
          //       return servicosAnteriores + servico + '\n'
          //     }, '')
          // }
          />
        }

        {
          route.params.item.servicos && <ListagemServicos 
            servicos={route.params.item.servicos}
          />

        }

        {
          route.params.item.telefones &&
          <Subtitulo
            subtitulo={'Telefone'}
            icone={
              <Zocial
                name={'call'}
                size={17}
                color={'#34A853'} style={{
                  marginRight: 10,
                }}
              />
            }
            conteudo={
              route.params.item.telefones.reduce(
                (telefonesAnteriores, telefone, index) => {
                  return telefonesAnteriores + telefone + (route.params.item.telefones.length - 1 === index ? '' : ', ')
                }, '')
            }
          />
        }
        <Subtitulo
          subtitulo={'Horário'}
          icone={
            <Ionicons
              name={'ios-time-outline'}
              size={17}
              color={'#34A853'} style={{
                marginRight: 10,
              }}
            />
          }
          conteudo={route.params.item.horario}
        />
        {
          route.params.item.site &&
          <Subtitulo
            subtitulo={'Site'}
            tipo='link'
            icone={
              <MaterialCommunityIcons
                name={'web'}
                size={17}
                color={'#34A853'} style={{
                  marginRight: 10,
                }}
              />
            }
            conteudo={route.params.item.site}
          />
        }
        {
          route.params.item.endereco &&
          <>
            <Subtitulo
              subtitulo={'Endereco'}
              icone={
                <Entypo
                  name={'map'}
                  size={17}
                  color={'#34A853'} style={{
                    marginRight: 10,
                  }}
                />
              }
              tipo='link'
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