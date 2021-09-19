import React, { Component } from "react";
import PropTypes from 'prop-types'

import "./App.css";


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      opacity: 1.0
    };
  }
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  test(e){
    console.log(e)
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
        <ul>
          {this.props.list.map(item=>{
            return <li>{item}</li>
          })}
        </ul>
        <div onClick={this.test}>adsf</div>
      </div>
    );
  }
}

Content.proTypes = {
  name2: PropTypes.string,
  list: PropTypes.array
}
Content.defaultProps = {
  name2: 'asdf',
  list:[1,2,3]
}

export default Content;