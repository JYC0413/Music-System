import { Button } from '@ant-design/react-native';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Image, ImageBackground, Alert} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { SearchBar, NoticeBar, WhiteSpace  } from '@ant-design/react-native'
import SideMenu from 'react-native-side-menu';

export default class TopView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:''
        }
        this._onChange=value=>{
            this.setState({value});
        }
        this._clear=()=>{
            this.setState({value:''});
        }
    }
    
    render() {
        return (
            <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'lavender'}}>
                <TouchableHighlight onPress={()=>this.setState({isOpen:true})}>
                    <Image source={require('./img/Music.png')} style={{width:40,height:30,top:7}}/>
                </TouchableHighlight>
                <View >
                    <Text style={{fontSize:28,color:'black',fontFamily:'typeQ',paddingTop:7}}>小象音乐</Text>
                </View>
                <View style={{width:170,justifyContent:'center'}}>
                    <SearchBar value={this.state.value} placeholder="搜索" onSubmit={value => Alert.alert('搜索功能敬请期待')} onCancel={this._clear} onChange={this._onChange}/>
                </View>
                <View style={{width:50,justifyContent:'center'}}>
                    <TouchableHighlight style={{backgroundColor:'lavender',borderRadius:5}} onPress={this._Jump}><Text style={{fontSize:20,textAlign:'center',fontFamily:'typeQ'}}>我的</Text></TouchableHighlight>
                </View>
            </View>
        )
    }
}
