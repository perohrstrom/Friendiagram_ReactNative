import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/app/store/createStore'
import VisibleApp from './src/app/containers/VisibleApp'

let store = configureStore()

export default class Friendiagram extends Component {
  render() {
    return (
      <Provider store={store}>
        <VisibleApp />
      </Provider>
    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('Friendiagram', () => Friendiagram);
