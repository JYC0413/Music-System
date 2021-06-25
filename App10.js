import { Provider,Button,Modal,List,Checkbox } from '@ant-design/react-native'
import React, { Component } from 'react'
import _ from 'loadsh'
import { Text, View, ScrollView } from 'react-native'


let url="http://johnyu.cn:3001/questions/"
export default class App10 extends Component {
    //myAnswers:[id:1,answer:[false,true,false,true..]],结构与rightAnswers完全相同
    state={questions:[],myAnswers:[],rightAnswers:[],score:0,errors:[],visible:true}
    componentDidMount(){
        fetch(url)
        .then(resp=>resp.json())
        .then(questions=>{
            let rightAnswers=questions.map(q=>({id:q.id,answer:q.candidates.map(cad=>cad.checked)}));
            let myAnswers=questions.map(q=>({id:q.id,answer:q.candidates.map(()=>false)}));
            this.setState({questions,myAnswers,rightAnswers})
        })
    }
    //记录⽤户的选择
    _change=(event,qindex,cindex)=>{
        let myAnswers=this.state.myAnswers
        myAnswers[qindex].answer[cindex]=event.target.checked
        this.setState({myAnswers})
    }
    _judge=()=>{
        let score=0,errors=[]
        this.state.myAnswers.forEach((answer,index)=>{
            if(_.isEqual(answer.answer,this.state.rightAnswers[index].answer)){
                score+=10
            }else{
                errors.push(answer.id)
            }
        })
        this.setState({score,visible:true,errors})
    }
    render() {
        return (
            <Provider>
                <Modal popup visible={this.state.visible}>
                    <View style={{height:300}}>
                        <Text style={{fontSize:30}}>您本次的得分是：{this.state.score}</Text>
                        <Button type="warning" onPress={()=>this.setState({visible:false})}>关闭</Button>
                    </View>
                </Modal>
                <ScrollView>
                    <List renderHeader={<Text>测试卷</Text>} renderFooter={<Button type="primary" onPress={this._judge}>提交</Button>}>
                        {qs.map((q,qindex)=><List ksy={qinx}>
                            <List.Item>
                                <Text style={{color:this.state.errors.includes(q.id)?"red":"black"}}>{q.body}</Text>
                            </List.Item>
                            {q.candidates.map((cad,cindex)=><Checkbox.CheckboxItem key={qindex+"-"+cindex} onChange={event=>this._change(event,qindex,cindex)} checked={as[qindex].answer[cindex]}>
                                {cad.content}
                            </Checkbox.CheckboxItem>)}
                        </List>)}
                    </List>
                </ScrollView>
            </Provider>
        )
    }
}
