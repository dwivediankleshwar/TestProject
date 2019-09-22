/*@ Feed.js
TestProject App
This file use for show feed.
Created by Ankleshwar Dwivedi
@*/

import React, { useState, useEffect,useCallback,Fragment } from 'react';
import { StyleSheet, View,Linking, Alert, Text, Platform, Image, TouchableOpacity, ImageBackground, ActivityIndicator, SafeAreaView ,FlatList} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {deviceHeight,deviceWidth} from '../HelperFile/Helper';
import Colors from '../Constants/Colors';
import FontSize from '../Constants/FontSize';
import CommonStyle from '../Constants/CommonStyle';
import { connect } from 'react-redux';
import FastImage from "react-native-fast-image";
import CustomHeader from '../Header/CustomHeader';
import { getFeed } from '../../actions/feed_action';
import Indicator from '../HelperFile/Indicator';
import Icon from 'react-native-vector-icons/FontAwesome';


const Feed = (props) => {


const [loading,setLoading] = useState(false);


useEffect(() => {
  props.getFeed();

}, []);
useEffect(() => {


}, [props.feedSuccess]);

useEffect(() => {
  if(props.feedError !== null){
    alert(props.feedError);
  }

}, [props.feedError]);


clickToShowFeed = (obj) =>{

}



renderView = (item,index) => {


//console.log(item.media[0]['media-metadata'][0].url);

  return(
    <View style={{flexDirection:'row',alignItems:'center',padding:10,width:deviceWidth}}>
    <View style={{justifyContent:'center',width:'20%'}}>
    <FastImage
    style={{height:50,width:50,borderRadius:25}}
    source={{uri: item.media[0]['media-metadata'][0].url}}
    />
    </View>


    <View style={{flexDirection:'column',marginLeft:5,marginRight:10,width:'70%'}}>
    <Text numberOfLines={2} style={{fontSize:FontSize.large,marginBottom:10}}>{item.title}</Text>

    <Text numberOfLines={1} style={{fontSize:FontSize.medium,marginBottom:10}}>{item.byline}</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{textAlign:'left',width:'50%'}}>{item.section}</Text>
    <View style={{width:'50%',flexDirection:'row',justifyContent:'flex-end'}}>
      <Icon name='calendar' size={16} color={Colors.black} />
    <Text style={{marginLeft:5,textAlign:'right'}}>{item.published_date}</Text>
    </View>
    </View>
    </View>


<View style={{justifyContent:'center',width:'5%'}}>
<TouchableOpacity onPress={this.clickToShowFeed(item)}>
    <Icon name='angle-right' size={35} color={Colors.lightGray} />
</TouchableOpacity>

    </View>
    </View>
  );
}





  return(
    <Fragment>
    <SafeAreaView style={{ flex: 0, backgroundColor: Colors.theam }} />
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
    <View style={styles.container}>
      <CustomHeader  headerText={'NY Times Most Popular'} />
    {
      (props.loading === true) ? <Indicator /> : null
    }

    <FlatList
      data={props.feedSuccess}
      renderItem={({item, index}) => this.renderView(item, index)}>
      </FlatList>



    </View>
    </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({

    slide: {
      width:deviceWidth,
      height:deviceHeight
    },
    container:{
      flex:1,
      backgroundColor:Colors.white,
      justifyContent:'center',
      alignItems:'center'
    }


  })


  const mapStateToProps = (state) =>{

    return {
      loading: state.feed.loading,
      feedSuccess:state.feed.feedSuccess,
      feedError:state.feed.feedError
    }

  }

const mapDispatchToProps = (dispatch) =>{

    return {
      getFeed: () => dispatch(getFeed())
    }

}



export default  connect(mapStateToProps,mapDispatchToProps) (Feed);
