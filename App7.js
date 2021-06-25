import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Text, View, Button } from 'react-native'
import Home from './20181205063/Home'
import StuAddor from './20181205063/StuAddor'
import StuView from './20181205063/StuView'
import addView from './20181205063/addView'

let Stack=createStackNavigator()

export default class App7 extends Component {
    _add=()=>{
        this.nav.navigate("StuAddor")
    }
    render() {
        return (
            <NavigationContainer ref={ref=>this.nav=ref}>
                <Stack.Navigator>
                    <Stack.Screen options={{title:"用户列表",headerTitleStyle:{color:'blue',textAlign:'center',fontSize:23},headerStyle:{backgroundColor:'lavenderblush'},headerRight:()=><Button title="添加" onPress={this._add}/>,headerLeft:()=><Text/> }} name="Home" component={Home}></Stack.Screen>
                    <Stack.Screen options={{title:"添加用户",headerTitleStyle:{color:'blue',textAlign:'center',fontSize:23},headerStyle:{backgroundColor:'lavenderblush'},headerRight:()=><Text/>}} name="StuAddor" component={StuAddor}></Stack.Screen>
                    <Stack.Screen options={{title:"用户详情",headerTitleStyle:{color:'blue',textAlign:'center',fontSize:23},headerStyle:{backgroundColor:'lavenderblush'},headerRight:()=><Text/>}} name="StuView" component={StuView}></Stack.Screen>
                    <Stack.Screen options={{title:"成功信息",headerLeft:null,headerTitleStyle:{color:'blue',textAlign:'center',fontSize:23},headerStyle:{backgroundColor:'lavenderblush'}}} name="addView" component={addView}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
