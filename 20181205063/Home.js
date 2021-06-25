import React, { Component } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import StuShow from './StuShow'
let url="http://82.156.12.58:3000/mrc"
var navigation = null
export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             stus:[]
        }
    }
    
    componentDidMount(){
        this.props.navigation.addListener('focus',()=>{
            fetch(url)
            .then(resp=>resp.json())
            .then(stus=>this.setState({stus}))
        })
        fetch(url)
        .then(resp=>resp.json())
        .then(stus=>this.setState({stus}))
    }
    _renderStu=({item})=>{
        return (
            <StuShow stu={item} navigation={this.props.navigation} style={{flex:1}}/>
            
        )
        
    }
    _add=()=>{
        this.props.navigation.navigate("StuAddor",{navigation})
    }
    _sep=()=><View style={{height:3,backgroundColor:'black'}}></View>
    render() {
        return (
            <View>
                {/* <Button title="添加" onPress={this._add}/> */}
                <FlatList ItemSeparatorComponent={this._sep} data={this.state.stus} renderItem={this._renderStu} keyExtractor={stu=>stu.id}/>
            </View>
        )
    }
}
