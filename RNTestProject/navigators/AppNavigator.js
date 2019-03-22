import {createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, BottomTabBar} from 'react-navigation'
import React from 'react'
import {Button, Platform} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../page/HomePage'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'
import Page4 from '../page/Page4'
import Page5 from '../page/Page5'
import FlatListDemo from '../page/FlatListDemo'

const AppTopNavigator = createMaterialTopTabNavigator({
        Page1:{
            screen:Page1,
            navigationOptions:{
                tabBarLabel: 'All'
            }
        },
        Page2:{
            screen:Page2,
            navigationOptions:{
                tabBarLabel: 'iOS'
            }
        },
        Page3:{
            screen:Page3,
            navigationOptions:{
                tabBarLabel: 'React'
            }
        },
        Page4:{
            screen:Page4,
            navigationOptions:{
                tabBarLabel: 'React Native'
            }
        },
        Page5:{
            screen:Page5,
            navigationOptions:{
                tabBarLabel: 'Devio'
            }
        },

    }, {
        tabBarOptions:{
            tabStyle:{mindWidth: 50},
            upperCaseLabel:false, //标签是否大些，默认为true
            scrollEnabled:true,
            style:{
                backgroundColor:'#678'
            },
            indicatorStyle:{
                height:2,
                backgroundColor:'white'
            },
            labelStyle:{
                fontSize:13,
                marginTop:6,
                marginBottom:6
            }//文字支持的样式
        }
    }
);

const AppBottomNavigator = createBottomTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-aperture'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
}, {
    tabBarOptions:{
        activeTintColor: Platform.OS === 'ios' ? '#63e91e' : 'fff',
    }
});

export const AppStackNavigator=createStackNavigator({
    HomePage:{
        screen:HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation})=>({

        })
    },
    Page2: {
        screen: Page2,
        navigationOptions:{
            title:'Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions:(props)=>{
            const {navigation}=props;
            const {state, setParams}=navigation;
            const {params}=state;
            return{
                title:params.title?params.title:'page3',
                headerRight:(
                    <Button title={params.mode === 'edit'? '保存': '编辑'} onPress={()=>setParams({mode:params.mode === 'edit'?'':'edit'})}
                    />
                )
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions:{
            title:'Page4'
        }
    },
    FlatListDemo: {
        screen: FlatListDemo,
        navigationOptions:{
            title:'FlatListDemo'
        }
    },
    Bottom:{
        screen:AppBottomNavigator,
        navigationOptions:{
            title:'BottomNavigator'
        }
    },
    Top:{
        screen:AppTopNavigator,
        navigationOptions:{
            title:'TopNavigator'
        }
    },


})
