import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const Butonel2 = (props) => {
    const classes = useStyles();
  
    return(
      <div className="paddingText2 paddingText3">
          <Button className={classes.button}><Link to={props.link} style={{color: 'black'}}> Vezi mai multe <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12l-4-4v3H3v2h15v3z"/></svg></Link></Button>
      </div> 
    )
}

export default Butonel2;