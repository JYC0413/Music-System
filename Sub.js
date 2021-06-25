import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

let Tab=createBottomTabNavigator()

function Home({navigation}){
    return<View style={styles.subView}>
        <Text style={styles.txt}>Home</Text>
        <AntDesign name="wifi" color={"green"} size={60} onPress={()=>navigation.navigate("Settings",{screen:'Wifi'})}/>
        <Feather name="bluetooth" color={"blue"} size={60} onPress={()=>navigation.navigate("Settings",{screen:"BlueTooth"})}/>
    </View>
}
function About(){
    return <View style={styles.subView}>
        <Text style={styles.txt}>About</Text>
    </View>
}
function Settings(){
    function _screen({route}){
        let iconName;
        return {
            tabBarIcon:({color})=>{
                switch(route.name){
                    case 'Wifi': return <AntDesign name={'wifi'} size={20} color={color}/>
                    case 'BlueTooth': return <Feather name={'bluetooth'} size={20} color={color}/>
                }
            }
        }
    }
    return <Tab.Navigator screenOptions={_screen}>
        <Tab.Screen name="Wifi" component={Wifi}/>
        <Tab.Screen name="BlueTooth" component={BlueTooth}/>
    </Tab.Navigator>
}
function Wifi(){
    return <View style={styles.subView}>
        <Text style={styles.txt}>Wifi</Text>
    </View>
}
function BlueTooth(){
    return <View style={styles.subView}>
        <Text style={styles.txt}>BlueTooth</Text>
    </View>
}

const styles = StyleSheet.create({
    txt:{fontSize:60},
    subView:{marginTop:0}
})

export {Home,About,Settings}
