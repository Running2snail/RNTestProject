/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, FlatList} from 'react-native';

type Props = {};
const  CITY_NAMES=['北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京'];
export default class FlatListDemo extends Component<Props> {

    constructor(props) {
        super.(props);
    }

    _renderItem(data) {
        return <View style={styles.item}>
            <Text>{data.item}</Text>
        </View>
    }


    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={CITY_NAMES}

                    renderItem={(data) => this._renderItem(data)}
                    refreshing={this.state}
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
    item:{
        backgroundColor:'#169',
        height:200,
        marginRight:15,
        marginLeft:15,
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center',

    },

    text:{
        color:'white',
        fontSize:20,
    }
});