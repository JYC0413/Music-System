import React, { Component } from 'react'
import { Text, View, Button as Btn } from 'react-native'
import { Button, SwipeAction, WhiteSpace, WingBlank } from '@ant-design/react-native'

export default class App6 extends Component {
    render() {
        const right=[{text:'你好',style:{backgroundColor:'red'},onPress:()=>{alert("Hello")}},{text:'world',style:{backgroundColor:'green'},onPress:()=>{alert("Hello world")}}]
        const left=[{text:'更新',style:{backgroundColor:'blue'}}]
        return (
            <View>
                <Btn title="核心按钮"/>
                <WingBlank>
                    <Button disabled={true} loading={true} size="large" style={{width:80}} type="primary">Hello</Button>
                    <WhiteSpace/>
                    <Button disabled={false} loading={false} size="large" style={{width:80}} type="primary">Hello</Button>
                </WingBlank>
                <SwipeAction autoClose={true} left={left} right={/*配置对象(菜单)*/right}>
                    <Text style={{fontSize:30}}>这是爷的项目</Text>
                </SwipeAction>
                
            </View>
        )
    }
}
