/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,Button} from 'react-native';

type Props = {};
export default class HomePage extends Component<Props> {

    static navigationOptions={
        title:'Home',
        headerBackTitle:'返回'
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to HomePage</Text>
                <Button
                title={'Go to Page1'}
                onPress={()=>{
                    navigation.navigate('Page1', {name:'动态的'})
                }}
            />
                <Button
                    title={'Go to Page2'}
                    onPress={()=>{
                        navigation.navigate('Page2')
                    }}
                />
                <Button
                    title={'Go to Page3'}
                    onPress={()=>{
                        navigation.navigate('Page3', {name:'Devio'})
                    }}
                />
                <Button
                    title={'Go to Bottom Navigator'}
                    onPress={()=>{
                        navigation.navigate('Bottom')
                    }}
                />
                <Button
                    title={'Go to Top Navigator'}
                    onPress={()=>{
                        navigation.navigate('Top')
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
        fontSize:20,
        textAlign:'center',
    },
});