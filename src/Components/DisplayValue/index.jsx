import React, { Component } from 'react'

export default class DisplayValue extends Component {
  constructor(props) {
    super(props);  
    console.group('Child constructor');
    console.log('props', this.props);
    console.groupEnd();
  }
  componentDidMount(){
    console.group('Child componentDidMount');
    console.log('props', this.props);
    console.groupEnd();
  }
  componentDidUpdate(prevProps, prevState){
    console.group('Child componentDidUpdate');
    console.log('props prev', prevProps);
    console.log('prop new', this.props);
    console.log('state prev', prevState);
    console.log('state new', this.state);
    console.groupEnd();
  }
  componentWillUnmount(){}
  render(){
    console.group('Child render');
    console.log('props', this.props);
    console.groupEnd();
    return(
    <>
      <h1>Child component: {this.props.x}</h1>
    </>
  );
    }
}
