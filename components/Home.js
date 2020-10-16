import React from 'react';
import {Text, View, Button,TouchableOpacity,Image } from 'react-native';
import userData from './Data'

export default function Home(props) {
  const profiles =
     userData.map((user)=>{
      return(
        <View style={{ margin:10}}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Pages',{user})} >
        <Image
        style={{ width: 50, height: 50, borderRadius: 50, }}
      source={{ uri: user.profilePic }}
    />
    </TouchableOpacity>
    <Text>{user.userName}</Text>
    </View>
      )
    })
  
  return (
    <View style={{flex:1, flexDirection:'row'}}>
      {profiles}
     {/* <Button title="press" onPress={()=> props.navigation.navigate('Pages')} />*/}
    </View>
  );
}
 
