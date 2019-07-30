import React from 'react';
import { Parallax } from 'react-parallax';
import '../App.css';
import { Events, animateScroll as scroll, scroller } from 'react-scroll';

import Text from './text';
import ImagegridList from './imageGrid3';
import Servicii from './services1';

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

        fetch('http://192.168.1.7:8000/api/')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
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

      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    render() {

        return (
            <div style={styles}>
                <Parallax bgImage={require('../resources/img.jpg')} strength={500}>
                    <div className = "parallaxHeight">
                        <div style={insideStyles}>Salut,<br></br>Eu sunt <b>Radu!</b>
                            <br></br>
                            <div className="textForTitle">
                                <p className="textForTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        <section id="section04" className="demo">
                            <a><span></span></a>
                        </section>
                    </div>
                </Parallax>
                <Text />
                <ImagegridList iteme = {this.state.items}/>
                <Servicii />   
            </div>
        );
    }
};

export default MyComponent;