import React from 'react'
import { Text, Linking, View, ViewStyle } from 'react-native'

type Props = {
  type?: 'standard' | 'link'
  content?: string
  style?: ViewStyle
  subtitle: string
}

export const Subtitle = ({
  subtitle,
  content,
  type = 'standard',
  style
}: Props) => {
  return (
    <View style={[style]}>
      <Text
        style={{
          fontSize: 32,
          fontFamily: 'MediumFont',
          color: '#34A853'
        }}
      >
        {subtitle}
      </Text>

      {content && (
        <Text
          onPress={() => {
            if (type === 'link') {
              Linking.openURL(content)
            }
          }}
          style={[
            {
              fontFamily: 'RegularFont',
              fontSize: 20,
              marginTop: 8,
              textAlign: 'justify',
              marginBottom: 13
            },
            type === 'link'
              ? {
                  textDecorationLine: 'underline',
                  color: '#00AEEF'
                }
              : null
          ]}
        >
          {content}
        </Text>
      )}
    </View>
  )
}
