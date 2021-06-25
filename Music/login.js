import { Button, Provider, Modal } from '@ant-design/react-native';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Image, ImageBackground, TextInput} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { SearchBar, NoticeBar, WhiteSpace  } from '@ant-design/react-native'
import SideMenu from 'react-native-side-menu'
import TopView from './TopView'

const {width, heihgt} = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value:'',
            isOpen:false,
            visible:false,
            stu:{},
            snoLegal:0,
            nameLegal:0,
            snoTips:0,
            nameTips:0
        }
        this._onChange=value=>{
            this.setState({value});
        }
        this._clear=()=>{
            this.setState({value:''});
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
    _Jump=()=>this.props.navigation.navigate("Login")
    render() {
        // 侧边栏内的显示内容
        const menu = <View style={{flex:1,backgroundColor:"lavender"}}>
            <View style={{height:'40%',justifyContent:'center'}}>
                <Button type="primary" inline style={{margin:10,backgroundColor:'#7056A6'}} onPress={()=>this.setState({isOpen:false,visible:true})}>登录</Button>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row',marginBottom:20}}>
                    <Text style={{fontFamily:'typeBaidu',fontSize:15}}>欢迎您：</Text>
                    <Text style={{fontFamily:'typeBaidu',fontSize:25}}>{this.state.stu.name}</Text>
                </View>
                <Image source={{uri:"http://johnyu.cn/s181/"+this.state.stu.sno+".jpg"}} style={{width:160,height:160,borderWidth:4,borderColor:'#7056A6',borderRadius:80}}/>
                <Text style={{fontSize:15,marginTop:20,fontFamily:'typeBaidu'}}>账户： {this.state.stu.sno}</Text>
                <TouchableHighlight style={styles.buttonType}>
                    <Text>个人中心</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonType}>
                    <Text>设置</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonType}>
                    <Text>退出登录</Text>
                </TouchableHighlight>
            </View>
        </View>
        
        return (
            // 侧边栏主体
            <SideMenu
                menu={menu} isOpen={this.state.isOpen} openMenuOffset={width / 1.5} hiddenMenuOffset={0} edgeHitWidth={width} disableGestures={false} menuPosition={'left'} autoClosing={false}>
                <View style={{height:'100%'}}>
                    <ImageBackground source={require('./img/backgroundImage04.jpg')} style={{flex:1}}>
                        <TopView/>
                    <Provider>
                        <Modal visible={this.state.visible} popup animationType='slide-down' maskClosable onClose={()=>this.setState({visible:false})} transparent={true} style={{height:300}}>
                            <View style={{height:'100%',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('./img/Music.png')} style={{height:35,width:50}}/>
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
                                        <TouchableHighlight onPress={()=>this.setState({visible:false,isOpen:true})} style={{backgroundColor:'#7056A6',height:40,width:150,justifyContent:'center',alignItems:'center',borderRadius:15}}>
                                            <Text style={{fontFamily:'typeBaidu',fontSize:20}}>登录</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </Provider>

                    <View style={{justifyContent:'flex-end',flex:1}}>
                            <View >
                                {/* 底部字幕轮播 */}
                                <NoticeBar marqueeProps={{loop: true,style:{fontSize:20,fontFamily:'typeBaidu'}}} >
                                    本作品还在持续更新中，尽请关注┗( ▔, ▔ )┛┗( ▔, ▔ )┛
                                </NoticeBar>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                
            </SideMenu>

        );
    }
}


const styles = StyleSheet.create({
    buttonType: {
        justifyContent:'center',
        alignItems:'center',
        width:190,
        height:45,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#7056A6',
        marginTop:15
    }
})