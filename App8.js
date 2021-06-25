import React, { Component, useState, useEffect } from 'react'
import { Button, Text, View } from 'react-native'

export default function App(){
    //代码更简单，性能优化更方便
    useEffect(()=>{console.log('effect')})
    function _change() {
        let user1=Object.assign({},user)
        user1.name="lsm"
        user1.favs.push('c')
        setUser(user1)
    }
    const [user, setUser] = useState({name:'MRC',age:21,favs:['a','b']})
    const [title, setTitle] = useState("OK")
    useEffect(()=>{
        console.log('effect...');
        return ()=>{console.log('undefined')}
    })
    return <View>
        <Text style={{fontSize:30}}>Hello {user.name},{user.favs.join(',')}</Text>
        <Button title="change" onPress={_change}/>
    </View>
}

// export default class App8 extends Component {
//     state={user:{name:'MRC',favs:[1,2]}}
//     _change=()=>{
//         let user=this.state.user
//         user.name='lsm'
//         user.favs.push(3)
//         // let user1={...this.state.user}
//         this.setState({user})
//     }
//     render() {
//         return (
//             <View>
//                 <Text style={{fontSize:30}}>{this.state.user.name}{this.state.user.favs.join(',')}</Text>
//                 <Button title="change" onPress={this._change}/>
//             </View>
//         )
//     }
// }
