import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import img from "./assets/Pexels-Logo.jpg"



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          headerLeft: ()=> <Image source={img}
          style={{height:36,width:36, marginEnd:8, borderRadius:5}}
          />,
          title: "Pexels App",
          headerRight: ()=>{
            return <Text style={{color:"white"}} onPress={console.log("searchig")}>Search</Text>
          },
          headerTitleStyle:{
            color:"#fff",
            fontWeight:'bold'
          },
          headerStyle:{
            backgroundColor:'#0D0D0D'
          }
        }} />
        <Stack.Screen name='ImageScreen' component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  )
}

