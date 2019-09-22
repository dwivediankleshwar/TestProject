
/*@ RouterComponent.js
TestProject App
This file use for app navigation.
Created by Ankleshwar Dwivedi
@*/

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  Text,
  View,
} from "react-native";
import { connect } from 'react-redux';
import { Alert, StatusBar } from 'react-native';
import Splash from '../LandingPage/Splash';
import Feed from '../Feed/Feed';




class RouterComponent extends Component {
  constructor(props) {
    super(props);

      this.state = {

         isLogin: false,
      };


  }





  componentDidMount() {
    console.disableYellowBox = true;
  }



 render() {

      return (
        <Router>
        <Scene key='root' gesturesEnabled={false} panHandlers={null}>
        <Scene hideNavBar>

        <Scene key='Splash' component={Splash} title=''  initial />
        <Scene key='Feed' component={Feed} title=''   />

        </Scene>
        </Scene>
        </Router>


      );


    }


}



export default RouterComponent;
