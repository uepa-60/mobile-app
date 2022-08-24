import React from 'react'
import { Title } from '../components/Title'
import { Divider } from '../components/Divider'
import { BackButton } from '../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../routes/MainRoute'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, FlatList, Text, Pressable } from 'react-native'
import { COLORS } from '../styles/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'DepartmentsScreen'>

export const DepartmentsScreen = ({ route }: Props) => {
  const navigation = useNavigation<Props['navigation']>()

  return (
    <View
      style={{
        flex: 1,
        padding: 15
      }}
    >
      <BackButton />

      <Title title={route?.params?.name || 'zap'} />

      <Divider />

      <FlatList
        data={route?.params?.departments}
        style={{
          marginTop: 20
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index + ''}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('ServiceDetailsScreen', {
                  ...route.params,
                  ...item
                })
              }
            >
              <View
                style={{
                  padding: 10,
                  paddingVertical: 44,
                  width: '100%',
                  marginBottom: 12,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 6
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 25,
                    fontFamily: 'RegularFont',
                    color: COLORS.primary
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  )
}
