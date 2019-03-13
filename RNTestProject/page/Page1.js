/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AlertIOS,ScrollView, Button} from 'react-native';

    type Props = {};
export default class Page1 extends Component<Props> {

  render() {
      const {navigation}=this.props;
      return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to page1</Text>
                <Button
                    title={'Go Back'}
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
                <Button
                    title={'跳转到page4'}
                    onPress={()=>{
                        navigation.navigator('Page4');
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
});