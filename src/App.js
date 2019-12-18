import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition } from "react-transition-group";
import ThemeSelector from './ThemeSelector.js';
import SideMenu from './SideMenu.js';
import MoicImage from './images/moic-photo.png';
import Gallery from './Gallery.js';
import MenuItem from './MenuItem.js';
import { HamburgerArrow } from 'react-animated-burgers';
// import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './App.css';
import './SmoothColor.css';


const THEMES = [
  {name: 'maroon', displayColor: '#9A1750'},
  {name: 'light', displayColor: '#EBE8E0'},
  {name: 'dark', displayColor: '#5F677D'},
  {name:'white', displayColor:'white'},
  {name: 'ginger', displayColor:'#ffce00'}
];

const MENU_ITEMS = [
  {name:'Home', link:null},
  {name:'LinkedIn', link:'https://www.linkedin.com/in/maxshashoua/'},
  {name:'GitHub', link:'https://github.com/emsha'},
]

const GALLERY_ITEMS = [
  {title:'Museum of Ice Cream React Copy',
    link: 'https://emsha.github.io/moic/?',
    photo:MoicImage,
    desc: "Implemented the Museum of Ice Cream's website in React.js. This was mostly an exercise in React and responsive website implementation."},
  {title:'Othello Farm',
    link:'https://github.com/emsha/othello-farm',
    photo:MoicImage,
    desc: "Implemented a convolutional neural network data structure with Python3 and PyTorch integrating topics from NeuroEvolution of Augmenting Topologies (NEAT) with convolutional neural networks (CNN's)"},
  {title:'Fun Factory',
    link:'https://github.com/connorlevesque/FunFactory',
    photo:MoicImage,
    desc: "Co-designed and co-developed level-based puzzle game for mobile using Unity (C#). I wrote and improved efficient and successful rotation check algorithms, implemented Rotators, Painters, Spinners and DropZones, designed sprites, and created levels. Our Final product: 10 playable levels, a framework for us to create new levels, and a list of everything left to do to ready the game for release."},
  {title:'BumbleBot',
    link:'https://github.com/emsha/bumble_bot',
    photo:MoicImage,
    desc: "Designed and implemented an automated API-less bumble robot using resnet, facial detection, and browser automation (pytorch, opencv, selenium). Mostly a proof of concept project."},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme:'dark',
      layout: '',
      page: 'home',
      showBurgerMenu:false
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.showBurgerMenu = this.showBurgerMenu.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    let w = typeof window !== "undefined" ? window.innerWidth : 0;
    let h = typeof window !== "undefined" ? window.innerHeight : 0;
    this.setState({ windowWidth:w, windowHeight:h });

    if (w>1024) {
      this.setState({ layout: "large" });
      this.setState({ showBurgerMenu:false});
    }
    if (640<w && w<=1024) {
      this.setState({ layout: "medium" });
    }
    if (w <= 640) {
      this.setState({ layout: "small" });
      console.log(this.state.layout)
    }
  }

  setTheme(theme) {
    // if (!THEMES.includes(theme)) console.log(`${theme} isn't a valid theme. Valid themes: ${THEMES}`);
    this.setState({ theme: theme });
  }

  showBurgerMenu(){
    this.setState({ showBurgerMenu:true });
  }
  closeBurgerMenu() {
    this.setState({ showBurgerMenu:false });
  }
  toggleBurgerMenu() {
    this.setState( { showBurgerMenu:!this.state.showBurgerMenu});
  }

  render() {
    return (
      <div className='SiteWrapper'>

        {this.state.layout!=='large' ? <CSSTransition
            in={this.state.showBurgerMenu}
            timeout={500}
            classNames="burger-transition"
            unmountOnExit
          >
          <SideMenu closeMenuFn = {this.closeBurgerMenu} className={`Menu`} theme={this.state.theme} items={MENU_ITEMS}/>
        </CSSTransition> : null}

        <div className={`AppWrapper theme-${this.state.theme}-a AppWrapper-${this.state.layout}`}>
          <div className={`header theme-${this.state.theme}-b`} style={{paddingRight:'10px'}}>
            {this.state.layout !=='large' ? <HamburgerArrow className="SmoothColor" isActive={this.state.showBurgerMenu} toggleButton={this.toggleBurgerMenu} buttonColor="#FFBC67" barColor="white" />

                                          :
                                          <div style={{display:'flex', flexDirection:'row'}}>
                                          {MENU_ITEMS.map((item, i) => (
                                            <div style={{padding:'10px'}}><MenuItem closeMenuFn={this.closeBurgerMenu} highlightColor='#E5002Daa' {...item}/></div>))}
                                          </div>
                                        }
            <ThemeSelector setThemeFn={this.setTheme} theme={this.state.theme} themes={THEMES} layout={this.state.layout}/>
          </div>
          <div className={`header theme-${this.state.theme}-b`} style={{justifyContent:'center'}}>
            <h1>Max Shashoua</h1>
          </div>
          <div className={`header theme-${this.state.theme}-b`} style={{display:'flex', justifyContent:'center'}}>
            <div style={{padding: '5px', textAlign:'center', maxWidth:'500px'}}><h3>My name is Max. I am a Software Engineer and this is a portfolio website containing links to various projects.</h3></div>
          </div>
          <div className='body'>
            <Gallery items={GALLERY_ITEMS} theme={this.state.theme} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
