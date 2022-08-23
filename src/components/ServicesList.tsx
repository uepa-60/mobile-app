import React, { Fragment, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { COLORS } from '../styles/theme'

type Props = {
  servicos: string[]
}

export const ServicesList = ({ servicos }: Props) => {
  const [show, setShow] = useState(false)

  return (
    <View>
      {servicos.slice(0, show ? servicos.length : 3).map((servico, index) => {
        return (
          <Fragment key={index}>
            {index === 3 && show && (
              <Pressable
                onPress={() => setShow(!show)}
                style={{
                  borderRadius: 4,
                  backgroundColor: COLORS.white,
                  padding: 15,
                  marginTop: 5
                }}
              >
                <Text style={{ textAlign: 'right', color: COLORS.primary }}>
                  Minimizar serviços
                </Text>
              </Pressable>
            )}

            <Text
              style={{
                borderRadius: 4,
                backgroundColor: COLORS.primary,
                padding: 15,
                marginTop: 5,
                fontSize: 15,
                fontWeight: 'bold',
                color: COLORS.white
              }}
            >
              {servico}
            </Text>
          </Fragment>
        )
      })}
      {servicos.length - 1 > 3 && show === false && (
        <Pressable
          onPress={() => setShow(!show)}
          style={{
            borderRadius: 4,
            backgroundColor: COLORS.white,
            padding: 15,
            marginTop: 5
          }}
        >
          <Text style={{ textAlign: 'right', color: COLORS.primary }}>
            Mostrar todos os serviços
          </Text>
        </Pressable>
      )}
    </View>
  )
}
