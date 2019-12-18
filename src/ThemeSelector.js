import React, { Component } from 'react';
import './SmoothColor.css';

const getWrapperStyle = (layout, theme, themes) => ({
  display:'flex',
  flexDirection:'row',
});

  const getCircleStyle = (color, selected, hover_i, i) => ({
    height:'25px',
    width: '25px',
    backgroundColor: `${color}`,
    display: 'inline-block',
    margin:'3px',
    borderRadius: '50%',
    border: selected ? '1px solid red' : 'none',
    opacity: selected||hover_i===i ? '1' : '.7',
  });

class ThemeSelector extends Component { //layout, theme, themes, setThemeFn
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.state={ hoverIdx : null };
    }

    handleClick(name) {
      this.props.setThemeFn(name);
    }

    hoverOn(index) {
      // console.log(this.state.hoverIdx);
      this.setState( { hoverIdx: index });
      // console.log(this.state.hoverIdx);
    }

    hoverOff(index) {
      // console.log(this.state.hoverIdx);
      this.setState( { hoverIdx: null } );
      // console.log(this.state.hoverIdx);
    }


    render() {
        return (
            <div style={getWrapperStyle(this.props.layout, this.props.theme, this.props.themes)}>
              {this.props.themes.map(
                (theme, i) => (
                  <span className="SmoothColor-fast" key={i}
                    style={getCircleStyle(theme.displayColor, theme.name===this.props.theme, this.state.hoverIdx, i)}
                    onClick={this.handleClick.bind(null, theme.name)}
                    onMouseEnter={this.hoverOn.bind(null, i)}
                    onMouseLeave={this.hoverOff.bind(null, i)}
                    colortag={theme.name}>
                  </span>
                )
              )}
            </div>
        );
    }
}

export default ThemeSelector;
