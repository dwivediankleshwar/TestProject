import { FEED_SUCCESS, FEED_FAIL, SET_LOADING } from  '../actions/types';

const initState = {
  feedError: null,
  feedSuccess:null,
  loading: false
}

export default function(state = initState, action){
  switch (action.type) {
    case SET_LOADING:
     return { ...state, loading: action.payload  };
    case FEED_SUCCESS:
    console.log('feed get success');
      return { ...state, feedError:null, feedSuccess: action.payload};
    case FEED_FAIL:
      return {...state, feedError:action.payload,feedSuccess:null}

    default:
      return state
  }
}
