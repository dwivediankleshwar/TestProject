/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Router from './src/components/Navigation/Router';


const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};



export default App;
