import React, { Component } from 'react';
import MenuItem from './MenuItem.js';
import './SmoothColor.css';


const bgColor = {
  light:'#E0f8EB',
  dark:'#E0E8EB',
  white:'#E0E0E0',
  ginger:'#DB7D39',
  maroon:'#9A1750',
};

const textColor = {
  light:'black',
  dark:'black',
  white:'black',
  ginger:'black',
  maroon:'black',
};

const highlightColor = {
  light:'yellow',
  dark:'yellow',
  white:'yellow',
  ginger:'yellow',
  maroon:'yellow',
}


const getStyle = (theme) => ({
  backgroundColor: `${bgColor[theme]}`,
  color: `${textColor[theme]}`,
  padding:'10px',

});

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='SmoothColor' style={getStyle(this.props.theme)}>

                {this.props.items.map(
                  (elt, i) => (
                    <MenuItem closeMenuFn={this.props.closeMenuFn} key={i} highlightColor={highlightColor[this.props.theme]} {...elt}/>
                  )
                )}

            </div>
        );
    }
}

export default SideMenu;
