import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    users: 'abc'
    // users:[
    //   {id: '001', name: 'tom', age: 18},
    //   {id: '002', name: 'jerry', age: 19},
    //   {id: '003', name: 'tony', age: 20},
    // ]
  }
  render() {
    return (
      <div>
        <h2>我是Child組件</h2>
        {
          this.state.users.map((userObj)=>{
            return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
          })
        }
      </div>
    )
  }
}
