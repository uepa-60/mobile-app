import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const BotaoDeVoltar = () => {
  return (
    <Pressable
      onPress={() => {
        alert('Você clicou no botão')
      }}
    >
      <View
        style={{
          backgroundColor: '#A0F6B5',
          width: 35,
          height: 35,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#34A853" />
      </View>
    </Pressable>
  )
}