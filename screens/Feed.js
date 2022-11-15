import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Image, SafeAreaView, StatusBar,Flatlist,TouchableOpacity} from "react-native";
import {RFValue} from "react-native-responsive-fontsize"
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";
import { FlatList } from "react-native-gesture-handler";

let post = require("./temp_posts.json");


export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: true
    };
  }

  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();
  
  render() {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("StoryScreen", {
              post: this.props.post
            })
          }
        >      <SafeAreaView style = {styles.droidSafeArea}/>
      <View style = {styles.appTitle}>
      <View style = {styles.appIcon}>
      <Image source = {require("../assets/logo.png")} style = {styles.iconImage}>
      </Image>
      </View>
      <View style = {styles.appTitleTextContainer}>
      <Text style = {styles.appTitleText}>Spectagram</Text>
      </View>
      </View>
      <View style = {styles.cardContainer}>
      <FlatList keyExtractor = {this.keyExtractor} data = {post} renderItem = {this.renderItem}></FlatList>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:5,
    backgroundColor: "white"
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle:{
    flex:0.07,
    flexDirection:"row"
  },
  appIcon:{
    flex:0.35,
    justifyContent:"center",
    alignItems:"center"
  },
  iconImage:{
    width:"25%",
    height:"50%",
    resizeMode:"contain"
  },
  appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
    color:"black",
    fontSize: RFValue(25)
  },
  cardContainer:{
    flex:0.90
  }
})