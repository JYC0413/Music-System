import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { List,Button, Checkbox, Radio, Provider, Modal} from '@ant-design/react-native'

export default class App9 extends Component {
    state={flag:true,visible:false}
    _change=event=>this.setState({flag:event.target.checked})
    render() {
        return (
            <Provider>
                <Modal popup animationType="slide-up" visible={this.state.visible}>
                    <View style={{height:600}}>
                        <Text>this is Modal</Text>
                        <Button onPress={()=>this.setState({visible:false})}>close</Button>
                    </View>
                </Modal>
            <View>
                <Button onPress={()=>this.setState({visible:true})}>显示</Button>
                <List>
                    <List.Item arrow='horizontal'>{this.state.flag?"OK":"not OK"}</List.Item>
                    <List.Item extra={<Button type="primary">open</Button>} arrow="down">项目二</List.Item>
                    <Checkbox.CheckboxItem checked value={this.state.flag} onChange={this._change}>问题1</Checkbox.CheckboxItem>
                    <Radio.RadioItem checked>男</Radio.RadioItem>
                </List>
            </View>
            </Provider>
        )
    }
}
