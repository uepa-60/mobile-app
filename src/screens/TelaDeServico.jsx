import React from "react"
import { View, Pressable } from "react-native"
import { BotaoDeVoltar } from "../components/BotaoDeVoltar"
import { Subtitulo } from "../components/Subtitulo"
import { Titulo } from "../components/Titulo"

export const TelaDeServico = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#34A853'
      }}
    >
      <BotaoDeVoltar />

      <Titulo
        titulo={'UPA do Jurunas'}
      />

      <View
        style={{
          backgroundColor: '#fff',
          height: 1,
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
          paddingHorizontal: 20
        }}
      >

        <Subtitulo
          subtitulo={'Endereço'}
        />
        <Subtitulo
          subtitulo={'Telefone'}
        />
        <Subtitulo
          subtitulo={'Site'}
        />
        <Subtitulo
          subtitulo={'Redes Sociais'}
        />

        <View>
          <Pressable>
            <View
              style={{
                backgroundColor: '#ff0000',
                width: 35,
                height: 35,
              }}
            />
          </Pressable>

          <Pressable>
            <View
              style={{
                backgroundColor: '#ff0000',
                width: 35,
                height: 35,
              }}
            />
          </Pressable>
        </View>

        <Subtitulo
          subtitulo={'Localização'}
        />

      </View>

    </View>
  )
}