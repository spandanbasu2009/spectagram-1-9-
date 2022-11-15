import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Ionicons} from "@expo/vector-icons";


export default class PostCard extends Component{
  render(){
    return(
      
      <View style = {styles.container}>
      <View style = {styles.cardContainer}>
      <View style = {styles.authorContainer}>
      <View style = {styles.authorImageContainer}>
      <Image source = {require("../assets/profile_img.png")} style = {styles.profileImage}/>
      </View>
      <View style = {styles.authorNameContainer}>
      <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
      </View>
      </View>
      <Image source = {require("../assets/post.jpeg")}/>
      <View style = {styles.captionContainer}>
      <Text style = {styles.captionText}>{this.props.post.caption}</Text>
      </View>
      <View style= {styles.actionContainer}>
      <View styles = {styles.likeButton}>
      <Ionicons name = {"heart"} size= {RFValue(30)} color = "white"/>
      <Text style = {styles.likeText}>12k</Text>
      </View>
      </View>
      </View>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70)
  }
})