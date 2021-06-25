import React, { Component } from 'react'
import { Image, Text, TextInput, View, TouchableHighlight, FlatList, Alert } from 'react-native'
import Swiper from 'react-native-swiper'
import MusicShow from './MusicShow'
import { SearchBar } from '@ant-design/react-native';
import TopView from './TopView'

const dataUrl="http://jyccloud.cn:3000/music"
export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             musics:[],mIndex:[],value:''
        }
        this._onChange = value => {
            this.setState({ value });
        };
        this._clear = () => {
            this.setState({ value: '' });
        };
    }
    
    _sep=()=><View style={{backgroundColor:'#7056A6',height:1,marginBottom:5,width:'75%',marginLeft:'22%'}}/>
    componentDidMount(){
        fetch(dataUrl).then(resp=>resp.json()).then(musics=>this.setState({musics}))
    }
    _renderMusics=({item})=><MusicShow music={item} navigation={this.props.navigation}/>
    _Jump=()=>{
        this.props.navigation.navigate("Login")
    }
    render() {
        let {musics:mus,mIndex:inx}=this.state
        return (
            <View style={{backgroundColor:'lavender',flex:1}}>
                <TopView/>
                <View style={{width:'100%',height:180,top:10}}>
                    <Swiper autoplay={true} autoplayTimeout={2.5} dot={<View style={{height:1,width:'4%',backgroundColor:'white',margin:3,opacity:0.5}}/>} activeDot={<View style={{height:2,width:'4%',backgroundColor:'white',margin:3}}/>}>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <Image source={require('./img/swiper01.jpg')} style={{width:'95%',height:160,borderRadius:15}}/>
                        </View>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <Image source={require('./img/swiper02.jpg')} style={{width:'95%',height:160,borderRadius:15}}/>
                        </View>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <Image source={require('./img/swiper03.jpg')} style={{width:'95%',height:160,borderRadius:15}}/>
                        </View>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <Image source={require('./img/swiper04.jpg')} style={{width:'95%',height:160,borderRadius:15}}/>
                        </View>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <Image source={require('./img/swiper05.jpg')} style={{width:'95%',height:160,borderRadius:15}}/>
                        </View>
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <Image source={require('./img/swiper06.jpg')} style={{width:'95%',height:160,borderRadius:15}}/>
                        </View>
                    </Swiper>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',top:5}}>
                    <View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'center',height:120,borderWidth:3,borderColor:'#7056A6',width:'95%',borderRadius:15}}>
                        <View style={{width:70,height:80}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}><Image source={require("./img/singer.png")} style={{width:46,height:46}}/></View>
                            <Text style={{fontSize:15,textAlign:'center',top:9,fontFamily:'typeBaidu'}}>歌手</Text>
                        </View>
                        <View style={{width:70,height:80}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}><Image source={require("./img/radio.png")} style={{width:46,height:46}}/></View>
                            <Text style={{fontSize:15,textAlign:'center',top:9,fontFamily:'typeBaidu'}}>电台</Text>
                        </View>
                        <View style={{width:70,height:80}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}><Image source={require("./img/ranking.png")} style={{width:46,height:46}}/></View>
                            <Text style={{fontSize:15,textAlign:'center',top:9,fontFamily:'typeBaidu'}}>排行</Text>
                        </View>
                        <View style={{width:70,height:80}}>
                        <View style={{alignItems:'center',height:55,top:5}}><Image source={require("./img/us.png")} style={{width:41,height:41}}/></View>
                            <Text style={{fontSize:15,textAlign:'center',fontFamily:'typeBaidu'}}>一起</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{alignItems:'center',justifyContent:'center',height:400,top:10}}>
                    <View style={{width:'95%',borderRadius:15,alignItems:'center',borderWidth:3,borderColor:'#7056A6',backgroundColor:'ghostwhite',height:370}}>
                        <View style={{width:'95%',height:350,borderRadius:15}}>
                            <Text style={{textAlign:'center',fontSize:20}}>推荐歌曲</Text>
                            <FlatList ItemSeparatorComponent={this._sep} data={mus} renderItem={this._renderMusics} key={music=>music.id}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
