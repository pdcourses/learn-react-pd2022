import React, { Component } from 'react'
import Card from '../Card';
export default class UserList extends Component {
  makeList = (u, index) => {
    const {id} = u;
    const select = () => {
        const {users , setUsers} = this.props;
        const newUsers = [...users];
        newUsers[index] = {
            ...newUsers[index],
            isSelected: !newUsers[index].isSelected,
        };
        setUsers(newUsers);
    };
    return <Card key={id} user={u} select={select}/>;
  }
  render() {
    const {users} = this.props;
    return (
        <ul>{users.map(this.makeList)}</ul>
    );
  }
}
