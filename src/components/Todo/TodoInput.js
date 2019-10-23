import React, {Component} from 'react'
import { Input, Col } from 'antd';
import 'antd/dist/antd.css';

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    return (
      <div className="todo-input" >
        <Col span={20}>
        <Input placeholder="Input Todo List" type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        </Col>
          <button type="primary" onClick={this.dispatch}>add</button>
      </div>
    )
  }
}
