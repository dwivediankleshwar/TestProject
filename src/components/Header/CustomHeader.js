import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground,Image, ActivityIndicator, I18nManager,StatusBar,View ,SafeAreaView,Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from '../Constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIconsI from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {deviceHeight,deviceWidth} from '../HelperFile/Helper';

const  CustomHeader = (props) => {


    return (

      <View style={styles.containerView}>
      <View style={{width:'15%',justifyContent:'center',alignItems:'center'}}>
      <MaterialIconsI name="menu" size={30} color={Colors.white}  />
      </View>
      <View style={{justifyContent:'center',width:'60%',alignItems:'center'}} >
      <Text style={styles.textStyle}>{props.headerText}</Text>

      </View>

      <View style={styles.lastImag}>
      <MaterialIconsI name="search" size={30} color={Colors.white}  />
      </View>

      <View style={styles.lastImag}>
      <MaterialCommunityIcons name="dots-vertical" size={30} color={Colors.white}  />
      </View>

      </View>


    );




};
const styles = {

  containerView: {
    flexDirection: 'row',
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative',
    backgroundColor:Colors.theam,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },

lastImag:{
  width:'10%',justifyContent:'flex-end',flexDirection:'row'
},

  textStyle: {
    fontSize: 18,
    alignItems: 'center',
    //justifyContent: 'center',
    fontFamily: "PT Sans",
    color:Colors.white,
    marginTop:5,

  }
};

export default CustomHeader;
