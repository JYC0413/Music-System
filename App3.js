import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput, Image } from 'react-native'
import fs from 'react-native-fs'

export default class App3 extends Component {
    state={files:[],fileName:'20181205063',source:{}}
    _createFile=()=>{
        //packagename/files/:fs.DocumentDirectoryPath
        // /sdcard/Download/: fs.DownloadDirectoryPath
        let path=fs.DocumentDirectoryPath+"/test1.txt"
        fs.writeFile(path,"一次学习，处处采坑!","utf8")
        .then(()=>console.log("文件创建成功:"+path))
        .catch(err=>console.log(err))
        //EventLoop
    }
    _readFile=()=>{
        let path=fs.DocumentDirectoryPath+"/test1.txt"
        fs.readFile(path,'utf8')
        .then(content=>console.log(content))
    }
    _deleteFlie=()=>{
        let path=fs.DocumentDirectoryPath+"/test1.txt"
        fs.unlink(path)
        .then(()=>console.log("删除文件成功"))
    }
    _readDir=()=>{
        let path=fs.DocumentDirectoryPath
        fs.readDir(path)
        .then(files=>{
            let temp=files.map(file=>file.path.split('/').slice(-1)[0])
            this.setState({files:temp})
        })
    }
    _downloadFile=()=>{
        let path=fs.DocumentDirectoryPath
        fs.downloadFile({
            fromUrl:'http://johnyu.cn/s181/'+this.state.fileName+'.jpg',toFile:path+'/'+this.state.fileName
        }).promise.then(result=>{
            let source={uri:'file://'+path+'/'+this.state.fileName}
            this.setState({source})
        })
    }
    _upLoadFile=()=>{
        let path="file://"+fs.DocumentDirectoryPath+"/20181205072.jpg"
        let formData=new FormData()
        let options={type:"multipart/form-data"/*封装类型 */,name:"20181205072.jpg",uri:path}
        formData.append("file",options)//file是接受的域名
        fetch("http://johnyu.cn:7006/upload"/*服务器上传地址 */,{method:"POST",header:{"Content-Type":"multipart/form-data"},body:formData})
        .then(resp=>resp.text())
        .then(rs=>console.log(rs))
    }
    _fileNameChange=fileName=>this.setState({fileName})
    _renderFile=({item:file})=><View>
        <Text>{file}</Text>
    </View>
    render() {
        let index=0
        return (
            <View>
                <Button title="创建文件" onPress={this._createFile}/>
                <Button title="读文件内容" onPress={this._readFile}/>
                <Button title="删除文件" onPress={this._deleteFlie}/>
                <Button title="读出所有文件" onPress={this._readDir}/>
                <TextInput value={this.state.fileName} onChangeText={this._fileNameChange} keyboardType="numeric"/>
                <Button title="下载文件" onPress={this._downloadFile}/>
                <Button title="上传文件" onPress={this._upLoadFile}/>
                <FlatList data={this.state.files} renderItem={this._renderFile} keyExtractor={()=>++index}/>
                <Image source={this.state.source} style={{height:300,width:200}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
