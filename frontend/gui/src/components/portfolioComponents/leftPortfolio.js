import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';
import '../grid.css';
import '../../App.css';

const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 345,
      border: 'none',
      boxShadow: 'none',
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

  

export default function LeftPortfolio(props) {

    const [height1, setHeight] = useState(0);

    const classes = useStyles();

    const imgElement = React.useRef(null);

    return(
        <Row>
            <Col sm={12} md={4} lg={4} xl={4} className="paddingBottom1">
                <Card className={classes.card}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        height="350"
                        image={props.image}
                        title={props.categoryName}
                        ref = {imgElement}
                        onLoad={() => {
                            setHeight(imgElement.current.offsetHeight)
                        }
                        }
                    />
                    </CardActionArea>
                </Card>
            </Col>
            <Col sm={12} md={8} lg={8} xl={8} className="paddingBottom1">
                <div style={{height: `${height1}px`}} className="textCenter">
                    <h1 className=" text-center font2 titleSuccess" style={{color: 'black', fontSize: 48, fontWeight: 100}}>
                        <Link to={{
                          pathname: props.categoryLink,
                          state: {
                            items: props.items
                          }
                        }}><b className="text-uppercase">{props.categoryName}</b></Link>
                        <div className="lineUnder" />
                        <p className="text-center font-weight-light" style={{fontSize: 22, color: '#2f3640'}}>{props.categoryDesc}</p>
                    </h1>
                </div>
            </Col>
        </Row>
    )
}