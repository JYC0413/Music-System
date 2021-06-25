import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class StuView extends Component {
    render() {
        let name=this.props.route.params?.name
        let sno=this.props.route.params?.sno
        let tel=this.props.route.params?.tel
        let img=this.props.route.params?.img
        return (
            <View style={{height:'100%',backgroundColor:'ghostwhite'}}>
                <View style={{justifyContent:'center',alignItems:'center',paddingTop:50}}>
                    <View style={{justifyContent:'center',alignItems:'center',height:350,width:400,backgroundColor:'lavender'}}>
                        <Image style={{width:200,height:260,borderRadius:10}} source={{uri:"http://johnyu.cn/s181/"+img}}/>
                    </View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}> 
                    <View style={{padding:50,width:400,backgroundColor:'honeydew'}}>
                        <Text style={styles.text}>姓名：{name}</Text>
                        <Text style={styles.text}>学号：{sno}</Text>
                        <Text style={styles.text}>电话：{tel}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:{fontSize:20,color:'darkblue',backgroundColor:'whitesmoke',padding:10,borderBottomWidth:1,borderBottomColor:'gray',borderRadius:10}
})