import React, { Component } from 'react';
import './SmoothColor.css';

const getStyle = (hover, color) => ({
  backgroundColor:hover ? '#E5002Daa' : 'transparent',
  cursor: 'pointer'
});

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { hover: false };
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    hoverOn() {
      this.setState( { hover:true });
    }
    hoverOff(){
      this.setState( { hover:false });
    }

    handleClick(link) {
      console.log(link);
      if (link) {
        window.location.href = link;
      }
      else this.props.closeMenuFn();
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(null, this.props.link)} className='SmoothColor' onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} style={getStyle(this.state.hover, this.props.highlightColor)}>
              <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default MenuItem;
