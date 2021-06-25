import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Music/Home'
import LikeMusic from './Music/LikeMusic'
import Music from './Music/Music'
import Team from './Music/Team'
import Login from './Music/login'
import Logo from './Music/Logo'
import AntDesign from "react-native-vector-icons/AntDesign"

let Tab=createBottomTabNavigator()
export default class MusicSystem extends Component {
    _screen=({route})=>{
        let iconName
        return {
            tabBarIcon:({color})=>{
                switch (route.name) {
                    case "Home":
                        iconName="home"
                        break;
                    case "Music":
                        iconName="customerservice"
                        break;
                    case "LikeMusic":
                        iconName="heart"
                        break;
                    case "Team":
                        iconName="team"
                        break;
                    case "Login":
                        iconName="github"
                        break;
                }
                return <AntDesign name={iconName} size={30} color={color}/>
            }
        }
    }
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home" sceneContainerStyle={{paddingTop:8}} screenOptions={this._screen} tabBarOptions={{activeTintColor:'#7056A6',labelStyle:{fontSize:12},style:{height:60,top:0}}}>
                    <Tab.Screen name="Home" component={Home} options={{title:"音乐馆"}}/>
                    <Tab.Screen name="Music" component={Music} options={{title:"正在播"}}/>
                    <Tab.Screen name="LikeMusic" component={LikeMusic} options={{title:"我喜欢"}}/>
                    <Tab.Screen name="Team" component={Team} options={{title:"制作团队"}}/>
                    <Tab.Screen name="Login" component={Login} options={{title:"我的"}}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
