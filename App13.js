import React from 'react';
import { Alert, View } from 'react-native';
import { SearchBar } from '@ant-design/react-native';
export default class SearchBarDemo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
    };
    this.onChange = value => {
      this.setState({ value });
    };
    this.clear = () => {
      this.setState({ value: '' });
    };
  }
  render() {
    return (
      <View style={{width:170}}>
        <SearchBar value={this.state.value} placeholder="搜索" onSubmit={value => Alert.alert('搜索功能敬请期待')} onCancel={this.clear} onChange={this.onChange} showCancelButton/>
      </View>
    );
  }
}