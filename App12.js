import React, { Component } from 'react'
import { Button, Text, View, Animated } from 'react-native'
import Video from 'react-native-video'
import Slider from '@react-native-community/slider'
import { linear } from 'react-native/Libraries/Animated/Easing'

const dataUrl="http://johnyu.cn:3000/albums"
const musicUrl="http://johnyu.cn/mp3/"

export default class App12 extends Component {
    rv=0
    state={musics:[],mIndex:0,paused:true,duration:0,currentTime:0,rotate:new Animated.Value(0)}
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
    render() {
        let {musics:mus,mIndex:inx}=this.state
        let style={transform:[{rotate:this.state.rotate.interpolate({inputRange:[0,360],outputRange:['0deg','360deg']})}]}
        return (
            <View>
                <Video onEnd={this._end} ref={ref=>this.player=ref} paused={this.state.paused} onLoad={this._load} onProgress={this._progress} source={{uri:musicUrl+mus[inx]?.name+".mp3"}}/>
                <Text style={{fontSize:38,textAlign:'center'}}>{mus[inx]?.name}</Text>
                <Text style={{textAlign:'center'}}>{mus[inx]?.singer}</Text>
                <Animated.Image style={[style,{width:260,height:260,borderRadius:130,alignSelf:'center'}]} source={{uri:mus[inx]?.img}}/>
                <Slider value={this.state.currentTime} onSlidingComplete={this._seek} maximumValue={this.state.duration} style={{height:100}}/>
                <Button title={this.state.paused?"播放":"暂停"} onPress={this._playOrPause}/>
            </View>
        )
    }
}
