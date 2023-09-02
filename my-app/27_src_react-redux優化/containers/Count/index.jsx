import React, { Component } from 'react'
// 引入connect: 用於連接UI組件與redux
import {connect} from 'react-redux';
// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action';

// 定義UI組件
class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h1>當前求和為: {count}</h1>
        &nbsp;<select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇數+</button>&nbsp;
        <button onClick={this.incrementAsync}>異步+</button>&nbsp;
      </div>
    )
  }
}

// 定義容器組件
export default connect(
  // 映射狀態
  state => ({count:state}),
  // 映射操作狀態的方法
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction,
  }
)(Count)