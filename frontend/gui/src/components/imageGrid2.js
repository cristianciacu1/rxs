import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import { borders } from '@material-ui/system';
import GridListTile from '@material-ui/core/GridListTile';
import { Container, Row, Col } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import './grid.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },

    card2: {
        height: 400,
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



function MediaQuery(props) {    

    const classes = useStyles();

    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) {
        return 3;
        }

        if (isWidthUp('lg', props.width)) {
        return 3;
        }

        if (isWidthUp('md', props.width)) {
        return 2;
        }
        return 1;
    }


    return (

        
        <div className="root" style={{ backgroundColor: "#f5f6fa" }}>
            <Container>
                <div className="font padding">
                    <h1>Here you can see what I have done so far...</h1>
                </div>
                <div id="padding2">
                    <Grid container spacing={3}>
                        {props.iteme.slice(0,3).map(function(itemm, index) {
                            return(
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <Card className={classes.card} borderRadius={80}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="300"
                                                image={'http://localhost:8000'+itemm.image}
                                                title={itemm.title}
                                                className= {classes.card2}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {itemm.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {itemm.content}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid> 
                    <div className="padding">
                        <Button className={classes.button} href="hel"><Link to="/page1"> Show more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12l-4-4v3H3v2h15v3z"/></svg></Link></Button>
                    </div> 
                </div>
            </Container>
        </div>
    );
}

MediaQuery.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  greet: PropTypes.func,
};

export default withWidth()(MediaQuery);