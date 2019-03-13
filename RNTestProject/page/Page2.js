/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AlertIOS,ScrollView, ListView,} from 'react-native';

    type Props = {};
export default class Page2 extends Component<Props> {

  render() {
      return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to page2</Text>
            </View>
      )
  }

};




const styles = StyleSheet.create({

    container:{
        backgroundColor:'white',
        flex:1,
    },
    welcome:{

    },
});