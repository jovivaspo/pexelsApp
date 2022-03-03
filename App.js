import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import img from "./assets/Pexels-Logo.jpg"
import { useState } from 'react';



const Stack = createNativeStackNavigator()

export default function App() {
  const [search, setSearch] = useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' options={{
          headerLeft: ()=> <Image source={img}
          style={{height:36,width:36, marginEnd:8, borderRadius:5}}
          />,
          title: "Pexels App",
          headerRight: ()=>{
            return <Text style={{color:"white"}} onPress={()=>setSearch(!search)}>
              {search? 'Close' : 'Search'}
            </Text>
          },
          headerTitleStyle:{
            color:"#fff",
            fontWeight:'bold'
          },
          headerStyle:{
            backgroundColor:'#0D0D0D'
          }
        }}>
          {(props)=><HomeScreen {...props} search={search} />}
        </Stack.Screen>
        <Stack.Screen name='ImageScreen' component={ImageScreen} options={{
          title:"Pexels App",
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:"bold"
          },
          headerStyle:{
            backgroundColor:"#0D0D0D"
          }
          }
        } />
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  )
}

