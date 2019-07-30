import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 400,
      position: 'relative',
    },

    overlay: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
    },

    card2: {
        height: 375,
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

export default function GridList(props) {

    const classes = useStyles();

    const {functie} = props;

    const functie2 = (id) => {
      functie(id);
  }

  const cars = props.items;

    return(
        <Grid container spacing={3}>
            {cars.content.map(function(itemm, index) {
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className="lozad" id={index}>
                        <div className="darkImage">
                            <Card className={classes.card} onClick={functie2.bind(null,itemm.index)}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="500"
                                        image={itemm.image}
                                        title={'hello'}
                                        className= {classes.card2}
                                    />
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                )
            })}
        </Grid> 
    )
}