/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
//import Feed from '../src/components/Feed/Feed';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const snap =   renderer.create(<App />).toJSON;
  expect(snap).toMatchSnapshot
});
