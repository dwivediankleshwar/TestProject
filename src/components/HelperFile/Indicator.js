import React, { useState, useEffect } from 'react';
import {AsyncStorage, StyleSheet, TextInput, View,Linking, Alert, Text, Platform, Image, TouchableOpacity, ImageBackground, ActivityIndicator, StatusBar, SafeAreaView,Dimensions } from 'react-native';
import Colors from '../Constants/Colors';





const Indicator = (props) => {

  return(
    <View style={styles.containerActivety}>
          <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.white} /></View>
          </View>

  );
}

const styles = StyleSheet.create({

  containerActivety: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    zIndex: 10000000,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  loader:
    {
      width: 100, height: 100, backgroundColor: Colors.theam, alignItems: 'center', justifyContent: 'center', borderRadius: 10

    },

  })



export default Indicator;
