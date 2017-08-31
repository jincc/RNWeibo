/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import  {ScrollView ,View} from 'react-native'
import {
  AppRegistry
} from 'react-native';
// import  App from './src/pages/index'
import  App from './src/pages/AppIndex'

class  Test extends  Component {
    render(){
        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                horizontal={true}
                scrollEnabled={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{flex:1}}
                contentContainerStyle={{paddingTop:0}}>
              <View backgroundColor="blue" style={{flex:1,width:375}}/>
              <View backgroundColor="red" style={{flex:1,width:375}} />
              <View backgroundColor="yellow"  style={{flex:1,width:375}}/>
            </ScrollView>
        )
    }
}


export default class RNWeibo extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('RNWeibo', () => RNWeibo);
