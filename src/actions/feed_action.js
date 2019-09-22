import{  FEED_SUCCESS , FEED_FAIL,SET_LOADING } from './types';
import axios from "axios";
import { API_URL,API_KEY } from "../components/Constants/config";


/*@ FeedAction.js
This file use for parsing api data
TestProject App
Created by Ankleshwar Dwivedi
@*/

export const getFeed =  ()  => {
  return (dispatch,getState) =>{

      dispatch({type:SET_LOADING,payload:true});
    axios.get(API_URL + API_KEY).then((res)=>{
      //debugger;
       console.log(res);
       if (res.data.status === 'OK'){
         dispatch({type:FEED_SUCCESS,payload:res.data.results});
       }else{
         dispatch({type:FEED_FAIL,payload:'Somthing went wrong. Please try again after some time.'});
       }

        dispatch({type:SET_LOADING,payload:false});
    }).catch((error) => {
        //debugger;
        dispatch({type:FEED_FAIL,payload:error});
        dispatch({type:SET_LOADING,payload:false});
      });


 }


}
