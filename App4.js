import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'
let Stack=createStackNavigator
class Login extends Component{
    
    _recieve=msg=>{
        let user=JSON.stringify(msg.nativeEvent.data)
        this.props.navigation.navigate('Suc',{user})
    }
    render(){
        return <View>
            <WebView onMessage={this._recieve} source={{uri:'http://192.168.31.165:3000/login.html'}}/>
        </View>
    }
}
class Suc extends Component(){
    state={user:[]}
    componentDidMount(){
        let user=this.props.route.params.user
        this.setState({user})
    }
    _script=()=>'alart(100)'
    rander(){
        let rs=JSON.stringify(this.state.user)
        let script=`show('${rs}')`
        return <View style={{flex:1}}>
        <WebView injectedJavaScript={script} source={{uri:'http://192.168.31.165:3000/Suc.html'}}/>
    </View>
    }
}
export default class App4 extends Component {
    render() {
        return (
            
            <NavigationContainer>
                <Stack.Nacigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Suc" component={Suc}/>
                </Stack.Nacigator>
            </NavigationContainer>
        )
    }
}
