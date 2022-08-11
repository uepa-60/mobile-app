import React, { Fragment, useState } from 'react'
import { View, Text, Pressable } from 'react-native'

export const ServicesList = ({ servicos }) => {
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
                  backgroundColor: '#58d379',
                  padding: 15,
                  marginTop: 5,
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                <Text style={{ textAlign: 'right', color: 'white' }}>
                  Minimizar serviços
                </Text>
              </Pressable>
            )}

            <Text
              style={{
                borderRadius: 4,
                backgroundColor: '#34A853',
                padding: 15,
                marginTop: 5,
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white'
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
            backgroundColor: '#58d379',
            padding: 15,
            marginTop: 5,
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          <Text style={{ textAlign: 'right', color: 'white' }}>
            Mostrar todos os serviços
          </Text>
        </Pressable>
      )}
    </View>
  )
}
