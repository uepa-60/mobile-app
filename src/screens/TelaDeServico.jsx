import React from "react"
import { View, Image, ScrollView } from "react-native"
import { BotaoDeVoltar } from "../components/BotaoDeVoltar"
import { Subtitulo } from "../components/Subtitulo"
import { Titulo } from "../components/Titulo"

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

      <View
        style={{
          backgroundColor: '#fff',
          height: 1,
          marginTop: 10,
          width: '100%',
        }}
      />

      <View
        style={{
          marginTop: 20,
          flex: 1,
          borderRadius: 4,
          backgroundColor: '#A0F6B5',
          paddingVertical: 27,
          paddingHorizontal: 20,
          shadowColor: "#000",
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
            // borderColor: 'red',
            // borderWidth: 1,
          }}
        />
      </View>

    </ScrollView>
  )
}