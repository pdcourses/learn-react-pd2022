import React, { Component } from 'react';
import UserList from '../UserList';
import SelectedUsers from '../SelectedUsers';
const db=[
    {id: 1, name: 'John', surname: 'Smith'},
    {id: 2, name: 'Tom', surname: 'Fox'},
    {id: 3, name: 'Nord', surname: 'Surname'}
];
export default class UsersPage extends  Component{
    constructor(props){
        super(props);
        this.state = {
            users: db.map( u => ({...u, isSelected: false}))
        }
    }
    // функция для обновления состояния  для детей
    setUsers = (data) => {
        this.setState({users: data})
    }
  render(){
  return (
    <>
        <UserList users={this.state.users} setUsers={this.setUsers}/> 
        <SelectedUsers users={this.state.users} setUsers={this.setUsers}/>
    </>
  )
}
}