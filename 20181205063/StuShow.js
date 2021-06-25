import React, { Component } from 'react'
import { Text, View, Image, Button, TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
export default class StuShow extends Component {
    _Jump=()=>{
        
        this.props.navigation.navigate("StuView",{name:this.props.stu.name,sno:this.props.stu.sno,tel:this.props.stu.tel,img:this.props.stu.img})
    }
    render() {
        return (
            <View style={{flexDirection:'row',margin:2,backgroundColor:'floralwhite'}}>
                <Image style={{width:200,height:230}} source={{uri:"http://johnyu.cn/s181/"+this.props.stu.img}}/>
                <View style={{flex:1,justifyContent:'space-around',padding:12}}>
                    <Text style={{fontSize:18}}>姓名： {this.props.stu.name} </Text>
                    <Text style={{fontSize:18}}>学号： {this.props.stu.sno} </Text>
                    <Text style={{fontSize:18}}>电话： {this.props.stu.tel} </Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style={{width:60,height:30,backgroundColor:'gray',justifyContent:'center',borderRadius:10}} onPress={this._Jump}>
                            <Text style={{fontSize:15,color:'white',textAlign:'center'}}>详情</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                
            </View>
        )
    }
}
