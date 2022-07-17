import React, { Component } from 'react'

export default class SelectedUsers extends Component {
  render() {
    const {users} = this.props;
    const list = users.filter( u => u.isSelected);
    //{list.map(u => <Card key={id} user={u}/>)}
    return (
      <ol>
        {list.map(u => <li key={u.id}>{u.name} {u.surname}</li>)}
      </ol>
    )
  }
}
