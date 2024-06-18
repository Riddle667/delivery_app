import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../../Presentation/navigator/MainAppStack'


interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const Register = ({navigation, route}: Props) => {
  return (
    <View>
        <Text>Esto es Registro</Text>    
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text>Ya tengo cuenta</Text>
        </TouchableOpacity>
    </View>
  )
}
