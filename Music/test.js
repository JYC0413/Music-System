import React, { Component } from 'react'
import { Text, View, Animated, Image, TextInput, TouchableHighlight ,FlatList,Alert, ImageBackground } from 'react-native'
import Video from 'react-native-video'
import Slider from '@react-native-community/slider'
import { linear } from 'react-native/Libraries/Animated/Easing'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Modal, Provider, Button, WingBlank, SearchBar } from '@ant-design/react-native'
import MusicShow from './MusicShow'
import TopView from './TopView'

const dataUrl="http://johnyu.cn:3000/albums"
const musicUrl="http://johnyu.cn/mp3/"

export default class App12 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visible1:false,visible2:false,musics:[],mIndex:[],paused:true,duration:0,currentTime:0,rotate:new Animated.Value(0),value:''
        }
        this._onChange=value=>{
            this.setState({value});
        }
        this._clear=()=>{
            this.setState({value:''});
        }
    }
    
    rv=0
    componentDidMount(){
        this.state.rotate.addListener(({value})=>this.rv=value)
        fetch(dataUrl).then(resp=>resp.json()).then(musics=>this.setState({musics}))
    }
    //播放暂停
    _playOrPause=()=>{
        //涉及动画对象
        let an=Animated.loop(Animated.timing(this.state.rotate,{useNativeDriver:true,duration:5000,toValue:this.rv+360,easing:linear}))
        if(this.state.paused){
            an.start()
        }else{
            an.stop()
        }
        this.setState(state=>({paused:!state.paused}))
    }
    //歌曲加载后更新duration状态
    _load=({duration})=>this.setState({duration})
    //进度现实控制
    _progress=({currentTime})=>this.setState({currentTime})
    //快速定位
    _seek=val=>{
        this.player.seek(val)
    }
    //结尾换歌
    _end=()=>{
        let songsNum=this.state.musics.length
        this.setState(state=>({mIndex:++state.mIndex%songsNum}))
    }
    _nextMusic=()=>[
        this.setState(state=>({mIndex:++state.mIndex}))
    ]
    _lastMusic=()=>{
        this.setState(state=>({mIndex:--state.mIndex}))
    }
    _goBack=()=>this.props.navigation.navigate("Home")
    _renderMusics=({item})=>{
        // this.setState({visible:this.props.route.params?.visible})
        return <MusicShow music={item} navigation={this.props.navigation}/>
    }
    _close=()=>{
        this.setState({visible1:false})
    }
    _Jump=()=>this.props.navigation.navigate("Login")
    _show=()=>this.setState({visible2:!this.state.visible})
    render() {
        // let {musics:mus,mIndex:inx}=this.state
        let mus=this.state.musics
        let inx=this.props.route.params?.inx-1
        let mIndex=inx+this.state.mIndex
        let style={transform:[{rotate:this.state.rotate.interpolate({inputRange:[0,360],outputRange:['0deg','360deg']})}]}
        return (
            <Provider>
                <ImageBackground source={require('./img/backgroundImage06.png')} style={{flex:1}}>
                <View style={{flex:1}}>
                    <TopView/>
                    {/* 歌曲及歌手 */}
                    <View style={{backgroundColor:"rgba(51,51,51,0.7)"}}>
                        <Text style={{fontSize:30,textAlign:'center',color:'white',marginTop:15,fontFamily:'typeBaidu'}}>{mus[mIndex]?.name}</Text>
                        <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:3,marginBottom:10,paddingBottom:5}}>{mus[mIndex]?.singer.join(',')}</Text>
                    </View>
                    {/* 分享按钮 */}
                    <View style={{alignItems:'flex-end',padding:'5%'}}>
                        <TouchableHighlight  underlayColor={'rgba(0,0,0,0)'} onPress={this._show} style={{opacity:0.85}}>
                            <MaterialIcons name={'share'} size={40} color={'aliceblue'}/>
                        </TouchableHighlight>
                    </View>
                    
                    {/* 光盘及进度条 */}
                    <View style={{alignItems:'center'}}>
                        <View style={{top:'5%',width:'85%'}}>
                        <Animated.Image style={[style,{width:260,height:260,borderRadius:130,alignSelf:'center'}]} source={{uri:mus[mIndex]?.img}}/>
                        {/* <View style={{justifyContent:'space-around',flexDirection:'row',top:'45%'}}>
                            <View></View>
                            <View>
                                <AntDesign name={'heart'} size={40} color={'#7056A6'}/>
                            </View>
                        </View> */}
                        <View style={{justifyContent:'center',top:'42%'}}>
                            <View style={{height:30,justifyContent:'center'}}>
                                <Slider value={this.state.currentTime} onSlidingComplete={this._seek} maximumValue={this.state.duration}  maximumTrackTintColor={'gray'} minimumTrackTintColor={'aliceblue'} thumbTintColor={'aliceblue'}/>
                            </View>
                        </View>
                        </View>
                    </View>
                
                    {/* 底部按钮 */}
                    <View style={{height:'48%',justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
                        {/* <Button title={this.state.paused?"播放":"暂停"} onPress={this._playOrPause}/> */}
                        {/* 返回首页 */}
                        <View>
                            <TouchableHighlight activeOpacity={0.1} underlayColor={'rgba(0,0,0,0)'} onPress={this._likeMusic} style={{opacity:0.85}}>
                                <AntDesign name={'heart'} size={32} color={'aliceblue'}/>
                            </TouchableHighlight>
                        </View>
                        {/* 上一首 */}
                        <View>
                            <TouchableHighlight activeOpacity={0.1} underlayColor={'rgba(0,0,0,0)'} onPress={this._lastMusic} style={{opacity:0.85}}>
                                <AntDesign name={"doubleleft"} size={32} color={'aliceblue'}/>
                            </TouchableHighlight>
                        </View>
                        {/* 播放暂停 */}
                        <View>
                            <TouchableHighlight activeOpacity={0.1} underlayColor={'rgba(0,0,0,0)'} style={{width:74,height:74,justifyContent:'center',alignItems:'center',opacity:0.85,borderRadius:39,borderWidth:2,borderColor:'aliceblue'}} onPress={this._playOrPause}>
                                <Entypo name={this.state.paused?"controller-play":"controller-paus"} size={47} color={'aliceblue'} style={{marginLeft:this.state.paused?4:0}}/>
                            </TouchableHighlight>
                        </View>
                        {/* 下一首 */}
                        <View>
                            <TouchableHighlight activeOpacity={0.1} underlayColor={'rgba(0,0,0,0)'} onPress={this._nextMusic} style={{opacity:0.85}}>
                                <AntDesign name={"doubleright"} size={32} color={'aliceblue'}/>
                            </TouchableHighlight>
                        </View>
                        {/* 列表按钮 */}
                        <View>
                            <TouchableHighlight activeOpacity={0.1} underlayColor={'rgba(0,0,0,0)'} onPress={()=>this.setState({visible1:true,mIndex:[]})} style={{opacity:0.85}}>
                                <AntDesign name={"menuunfold"} size={32} color={'aliceblue'}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <WingBlank>
                        {/* 播放列表模态框 */}
                        <Modal popup visible={this.state.visible1} animationType="slide-up" style={{width:390,borderRadius:15}} maskClosable onClose={()=>this.setState({visible1:false})} transparent={true} title="播放列表">
                            <View style={{height:520}}>
                                <FlatList data={mus} renderItem={this._renderMusics} key={music=>music.id}/>
                            </View>
                            <Button type="warning" onPress={this._close} title="close modal" style={{top:10}}>关闭窗口</Button>
                        </Modal>
                    </WingBlank>
                    {/* 生成海报 */}
                    <Modal visible={this.state.visible2} popup animationType='slide-down' maskClosable onClose={()=>this.setState({visible2:false})} transparent={true} style={{width:300,height:460,alignItems:'center'}}>
                        
                        <TouchableHighlight activeOpacity={0.1} underlayColor={'white'} style={{justifyContent:'flex-end',alignItems:'flex-start'}} onPress={()=>this.setState({visible:false})}>
                            <View>
                                <Image source={{uri:mus[mIndex]?.img}} style={{height:250,width:250,borderRadius:10}}/>
                                <Text style={{fontFamily:'typeBaidu',color:'black',fontSize:23,marginTop:15}}>{mus[mIndex]?.name}</Text>
                                <Text style={{fontFamily:'typeBaidu',color:'black',fontSize:15,marginTop:10}}>{mus[mIndex]?.singer}</Text>
                                <View style={{flexDirection:'row',flex:1,marginTop:40}}>
                                    <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
                                        <Image source={require('./img/Music.png')} style={{height:36,width:50}}/>
                                        <Text style={{fontFamily:'typeBaidu',color:'black',fontSize:15,marginTop:23}}>小象音乐</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',}}>
                                        <Image source={require('./img/mycode.png')} style={{height:50,width:50,marginTop:5,marginRight:5}}/>
                                    </View>
                                </View>
                            </View>  
                        </TouchableHighlight>
                        
                    </Modal>
                    
                    
                    
                    {/* 音乐播放 */}
                    <Video onEnd={this._end} ref={ref=>this.player=ref} paused={this.state.paused} onLoad={this._load} onProgress={this._progress} source={{uri:musicUrl+mus[mIndex]?.name+".mp3"}}/>
                    {/* <Text>{name}</Text>
                    <Text>{singer}</Text>
                    <Text>{inx}</Text> */}
                </View>
            </ImageBackground>
            </Provider>
            
        )
    }
}
