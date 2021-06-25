import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, TextInput, Alert, StyleSheet, ImageBackground } from 'react-native'
import { SearchBar, NoticeBar, WhiteSpace  } from '@ant-design/react-native'
import Swiper from 'react-native-swiper'
import TopView from './TopView'

export default class Team extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:''
        }
        this._onChange=value=>{
            this.setState({value});
        }
        this._clear=()=>{
            this.setState({value:''});
        }
    }
    _goBack=()=>this.props.navigation.navigate("Home")
    _Jump=()=>this.props.navigation.navigate("Login")
    render() {
        return (
            <View style={{backgroundColor:'lavender',flex:1}}>
                <TopView/>
                {/* <View style={{justifyContent:'space-between',alignItems:'center',height:'85%',top:50}}>
                    <View style={styles.stuView}>
                        <View>
                            <Image source={{uri:"http://johnyu.cn/s181/20181205063.jpg"}} style={{height:140,width:140,borderRadius:15}}/>
                            <Text style={styles.nameText}>麻睿辰</Text>
                        </View>
                        <View>
                            <Image source={{uri:"http://johnyu.cn/s181/20181205047.jpg"}} style={{height:140,width:140,borderRadius:15}}/>
                            <Text style={styles.nameText}>李世明</Text>
                        </View>
                    </View>
                    <View style={styles.stuView}>
                        <View>
                            <Image source={{uri:"http://johnyu.cn/s181/20181205071.jpg"}} style={{height:140,width:140,borderRadius:15}}/>
                            <Text style={styles.nameText}>鞠一辰</Text>
                        </View>
                        <View>
                            <Image source={{uri:"http://johnyu.cn/s181/20181205072.jpg"}} style={{height:140,width:140,borderRadius:15}}/>
                            <Text style={styles.nameText}>史思佳</Text>
                        </View>
                    </View>
                    <View style={styles.stuView,{height:170}}>
                            <Image source={{uri:"http://johnyu.cn/s181/20181205070.jpg"}} style={{height:140,width:140,borderRadius:15}}/>
                            <Text style={styles.nameText}>李盟</Text>
                            <View style={{width:140}}></View>
                    </View>
                </View> */}
                <ImageBackground source={require('./img/teamBGI02.jpg')} style={{flex:1}}>
                    <Text style={styles.titleText}>制作团队</Text>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:'100%',height:'85%',top:10}}>
                        <Swiper autoplay={true} autoplayTimeout={4} showsButtons dot={<View style={{height:1,width:'4%',backgroundColor:'white',margin:3,opacity:0.5}}/>} activeDot={<View style={{height:2,width:'4%',backgroundColor:'#7056A6',margin:3}}/>}>
                            <View>
                                <View style={{justifyContent:'center',flexDirection:'row',padding:50}}>
                                <Image source={{uri:"http://johnyu.cn/s181/20181205063.jpg"}} style={{width:'65%',height:250,borderRadius:15}}/>
                                </View>
                                <Text style={styles.nameText}>麻睿辰</Text>
                                <Text style={styles.numText}>学号：20181205063</Text>
                                <Text style={styles.numText}>电话：13621076223</Text>
                            </View>
                            <View>
                                <View style={{justifyContent:'center',flexDirection:'row',padding:50}}>
                                <Image source={{uri:"http://johnyu.cn/s181/20181205047.jpg"}} style={{width:'65%',height:250,borderRadius:15}}/>
                                </View>
                                <Text style={styles.nameText}>李世明</Text>
                                <Text style={styles.numText}>学号：20181205047</Text>
                                <Text style={styles.numText}>电话：18500986476</Text>
                            </View>
                            <View>
                                <View style={{justifyContent:'center',flexDirection:'row',padding:50}}>
                                <Image source={{uri:"http://johnyu.cn/s181/20181205071.jpg"}} style={{width:'65%',height:250,borderRadius:15}}/>
                                </View>
                                <Text style={styles.nameText}>鞠一辰</Text>
                                <Text style={styles.numText}>学号：20181205071</Text>
                                <Text style={styles.numText}>电话：18310253301</Text>
                            </View>
                            <View>
                                <View style={{justifyContent:'center',flexDirection:'row',padding:50}}>
                                <Image source={{uri:"http://johnyu.cn/s181/20181205072.jpg"}} style={{width:'65%',height:250,borderRadius:15}}/>
                                </View>
                                <Text style={styles.nameText}>史思佳</Text>
                                <Text style={styles.numText}>学号：20181205072</Text>
                                <Text style={styles.numText}>电话：13641137710</Text>
                            </View>
                            <View>
                                <View style={{justifyContent:'center',flexDirection:'row',padding:50}}>
                                <Image source={{uri:"http://johnyu.cn/s181/20181205070.jpg"}} style={{width:'65%',height:250,borderRadius:15}}/>
                                </View>
                                <Text style={styles.nameText}>李盟</Text>
                                <Text style={styles.numText}>学号：20181205070</Text>
                                <Text style={styles.numText}>电话：13511081532</Text>
                            </View>
                        </Swiper>
                    </View>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    stuView:{width:'100%',height:200,flexDirection:'row',justifyContent:'space-around'},
    nameText:{textAlign:'center',fontFamily:'typeBaidu',fontSize:25,padding:5},
    numText:{textAlign:'center',fontFamily:'typeBaidu',fontSize:15,padding:5},
    titleText:{textAlign:'center',fontFamily:'typeBaidu',fontSize:35,paddingTop:25}
})
