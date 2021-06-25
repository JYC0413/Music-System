import React, { Component } from 'react'
import { Text, View, Button, TextInput, Image, TouchableHighlight } from 'react-native'
import { Modal, Provider } from '@ant-design/react-native'

const prompt=Modal.prompt

export default class App_test2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            visible:false,
            stu:{},
            snoLegal:0,
            nameLegal:0,
            snoTips:0,
            nameTips:0,
        }
    }
    _nameChange=name=>{
        if( name.length >= 2 && name.length <= 5 ) {
            this.state.nameLegal = 1
            this.state.nameTips = 0
        }
        else {
            this.state.nameLegal = 0
            this.state.nameTips = 1
        }
        let stu = this.state.stu
        stu.name = name
        this.setState({stu})
    }
    _snoChange=sno=>{
        if(sno.length===11&&!isNaN(sno)){
            this.state.snoLegal=1
            this.state.snoTips=0
        }else{
            this.state.snoLegal=0
            this.state.snoTips=1
        }
        let stu=this.state.stu
        stu.sno=sno
        this.setState({stu})
    }
    _login=()=>{
        this.setState({visible:false})
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Button title="登录" onPress={()=>this.setState({visible:true})}/>
                <Provider>
                    <Modal visible={this.state.visible} popup animationType='slide-down' maskClosable onClose={()=>this.setState({visible:false})} transparent={true} style={{height:300}}>
                        <View style={{height:'100%',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('./Music/img/Music.png')} style={{height:35,width:50}}/>
                                <Text style={{fontSize:25,fontFamily:'typeBaidu',marginTop:8}}>小象音乐</Text>
                            </View>
                            <View>
                                <TextInput maxLength={5} value={this.state.stu.name} onChangeText={this._nameChange} placeholder="  请输入姓名" style={{borderBottomColor:'gray',borderWidth:1,borderRadius:15,fontSize:20}}/>
                                <View style = {{opacity: this.state.nameTips}}>
                                    <Text style = {{fontSize: 10, color: 'red'}}>*请输入正确的姓名</Text>
                                </View>
                                <TextInput maxLength={11} value={this.state.stu.sno} onChangeText={this._snoChange} placeholder="  请输入学号" keyboardType="numeric" style={{borderBottomColor:'gray',fontSize:20,borderWidth:1,borderRadius:15}}/>
                                <View style = {{opacity: this.state.snoTips}}>
                                    <Text style = {{fontSize: 10, color: 'red'}}>*学号必须为11位数字</Text>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <TouchableHighlight onPress={this._login} style={{backgroundColor:'#7056A6',height:40,width:150,justifyContent:'center',alignItems:'center',borderRadius:15}}>
                                        <Text style={{fontFamily:'typeBaidu',fontSize:20}}>登录</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            
                        </View>
                    </Modal>
                </Provider>
                <Text>{this.state.stu.name}</Text>
                <Text>{this.state.stu.sno}</Text>
            </View>
        )
    }
}
