import React, { Component } from 'react'
import Card from '../Card';

const db=[
    {id: 1, name: 'John', surname: 'Smith'},
    {id: 2, name: 'Tom', surname: 'Fox'},
    {id: 3, name: 'Nord', surname: 'Surname'}
];

export default class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
        users: db.map( u => ({...u, isSelected: false}))
    }
  }
  makeList = (u, index) => {
    const {id} = u;
    const select = () => {
        const {users} = this.state;
        const newUsers = [...users];
        newUsers[index] = {
            ...newUsers[index],
            isSelected: !newUsers[index].isSelected,
        };
        this.setState({users: newUsers});
    };
    return <Card key={id} user={u} select={select}/>;
  }
  render() {
    const {users} = this.state;
    return (
        <ul>{users.map(this.makeList)}</ul>
    );
  }
}
