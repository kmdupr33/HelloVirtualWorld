import React, {Component} from 'react'

export default class Switcher extends Component {

  constructor(props) {
    super(props)
    this.state = {route: props.initialRoute}
  }

  switchRoute(route) {
    console.log('changing world');
    this.setState({route})
  }

  render() {
    return this.props.worldForRoute(this.state.route, this)
  }

}
