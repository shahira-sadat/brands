import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import adv from '../images/adv.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 260,
  },
  media: {
    height: 140,
  },
});

export default function Adv() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={adv}
          title="adv"
        />
        <CardContent style={{background:"#9EBDDF"}}>
          <Typography style={{color:"#fff"}} gutterBottom variant="h6" component="h2">
            Stylish outfit
          </Typography>
          <Typography variant="body3" component="p" style={{color:"#fff"}}>
            Your life is not perfect but your autfit can be!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#0B5081",fontSize:"10px"}}>
          Offer Now
        </Button>
        <Button size="small" style={{color:"#0B5081",fontSize:"10px"}}>
          Close
        </Button>
      </CardActions>
    </Card>
  );
}