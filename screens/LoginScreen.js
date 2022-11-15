import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LoginScreen extends Component {
  signInWithGoogleAsync = async() => {
    try{
      const result = await this.signInWithGoogleAsync.logInAsync({
        behaviour:"web",
        androidClientId:
        "566527670139-0nelv689vutr3v78aj8ermdpk99i5hp5.apps.googleusercontent.com",
        iosClientId:
        "566527670139-jvttb70rgh4lfd1qic2l6gqemjlo5gnh.apps.googleusercontent.com",
        scopes:["profile","email"],

      })
    }
  }
}