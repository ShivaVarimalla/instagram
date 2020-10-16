import React from 'react';
import { Text, View,Image,Dimensions } from 'react-native';



export default class Pages extends React.Component {
  dimensions = Dimensions.get("window");
  user = this.props.route.params.user
  state={
    url: this.user.stories[0].image
  }
  componentDidMount(){
    let storieNumber = 0
    const changeImages = setInterval(()=>{
      if(storieNumber==this.user.stories.length){
        storieNumber=0
        clearInterval(changeImages)
      }
      this.setState({
        url : this.user.stories[storieNumber].image
      })
      storieNumber+=1
    },this.user.stories[storieNumber].time*1000)
  }
    render(){
  return (
    <View>
      <Image style={{height: this.dimensions.height, width: this.dimensions.width, resizeMode: "contain" }} 
      source={{uri : this.state.url}}/>
    </View>
  );
}

}

