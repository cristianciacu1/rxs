import React from 'react';
import { Container} from 'react-bootstrap';
import './grid.css';
import '../App.css';
import LeftPortfolio from './portfolioComponents/leftPortfolio';
import RightPortfolio from './portfolioComponents/rightPortfolio';

import TitleSection from './lilComponents/titleCenterOfSection';

export default function Portfolio(props) {

    function getWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    }

    const infos = props.infos;

    if (getWidth()>770) {

      //console.log(infos[0].content[0].index);

      //it works :)

      return(
          <div className="root aBlack font2">
              <Container>
                <TitleSection title='Portofoliu' />
              {infos.map(function(itemm) {
                if(itemm.id % 2 === 0) { ///Left
                  return(
                    <LeftPortfolio image={itemm.image} categoryName={itemm.categoryName} categoryDesc={itemm.categoryDesc} categoryLink={itemm.categoryLink} items={infos}/>
                  )
                }
                else { ///Right
                  return(
                    <RightPortfolio image={itemm.image} categoryName={itemm.categoryName} categoryDesc={itemm.categoryDesc} categoryLink={itemm.categoryLink} items={infos}/>
                  )
                }
              })}
              </Container>
          </div>
      )
  }
  else{
    return(
      <div className="root aBlack font2">
        <Container>
          <TitleSection title="Portofoliu" />
          {infos.map(function(itemm) {
            return(
              <LeftPortfolio image={itemm.image} categoryName={itemm.categoryName} categoryDesc={itemm.categoryDesc} categoryLink={itemm.categoryLink}/>
            )
          })}
        </Container>
      </div>
    )
  }
}