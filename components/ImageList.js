import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CardImage from './CardImage'

const ImageList = ({photos}) => {
    const renderItem =(({item})=> <CardImage image={item}/> )
  return (
    <View style={{width:'100%', height:'100%', padding:4}}>
      <FlatList data={photos}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
      numColumns={2}
      />
    </View>
  )
}

export default ImageList