import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const {navigation} = useNavigation()
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Todo Details')} style={{padding: 20, justifyContent: 'center', alignItems: 'center', alignItems: 'center'}}>    
        <Text>Go to Details Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home