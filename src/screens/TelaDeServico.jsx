import React from 'react'
import { Titulo } from '../components/Titulo'
import { Subtitulo } from '../components/Subtitulo'
import { View, Image, ScrollView } from 'react-native'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { Divisor } from '../components/Divisor'

export const TelaDeServico = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <BotaoDeVoltar />

      <Titulo
        titulo={'UPA do Jurunas'}
      />

      <Divisor />

      <View
        style={{
          marginTop: 20,
          flex: 1,
          borderRadius: 4,
          backgroundColor: '#A0F6B5',
          paddingVertical: 27,
          paddingHorizontal: 20,
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
          subtitulo={'Descrição'}
          conteudo={'A Unidade de Pronto Atendimento (UPA 24h) faz parte da Rede de Atenção às Urgências. O objetivo é concentrar os atendimentos de saúde de complexidade intermediária, compondo uma rede organizada em conjunto com a atenção básica, atenção hospitalar, atenção domiciliar e o Serviço de Atendimento Móvel de Urgência - SAMU 192.'}
        />
        <Subtitulo
          subtitulo={'Endereço'}
          conteudo={'Passagem Esperança, 63 - Jurunas, Belém - PA, 66030-135'}
        />
        <Subtitulo
          subtitulo={'Telefone'}
          conteudo={'(91) 4006-9002'}
        />
        <Subtitulo
          subtitulo={'Site'}
          conteudo={'http://www.belem.pa.gov.br/'}
        />

        <Subtitulo
          subtitulo={'Localização'}
        />

        <Image
          source={require('../../assets/upa_jurunas.png')}
          style={{
            height: 174,
            borderRadius: 4,
            marginTop: 8,
            width: '100%',
            resizeMode: 'cover',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
        />
      </View>

    </ScrollView>
  )
}