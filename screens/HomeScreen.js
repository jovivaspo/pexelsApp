import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getImages } from '../api/pexels'
import ImageList from '../components/ImageList'
import {Input,Button} from 'react-native-elements'

const HomeScreen = ({ search }) => {

  const [photos, setPhotos] = useState([])
  const [searchTerm, setSearchTerm] = useState()

  const loadImages = async () => {
    const res = await getImages(searchTerm)
    console.log(res.photos)
    setPhotos(res.photos)
  }

  const handlerSearch = ()=>{
     loadImages(searchTerm)
  }


  useEffect(() => {
    loadImages()
  }, [])
  return (
    <>
    {search && (
      <View style={styles.constainerSearch}>
        <Input
        leftIcon={{type:'feather', name:'search', color:'#fff'}}
        placeholder='Search image' style={styles.input}
        leftIconContainerStyle={styles.searchLeftIcon}
        onChangeText={(value)=> setSearchTerm(value)}
        />
        <Button title="search" buttonStyle={styles.button} 
        onPress={()=>handlerSearch()}
        />
      
      </View>
    )}
      <View style={styles.constainer}>
        <Text style={styles.totalResultText}>1000 results</Text>
        <ImageList photos={photos} />
      </View>
    </>

  )
}


const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalResultText: {
    color: 'grey',
    textAlign: 'right',
    width: "100%",
    paddingTop: 35
  },
  constainerSearch:{
    flex:1/5,
    flexDirection:'row',
    backgroundColor:'#0D0D0D',
    width:'100%',
    paddingLeft:10,
    paddingRight:80,
    alignItems:'center'
  },
  input:{
    backgroundColor:'#2C292c',
    borderBottomWidth:0,
    paddingHorizontal:4,
    color:'white',
    paddingTop:4

  },
  searchLeftIcon:{
    paddingStart:10,
    marginRight:7
  },
    button:{
    backgroundColor:'#229783',
  }
})

export default HomeScreen