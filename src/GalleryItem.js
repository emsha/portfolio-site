import React, { Component } from 'react';
import './SmoothColor.css';

const borderColor = {
  light:'black',
  dark:'#E0E8EB',
  white:'black',
  ginger:'#ffb400',
  maroon:'#5D001E',
};


const textColor = {
  light:'black',
  dark:'#E0E8EB',
  white:'black',
  ginger:'black',
  maroon:'#9A1750',
};

const galleryWrapperStyle=(theme, hover) => ({
  maxWidth:'500px',
  border: `solid ${borderColor[theme]} 3px`,
  borderRadius: '6px',
  margin: '5px',
  padding: '5px',
  textDecoration:'none',
  color: `${textColor[theme]}`,
  opacity: hover ? '1':'.7',
});



class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {hover:false};
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    hoverOn(){ this.setState( { hover:true } )}
    hoverOff(){this.setState( { hover:false } )}

    render() {
        return (
          <a style={{textDecoration:'none', textColor:'black'}} href={this.props.link}>

            <div onMouseEnter={this.hoverOn}
                  onMouseLeave={this.hoverOff}
                  className="SmoothColor-fast"
                  style={galleryWrapperStyle(this.props.theme, this.state.hover)}>
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
            </div>
            </a>

        );
    }
}

export default GalleryItem;
