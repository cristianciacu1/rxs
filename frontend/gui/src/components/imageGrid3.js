import React from 'react';
import { MDBContainer} from 'mdbreact';
import './grid.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import lozad from 'lozad';
import Butonel2 from './Butonel2';
import TitleLeftSection from './lilComponents/titleLeftSection';



const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      position: 'relative',
    },

    overlay: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
    },

    card2: {
        height: 350,
    },

    root: {
      flexGrow: 1,
    },

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    button: {
      margin: theme.spacing(1),
      fontSize: 20,
      fontFamily: 'Muli', 
    },

    input: {
      display: 'none',
    },
  }));

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

export default function ImagegridList(props) {

  const classes = useStyles();

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  if (getWidth()>770) {
    return (
      <div className="root contact2" >
        <TitleLeftSection title='Ultimele proiecte' />
      <MDBContainer>
        <div id="padding">
            <Grid container spacing={3}>
                {props.iteme.slice(0,9).map(function(itemm, index) {
                    return(
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className="lozad">
                          <div className="darkImage">
                              <Link to={{
                                pathname:'/portfolio/'+itemm.link,
                                state:{ id:itemm.id }
                              }}
                              >
                              <Card className={classes.card}>
                                  <CardActionArea>
                                      <CardMedia
                                          component="img"
                                          alt="Contemplative Reptile"
                                          height="300"
                                          image={itemm.image}
                                          title={itemm.title}
                                          className= {classes.card2}
                                      />
                                      <div className={`imageGrid2 ${classes.overlay}`}>
                                        <h2>
                                          {itemm.title}
                                        </h2>
                                      </div>
                                  </CardActionArea>
                              </Card>
                              </Link>
                            </div>
                        </Grid>
                    )
                })}
            </Grid> 
             <Butonel2 link="/portfolio/" />
          </div>
      </MDBContainer>
  </div>
    )
  }
  else {
    return(
      <div className="root contact2">
        <TitleLeftSection title='Ultimele proiecte' />
      <MDBContainer>
        <div id="padding">
            <Grid container spacing={3}>
                {props.iteme.slice(0,3).map(function(itemm, index) {
                    return(
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                            <Link to={'/portfolio/'+itemm.link}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="300"
                                        image={itemm.image}
                                        title={itemm.title}
                                        className= {classes.card2}
                                    />
                                    <div className={`imageGrid2 ${classes.overlay}`}>
                                      <h2>
                                        {itemm.title}
                                      </h2>
                                    </div>
                                </CardActionArea>  
                            </Card>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid> 
            <Butonel2 link="/portfolio/" /> 
          </div>
      </MDBContainer>
  </div>
    )
  }

}
