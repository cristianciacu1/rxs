import React from 'react';
import { Parallax } from 'react-parallax';
import '../App.css';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

import Text from './text';
import MediaQuery from './imageGrid2';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: 'white',
    textAlign: 'center',
    width: 350,
    fontSize: 35,
    fontFamily: 'Courgette',
    lineHeight: 1,
};

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.state = {
          items: [],
          isLoaded: false,
        }
      }
    
      componentDidMount() {
    
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
      }
    
      componentDidMount() {
        fetch('http://localhost:8000/api/posts/')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
          });
      }

      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    render() {

      var { isLoaded, items } = this.state;

        return (
            <div style={styles}>
                <Parallax bgImage={require('../resources/img.jpg')} strength={500}>
                    <div className = "parallaxHeight">
                        <div style={insideStyles}>Salut,<br></br>Eu sunt <b>Cristi!</b>
                            <br></br>
                            <div className="textForTitle">
                                <p className="textForTitle">Incerc sa fiu cel mai bun <b>eu</b> in majoritarea cazurilor</p>
                            </div>
                        </div>
                        <section id="section04" class="demo">
                            <a><span><Link activeClass="active" className="text" to="text" spy={true} smooth={true} duration={500} >Hf</Link></span></a>
                        </section>
                    </div>
                </Parallax>
                <Text />
                <MediaQuery iteme = {this.state.items} />
            </div>
        );
    }
};

export default MyComponent;