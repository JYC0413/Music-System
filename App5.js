import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import fs from 'react-native-fs'
import { launchCamera,launchImageLibrary } from 'react-native-image-picker'

export default class App5 extends Component {
    state={uri:'',files:[],current:''}
    componentDidMount(){
        // //读文件夹
        // let files=[]
        // for(let i=0;i<10;i++){
        //     files.push(Math.random()+"")
        // }
        // this.setState({files})
        //读文件夹
        fs.readDir(fs.DocumentDirectoryPath)
        .then(items=>{
            let files=items.map(item=>item.path)
            // .filter(path=>path.endsWith('.jpg'))
            this.setState({files})
        })
    }
    _del=file=>{
        fs.unlink(file)
        .then(()=>{
            let files=this.state.files
            let index=files.indexOf(file)
            files.splice(index,1)
            if(file===this.state.current){
                this.setState({files,current:null,uri:null})
            }else{
                this.setState({files})
            }
        })
    }
    _View=file=>{
        this.setState({uri:'file://'+file,current:file})
    }
    //渲染文件
    _renderFile=({item:file})=><View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <Text style={{fontSize:20,lineHeight:38}}>
                {file.split('/').slice(-1)[0]}
            </Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                
                <Button title="DEL" onPress={()=>this._del(file)}/>
                <Button title="VIEW" onPress={()=>this._View(file)}/>
            </View>
    </View>
    __copyFile=resp=>{
        let source=fs.CachesDirectoryPath+"/"+resp.fileName
        let target=fs.DocumentDirectoryPath+"/"+resp.fileName.split('-').slice(-1)[0]
        fs.copyFile(source,target)
        .then(()=>{
            let files=this.state.files
            files.push(target)
            this.setState({files})
        })
    }
    _photo=()=>{
        launchCamera({}/*可选的配置对象*/,/*参数(回调+)*/resp=>{
            this.__copyFile(resp)
        })
    }
    _imageLib=()=>{
        launchImageLibrary({},resp=>{
            //this.setState({uri:resp.uri})
            this.__copyFile(resp)
        })
    }
    _sep=()=><View style={{height:1,backgroundColor:'black'}}/>
    render() {
        return (
            <View>
                <Button title="从相机选择" onPress={this._photo}/>
                <Button title="从图库选择" onPress={this._imageLib}/>
                <FlatList ItemSeparatorComponent={this._sep} data={this.state.files} renderItem={this._renderFile} keyExtractor={file=>file}/>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:this.state.uri}} style={{width:200,height:300}}/>
                </View>
                
            </View>
        )
    }
} 