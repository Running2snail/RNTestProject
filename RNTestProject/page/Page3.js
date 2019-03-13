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
export default class Page3 extends Component<Props> {

  render() {
      const {navigation}= this.props;
      const {state, setParams} = navigation;
      const {params} = state;
      const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
      return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to page3</Text>
                <Text style={styles.welcome}>{showText}</Text>
                <TextInput style={styles.input}
                           onChangeText={text=>{
                                setParams({title:text})
                           }}
                />
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
    input:{
        height:50,
        borderWidth: 1,
        borderColor:'black',
        marginTop: 10,

    }
});