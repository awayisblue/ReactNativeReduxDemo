/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux'
import App from './app'
import store from './app/store'
import {
    AppRegistry,
} from 'react-native';

export default class ReactNativeReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
              <App/>
            </Provider>

        );
    }
}


AppRegistry.registerComponent('ReactNativeReduxDemo', () => ReactNativeReduxDemo);
