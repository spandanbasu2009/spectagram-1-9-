import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

export default class PostScreen extends Component{
constructor(props) {
    super(props);
    this.state = {
      posts: true
    };
  }  
  render(){
    return(
      <View>
      <Text>POST SCREEN</Text>
      </View>
    )
  }
}