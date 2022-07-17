import React from 'react'
import UsersPage from './Components/UsersPage'

export default function App() {
  return (
    <>
     <UsersPage />
    </>
  )
}



/*
export default class App extends Component {
  constructor(props) {
    super(props);  
    this.state = {
       name: 'Tom',
       surname: 'Fox',
       age: 20,
       isSelected: false,
    };
  }
  selectHandler = () => {
    this.setState({isSelected: 
      !this.state.isSelected});
  }
  render() {
    const {name, surname, age, isSelected} 
    = this.state;
    return(
      <>
      <Counter step={1} />
      <User 
        name={name}
        surname={surname}
        age={age}
        isSelected={isSelected}
        selectHandler = {this.selectHandler}
      />
      </>
    );    
}
}

*/