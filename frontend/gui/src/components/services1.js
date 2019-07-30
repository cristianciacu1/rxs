import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './grid.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Butonel2 from './Butonel2';
import TitleLeftSection from './lilComponents/titleLeftSection';

const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 345,
    },

    card2: {
        height: 400,
    },

    root: {
        flexGrow: 1,
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },

      rightIcon: {
        marginLeft: theme.spacing(1),
      },

      pos: {
        marginBottom: 12,
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

  const data = [
      {
        title : 'Foto',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non.',
        icon : 'http://192.168.1.7:8000/media/post_images/camera.png'
      },
      {
        title : 'Video',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non.',
        icon : 'http://192.168.1.7:8000/media/post_images/film.png'
      },
      {
        title : 'Digital Marketing',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non.',
        icon : 'http://192.168.1.7:8000/media/post_images/marketing.png'
      },
  ]

  export default function Servicii1() {

    const classes = useStyles();
    
    return(
        <div className="root aBlack">
          <TitleLeftSection title="Servicii" />
            <MDBContainer>
                <div>
                    <Grid container spacing={3}>
                        {data.map(function(itemm, index) {
                            return(
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <div>
                                                <img 
                                                src={`${itemm.icon}`}
                                                alt="" 
                                                style={{ height: 70, width: 70 }}
                                                />
                                            </div>
                                            <div className="paddingText">
                                                <Typography className={`${classes.pos} text-center`} variant="h4">
                                                    {itemm.title}
                                                </Typography>
                                                <div className="paddingText">
                                                    <Typography variant="subtitle1" component="h6">
                                                    {itemm.description}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Butonel2 link="/services" />  
                </div>
            </MDBContainer>
        </div>
    )
}