import React, { Component } from 'react';
import GalleryItem from './GalleryItem.js'

class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                                display:'flex',
                                justifyContent:'center',
                                flexDirection:'row',
                                maxWidth:'1050px',
                                padding:'20px',
                                flexWrap:'wrap',
                                }}>
              {this.props.items.map((item, i) => (
                <GalleryItem key={i} {...item} theme={this.props.theme}/>
              ))}
            </div>
        );
    }
}

export default Gallery;
