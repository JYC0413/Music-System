import React, { Component } from 'react'
import { Button, Text, TextInput, View, Image } from 'react-native'


export default class StuAddor extends Component {
    state={stu:{},imgOpacity: 0}
    constructor(props) {
        super(props)
    
        this.state = {
            stu:{},
            imgOpacity:0,

            submitDisabled:true,
            previewDisabled:true,

            snoLegal:0,
            nameLegal:0,
            telLegal:0,
            imgLegal:0,

            snoTips:0,
            nameTips:0,
            telTips:0,
            imgTips:0
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
    _telChange=tel=>{
        if(/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(tel)){
            this.state.telLegal=1
            this.state.telTips=0
        }
        else{
            this.state.telLegal=0
            this.state.telTips=1
        }
        let stu=this.state.stu
        stu.tel=tel
        this.setState({stu})
    }
    _imgChange=img=>{
        if(img.length===11&&!isNaN(img)){
            this.state.previewDisabled=false
            this.state.imgLegal=1
            this.state.imgTips=0
        }
        else{
            this.state.previewDisabled=true
            this.state.imgLegal=0
            this.state.imgTips=1
        }
        let stu=this.state.stu
        stu.img=img
        this.setState({stu})
    }
    _add=()=>{
        let stu=this.state.stu
        stu.img=stu.img+".jpg"
        let options={method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(this.state.stu)}
        fetch("http://82.156.12.58:3000/mrc",options)
        .then(resp=>resp.json())
        .then(stu=>console.log(stu))
        this.props.navigation.popToTop()
        this.props.navigation.navigate("addView")
    }
    _view=()=>{
        if(this.state.imgOpacity===1){ 
            this.setState({ 
            imgOpacity: 0 
            })  
        }else{ 
            this.setState({ 
            imgOpacity: 1 
            }) 
        } 
    }

    render() {
        return (
            <View style={{backgroundColor:'aliceblue',borderRadius:20}}>
                <TextInput placeholderTextColor='blue' maxLength={5} value={this.state.stu.name} onChangeText={this._nameChange} placeholder="请输入学生姓名" style={{borderBottomColor:'gray',borderBottomWidth:1,fontSize:20}}/>
                <View style = {{opacity: this.state.nameTips}}>
                    <Text style = {{fontSize: 10, color: 'red'}}>*请输入正确的姓名</Text>
                </View>
                <TextInput placeholderTextColor='blue' maxLength={11} value={this.state.stu.sno} onChangeText={this._snoChange} placeholder="请输入学生学号" keyboardType="numeric" style={{borderBottomColor:'gray',borderBottomWidth:1,fontSize:20}}/>
                <View style = {{opacity: this.state.snoTips}}>
                    <Text style = {{fontSize: 10, color: 'red'}}>*学号必须为11位数字</Text>
                </View>
                <TextInput placeholderTextColor='blue' maxLength={11} value={this.state.stu.tel} onChangeText={this._telChange} placeholder="请输入学生电话" keyboardType="numeric" style={{borderBottomColor:'gray',borderBottomWidth:1,fontSize:20}}/>
                <View style = {{opacity: this.state.telTips}}>
                    <Text style = {{fontSize: 10, color: 'red'}}>*电话号码必须为11位数字</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput placeholderTextColor='blue' value={this.state.stu.img} onChangeText={this._imgChange} placeholder="请插入学生照片(输入学号即可)" keyboardType="numeric" style={{borderBottomColor:'gray',borderBottomWidth:1,flex:1,fontSize:20}} />
                    <Button title="开关预览" onPress={this._view} style={{borderRadius:20,backgroundColor:'aliceblue'}}/>
                    
                </View>
                <View style = {{opacity: this.state.imgTips}}>
                    <Text style = {{fontSize: 10, color: 'red'}}>*学号必须为11位数字</Text>
                </View>
                <Button title="添加" onPress={this._add}/>
                
                <View>
                    <Text style={{fontSize:20}}>照片预览：</Text>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:200,height:230,opacity: this.state.imgOpacity}} source={{uri:"http://johnyu.cn/s181/"+this.state.stu.img+".jpg"}}/>
                    </View>
                </View>
            </View>
        )
    }
}
