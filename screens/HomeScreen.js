import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getImages } from '../api/pexels'
import ImageList from '../components/ImageList'

const HomeScreen = () => {

    const[photos,setPhotos] = useState([])

    const loadImages = async () => {
       const res =  await getImages()
        console.log(res.photos)
        setPhotos(res.photos)
    }


    useEffect(()=>{
      loadImages()
    },[])
  return (
    <View style={styles.constainer}>
      <ImageList photos={photos}/>
    </View>
  )
}


const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor:'#0D0D0D',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default HomeScreen