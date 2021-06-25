import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Async from '@react-native-async-storage/async-storage'

export default class App11 extends Component {
    _store=()=>{
        let user={name:'MRC',age:21}
        Async.setItem("user",JSON.stringify(user))
        .then(()=>console.log("储存成功！！！"))
    }
    _read=()=>{
        //异步函数调用：()=>{};.then(()=>{});await
        Async.getItem("user")
        .then(rs=>{
            let user=JSON.parse(rs)
            console.log(user.name,user.age)
        })
        .catch(err=>{
            console.log("数据找不到！！！")
        })//错误处理
    }
    _delete=()=>{
        Async.removeItem("user")
        .then(()=>{
            console.log("删除成功！！！")
        })
    }
    render() {
        return (
            <View>
                <Button title="存数据" onPress={this._store}/>
                <Button title="取数据" onPress={this._read}/>
                <Button title="删除数据" onPress={this._delete}/>
            </View>
        )
    }
}
