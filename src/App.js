import React, { Component } from 'react'
import Calendar from './Components/Calendar';
import Card from './Components/Card';

const testUser = {
  id: 1,
  name: 'John',
  surname: 'Smith'
};
export default class App extends Component {
  render() {
    return (
      <>
         <Card user = {testUser} />
      </>
    )
  }
}
