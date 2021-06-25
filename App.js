import React, { Component } from 'react'
import { TabBarIOS, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AntDesign from "react-native-vector-icons/AntDesign"

let style={fontSize:60}
let Tab=createBottomTabNavigator()
function Home(){
  return <View><Text style={style}>Home</Text></View>
}
function About(){
  return <View><Text style={style}>About</Text></View>
}
export default class App extends Component {
  _screen=({route})=>{
    return {
      tabBarIcon:({color})=>{
        let iconName;
        switch(route.name){
          case "Home":iconName="home"
          break;
          case "About":iconName="dingding"
        }
        return <AntDesign name={iconName} size={40} color={color}/>
      }
    }
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={this._screen} sceneContainerStyle={{paddingTop:50}} tabBarOptions={{labelStyle:{fontSize:20},activeTintColor:'tomato',inactiveTintColor:'green',style:{height:90,position:'absolute',top:0}}}>
          <Tab.Screen options={{title:'⾸⻚'}} name="Home" component={Home}/>
          <Tab.Screen name="About" component={About}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
