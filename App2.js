import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigatior, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StatusBar } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Home,About,Settings} from './Sub'

let Tab=createBottomTabNavigator()
export default class App1 extends Component {
    _screen=({route})=>{
        let iconName;
        return {
            tabBarIcon:({color})=>{
                switch(route.name){
                    case "Home": iconName="home"
                    break;
                    case "About": iconName="earth"
                    break;
                    case "Settings": iconName="dingding"
                    break;
                }
                return <AntDesign name={iconName} size={30} color={color}/>
            }
        }
    }
    render() {
        return (
            <NavigationContainer>
                <StatusBar hidden={true}/>
                <Tab.Navigator sceneContainerStyle={{paddingTop:100}} screenOptions={this._screen} tabBarOptions={{activeTintColor:'pink',labelStyle:{fontSize:30},style:{height:80,position:'absolute',top:0}}}>
                    <Tab.Screen name="Home" options={{tabBarBadge:3}} component={Home}/>
                    <Tab.Screen name="About" component={About}/>
                    <Tab.Screen name="Settings" component={Settings}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
