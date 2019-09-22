
/*@ Splash.js
TestProject App
Created by Ankleshwar Dwivedi
@*/


import React, { useState, useEffect,useRef } from 'react';
import {AsyncStorage, StyleSheet,BackAndroid, TextInput, View,Linking, Alert, Text, Platform, Image, TouchableOpacity, ImageBackground, ActivityIndicator, StatusBar, SafeAreaView,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {deviceHeight,deviceWidth} from '../HelperFile/Helper';
import Colors from '../Constants/Colors';
import CommonStyle from '../Constants/CommonStyle';
import { connect } from 'react-redux';
import FastImage from "react-native-fast-image";


const Splash = (props) => {



const timerToClearSomewhere = useRef(false)





useEffect(
     () => {
       timerToClearSomewhere.current = setInterval(() => nextScreen(), 999)
       return () => {
         clearInterval(timerToClearSomewhere.current)
       }
     },
     []
   )



useEffect(() => {
  setTimeout(() => clearInterval(timerToClearSomewhere.current), 1000)
}, [])




nextScreen = async () =>{

Actions.Feed();




}



  return(
    <View style={CommonStyle.MainContainer}>
    <FastImage
    style={styles.bgImage}
    source={{uri: 'https://placeimg.com/640/640/nature'}}
    />
    </View>
  );
}

const styles = StyleSheet.create({

    bgImage: {
      width:deviceWidth,
      height:deviceHeight
    },


  })





export default Splash;
