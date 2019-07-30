import React from 'react';
import Flickity from 'react-flickity-component';
import "./css/carousel.css";
 
function Carousel(props) {

  let initialItem = props.initialItem;

  if (initialItem == null) {
    initialItem = 0;
  }

  const flickityOptions = {
    lazyLoad: 1,
    initialIndex: initialItem,
  }

  const cars = props.items;

  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {cars.content.map(function(itemm) {
          return(
            <div className="carousel-cell">
                <img className="carousel-cell-image"
                data-flickity-lazyload={`${itemm.image}`} alt=" " />
            </div>
          )
      })}
    </Flickity>
  )
}

export default Carousel;