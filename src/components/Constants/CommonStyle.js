
import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';



const CommonStyle = StyleSheet.create({
  safeAreaViewStyle:{
    flex:1,
    backgroundColor:Colors.white
  },
  MainContainer:
   {
     flex: 1,
    backgroundColor:Colors.white
}


});

export default CommonStyle;
