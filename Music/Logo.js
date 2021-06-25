import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class Logo extends Component {
    render() {
        const {size}=this.props
        let name=this.props
        return (
            <View>
                {
                    name=="Home"?
                    // <Image source={require("./img/home.png")} style={{width:size,height:size}}/>
                    <Text>console.log(name)</Text>
                    :
                    name=="Music"?
                    <Image source={require("./img/musicplay.png")} style={{width:size,height:size}}/>
                    :
                    name=="LikeMusic"?
                    <Image source={require("./img/like.png")} style={{width:size,height:size}}/>
                    :
                    // <Image source={require("./img/team.png")} style={{width:size,height:size}}/>
                    <Text>team</Text>
                }
            </View>
        )
    }
}
