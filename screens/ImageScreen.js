import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState} from 'react'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { Button } from 'react-native-elements/dist/buttons/Button'
import * as WebBrowser from 'expo-web-browser';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import ImageList from '../components/ImageList';
import { getImages } from '../api/pexels';

const ImageScreen = ({ route }) => {

  const { image } = route.params

  const [photos, setPhotos] = useState([])


  const loadImages = async () => {
    const res = await getImages()
    console.log(res.photos)
    setPhotos(res.photos)
  }

  useEffect(() => {
    loadImages()
  }, [])

  const handlerPress = async ()=>{
    console.log("Pulsó")
    await WebBrowser.openBrowserAsync(image.photographer_url)
  }

  const saveFile = async (fileUri)=>{
   const {status} =  await MediaLibrary.requestPermissionsAsync()
   if(status === 'granted'){
    const asset =  await MediaLibrary.createAssetAsync(fileUri)
     await MediaLibrary.createAlbumAsync('Download',asset,false)
   }
  }

  const downloadFile = async() => {
    try{
      let fileUri = FileSystem.documentDirectory + image.id + '.jpg'
      console.log(fileUri)
      const {uri} = await FileSystem.downloadAsync(image.src.large2x, fileUri)
      saveFile(uri)
    }catch(err){
      console.log(err)
    }
   
  }

  const handlerDownload = () => {
    downloadFile()
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
        <Button title="Download" buttonStyle={{backgroundColor:'#229783'}} onPress={handlerDownload}/>
      </View>
      <View>
        <ImageList photos={photos}/>
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