import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import WebView from 'react-native-webview'
// let index=0
// 
// let script=`document.body.style.backgroundColor='${colors[index]}'`
export default class MyApp4 extends Component {
    state={user:[]}
    _refresh=()=>{
        this.wv.reload()
    }
    _recieve=msg=>{
        let us=msg.nativeEvent.data
        let user=JSON.parse(us)
        this.setState({user})
    }
    render() {
        let colors=['blue','red','green']
        let index=Math.floor(Math.random()*4)
        let script=`changeColor('${colors[index]}')`
        return (
            <View style={{flex:1}}>
                <Button title="刷新背景" onPress={this._refresh}/>
                <Text style={{fontSize:20}}>{this.state.user.name}</Text>
                <WebView onMessage={this._recieve} ref={ref=>this.wv=ref} injectedJavaScript={script} source={{uri:"http://192.168.31.165:3000"}}/>
            </View>
        )
    }
}
