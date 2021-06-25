import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, TextInput, Alert, ImageBackground, FlatList,DeviceEventEmitter } from 'react-native'
import { SearchBar } from '@ant-design/react-native'
import LikeMusicShow from './LikeMusicShow'
import TopView from './TopView'

const likeUrl="http://jyccloud.cn:3000/music?Like=true"
export default class LikeMusic extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:'',musics:[],mIndex:[]
        }
        this._onChange=value=>{
            this.setState({value});
        }
        this._clear=()=>{
            this.setState({value:''});
        }
    }
    componentDidMount(){
        DeviceEventEmitter.addListener("addlike",()=>{
            this.__init()
        })
        this.__init()
    }
    __init=()=>{
        fetch(likeUrl)
        .then(resp=>resp.json())
        .then(musics=>{
            this.setState({musics})
        })
    }
    _goBack=()=>this.props.navigation.navigate("Home")
    _Jump=()=>this.props.navigation.navigate("Login")
    _renderMusics=({item})=><LikeMusicShow music={item} navigation={this.props.navigation}/>
    _sep=()=><View style={{backgroundColor:'#7056A6',height:1,marginBottom:5,width:'75%',marginLeft:'23%'}}/>
    
    render() {
        let {musics:mus,mIndex:inx}=this.state
        return (
            <View style={{backgroundColor:'lavender',flex:1}}>
                <TopView/>
                <ImageBackground source={require('./img/backgroundImage02.jpg')} style={{height:200,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                    <View style={{width:'40%',height:150,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('./img/likemusictitle02.png')} style={{height:170,width:120,top:20}}/>
                    </View>
                    <View style={{width:'40%',height:150,justifyContent:'space-evenly',marginRight:60}}>
                        <Text style={{fontSize:30,fontFamily:'typeBaidu',color:'white',opacity:0.9}}>我的收藏</Text>
                        <Text style={{fontSize:20,color:'white',opacity:0.9}}>共{inx}首</Text>
                    </View>
                </ImageBackground>
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <View style={{alignItems:'center',backgroundColor:'ghostwhite'}}>
                        <View style={{flex:1,margin:15,backgroundColor:'lavender'}}>
                            <FlatList ItemSeparatorComponent={this._sep} data={mus} renderItem={this._renderMusics} key={music=>music.id}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
