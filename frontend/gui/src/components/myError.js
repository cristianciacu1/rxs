import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    color: 'black',
    textAlign: 'center',
    width: 350,
    fontSize: 35,
    fontFamily: 'Courgette',
    lineHeight: 1,
};

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

export default function My404Error() {
    const classes = useStyles();

    return (
        <div style={insideStyles}>
            <div className="textForTitle">
                <p className="textForTitle">
                    Sorry, the page you are looking for doesn`t exist!<br/>
                    404<br/>
                    <Button variant="contained" className={classes.button}>
                        <Link to="/home">HomePage</Link>
                    </Button>
                </p>
            </div>
        </div>
    );
}