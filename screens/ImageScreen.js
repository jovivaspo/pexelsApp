import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { Button } from 'react-native-elements/dist/buttons/Button'

const ImageScreen = ({ route }) => {

  const { image } = route.params

  const handlerPress =()=>{

  }

  return (
    <View style={styles.headerPothographer}>
      <Image source={{ uri: image.src.medium, height: 360 }} />
      <View style={{
        display:'flex',
        paddingVertical:10,
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%'

      }}/>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:"space-between" }}>
        <Avatar title={image.photographer.split(" ").map(string => string[0]).join('').toUpperCase()} containerStyle={{ backgroundColor: 'red', marginRight:10 }} rounded />
        <TouchableOpacity onPress={handlerPress}>
          <Text style={styles.text}>{image.photographer}</Text>
        </TouchableOpacity>
        <Button title="Dowload" buttonStyle={{backgroundColor:'#229783'}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerPothographer:{
    backgroundColor:"#0D0D0D",
    flex:1,
    flexDirection:'column',
    padding:10
  },
  text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  }
})

export default ImageScreen