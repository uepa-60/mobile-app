import React from 'react'
import { Titulo } from '../components/Titulo'
import { Subtitulo } from '../components/Subtitulo'
import { View, ScrollView } from 'react-native'
import { BotaoDeVoltar } from '../components/BotaoDeVoltar'
import { Divisor } from '../components/Divisor'

export const TelaDeServico = ({ route }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
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
          subtitulo={'Endereço'}
          conteudo={route.params.item.endereco}
        />

        <Subtitulo
          subtitulo={'Descrição'}
          conteudo={route.params.item.descricao}
        />

        {
          route.params.item.servicos &&
          <Subtitulo
            subtitulo={'Serviços disponíveis'}
            conteudo={route.params.item.servicos.reduce((acc, servico) => {
              return acc + servico + '\n'
            }, '')}
          />
        }

        {
          route.params.item.telefones &&
          <Subtitulo
            subtitulo={'Telefone'}
            conteudo={route.params.item.telefones.reduce((acc, telefone) => {
              return acc + telefone + ', '
            }, '')}
          />
        }
        <Subtitulo
          subtitulo={'Horário'}
          conteudo={route.params.item.horario}
        />
        {
          route.params.item.site &&
          <Subtitulo
            subtitulo={'Site'}
            tipo='link'
            conteudo={route.params.item.site}
          />
        }
      </View>

    </ScrollView>
  )
}