import React, { Component } from 'react'
import { Text, TouchableHighlight, View, Animated } from 'react-native'

export default class addView extends Component {
    state={fontSize:new Animated.Value(40),counter:10}
    componentDidMount=()=>{
        let an1=Animated.timing(this.state.fontSize,{duration:500,toValue:80,useNativeDriver:false})
        let an2=Animated.timing(this.state.fontSize,{duration:500,toValue:40,useNativeDriver:false})
        let dh=setInterval(()=>{
            an1.start(()=>an2.start())
        },1000)
    }
    _goBack=()=>{
        this.props.navigation.popToTop()
        this.props.navigation.navigate("StuAddor")
    }
    _goNext=()=>{
        this.props.navigation.navigate("Home")
    }
    render() {
        return (
            <View>
                <View style={{justifyContent:'center',flexDirection:'row',height:500,alignContent:'center',alignItems:'center'}}>
                    <Animated.Text style={{fontSize:this.state.fontSize,width:400,backgroundColor:'papayawhip',textAlign:'center',borderRadius:20,color:'darkslategray'}}>添加成功</Animated.Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',}}>
                    <TouchableHighlight style={{width:120,height:40,backgroundColor:'silver',justifyContent:'center',borderRadius:10}} onPress={this._goBack}>
                        <Text style={{fontSize:20,textAlign:'center'}}>继续添加</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{width:120,height:40,backgroundColor:'silver',justifyContent:'center',borderRadius:10}} onPress={this._goNext}>
                        <Text style={{fontSize:20,textAlign:'center'}}>查看列表</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
