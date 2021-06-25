import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'


export default class MusicShow extends Component {
    _Jump=()=>{
        this.props.navigation.navigate("Music",{inx:this.props.music.id,visible:this.props.visible})
        console.log(this.props.music.id)
    }
    render() {
        return (
            <View >
                <View>
                    <TouchableHighlight onPress={this._Jump}  underlayColor={'rgba(0,0,0,0)'}>
                        <View style={{flexDirection:'row',height:77}}>
                            <View>
                                <Image source={{uri:this.props.music.Post}} style={{width:67,height:67,borderRadius:15}}/>
                            </View>
                            <View style={{padding:2,width:'80%',height:70,justifyContent:'center',marginLeft:10}}>
                                <Text style={{fontSize:18,fontFamily:'typeBaidu'}}>{this.props.music.Name}</Text>
                                <Text>{this.props.music.Singer}</Text>
                            </View>
                        </View>
                        
                    </TouchableHighlight>
                    
                </View>
            </View>
        )
    }
}
  