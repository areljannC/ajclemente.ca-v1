import React, { Component } from 'react';
import posed from 'react-pose';

const Icon = posed.div({
  up:   { y: -3 },
  down: { y: 1  },
  transition: {
    default: { ease: 'easeIn' }
  }
});

export default class PoseArrowDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "up"
    };
  }

  componentDidMount() {
    this.position = setInterval(
      () => this.changePosition(), 500
    );
  }

  changePosition() {
    let position = this.state.position;
    (position === "up") ? (
      this.setState({
        position: "down"
      })
    ) : (
      this.setState({
        position: "up"
      })
    );
  }

  render() {
    return(
      <Icon pose={this.state.position} >
        <span className={`icon ${this.props.size} c-text-red`}>
          <i className={`fas fa-${this.props.icon}`}></i>
        </span>
      </Icon>
    );
  }
}