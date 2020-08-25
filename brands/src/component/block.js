
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StoreIcon from "@material-ui/icons/Store";
import Edit from '@material-ui/icons/Edit';
import Phone from '@material-ui/icons/PhoneInTalk';
import Mail from '@material-ui/icons/Mail';
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Language from "@material-ui/icons/Language";
import LocalStore from "@material-ui/icons/LocalGroceryStore";
import Resturant from "@material-ui/icons/Restaurant";
import GetApp from "@material-ui/icons/GetApp";
import ArrowF from "@material-ui/icons/ArrowForward";
import Pin from "@material-ui/icons/PinDrop";
import Error from "@material-ui/icons/ErrorOutlineRounded";
import { Button, Grid, Hidden } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Profile from '@material-ui/icons/HomeWork'
import PinDrop from '@material-ui/icons/PinDrop'
import Dashboard from '@material-ui/icons/TrendingUp';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 945,
    color:"#575fcf"
  },
  media: {
    height: 0,
    
  },
  
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  

  return (
    <Card style={{boxShadow:"0.2px 0.1px 2.5px #3C40C6",borderRadius:"20px"}} className={classes.root}>
      <Grid container style={{padding:"10px",width:"50vw"}}>
        <Grid item>
        <IconButton >
            <StoreIcon  style={{fill:"#c04892",fontSize:"60px"}} /><p style={{fontSize:"16px",fontWeight:"500",marginTop:"30px",color:"#9497E0"}}>Mazadar Fast Food</p>
          </IconButton>
          </Grid>
          <Hidden only={['lg','md']}>
          <Grid item style={{ position:"relative", top:"-2vh",left:"7vw", }}>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Edit style={{fontSize:"12px",marginRight:"4px"}} />Edit</Button>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Delete style={{fontSize:"12px",marginRight:"4px"}} />Delete</Button>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Dashboard style={{fontSize:"12px",marginRight:"4px"}} />Dashboard</Button>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Profile style={{fontSize:"12px",marginRight:"4px"}} />Profile</Button>
            </Grid>
            </Hidden>
      </Grid>
      <CardContent>
        <Hidden only={['xs','sm']}>
      <Grid item style={{position:"relative", top:"-3.5vh",marginBottom:"20px"}}>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Edit style={{fontSize:"12px",marginRight:"4px"}} />Edit</Button>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Delete style={{fontSize:"12px",marginRight:"4px"}} />Delete</Button>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Dashboard style={{fontSize:"12px",marginRight:"4px"}} />Dashboard</Button>
               <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"20px",marginRight:"5px"}}><Profile style={{fontSize:"12px",marginRight:"4px"}} />Profile</Button>
            </Grid>
          </Hidden>
          <Grid item  >
        <Typography variant="body2" style={{color:"#9497E0",marginTop:"-4vh",marginBottom:"10px"}} component="p">
          some description about company some description description<br /> about company some description about company
        </Typography>
        <Hidden only={['xs','sm']}>
        <Facebook style={{fill: "#38A1F3",marginRight:"3px"}} />
        <Twitter style={{fill: "#38A1F3" ,marginRight:"3px"}}  />
        <LinkedIn style={{fill: "#5C7FC9" ,marginRight:"3px"}} />
        <Language  style={{fill: "#599AF0" ,marginRight:"3px"}}/>
        </Hidden>
        </Grid>

        <Hidden only={['lg','md']}>
          <Grid container style={{gap:"16vw"}}>
        <Grid item>
        <Phone style={{fill: "#575fcf",marginRight:"3px"}} />
        <Mail style={{fill: "#575fcf" ,marginRight:"3px"}} />
        <PinDrop style={{fill: "#575fcf" ,marginRight:"3px"}}  />
        </Grid>
        <Grid item style={{marginTop:"-3vh"}}>
        <IconButton aria-label="store">
        <LocalStore style={{fill:"#575fcf", fontSize:"22px"}} /><p style={{fontSize:"12px",color:"#9497E0"}}>store</p>
        </IconButton>
        <IconButton aria-label="share">
        <Resturant style={{fill:"#575fcf", fontSize:"20px"}} /><p style={{fontSize:"12px",color:"#9497E0"}}>something</p>
        </IconButton>
        </Grid>
        </Grid>

        <Grid container style={{gap:"16vw"}}>
               <Grid item>
               <Facebook style={{fill: "#38A1F3",marginRight:"3px"}} />
                <Twitter style={{fill: "#38A1F3" ,marginRight:"3px"}}  />
                <Language  style={{fill: "#599AF0" ,marginRight:"3px"}}/>
               </Grid>
               <Grid item>
               <Button variant="outlined" color="primary" style={{fontSize:"8px",borderRadius:"20px",height:"20px",marginRight:"10px",marginTop:"8px"}}><GetApp style={{fontSize:"10px",marginRight:"2px"}} />Download</Button>
         <Button variant="outlined" color="primary" style={{fontSize:"8px",borderRadius:"20px",height:"20px",marginTop:"8px"}}><ArrowF style={{fontSize:"10px",marginRight:"1px"}} />Profile</Button>
               </Grid>
           </Grid> 
        </Hidden>


      </CardContent>
      <Hidden only={['xs','sm']}>
      <CardContent >
          <Grid item style={{float:"right",display:"flex",flexDirection:"column",marginTop:"-17.6vh"}}>
      <Button  style={{color:"#9497E0",marginBottom:"3px",fontSize:"10px",marginRight:"51px"}}><Phone style={{fill:"#575fcf", fontSize:"20px",marginRight:"5px"}} />0700023331</Button>
               <Button  style={{color:"#9497E0",marginBottom:"3px",fontSize:"10px"}}><Mail style={{fill:"#575fcf", fontSize:"20px",marginRight:"5px"}} />mazadar@gmail.com</Button>
               <Button  style={{color:"#9497E0",marginBottom:"3px",fontSize:"10px",marginRight:"5px"}}><Pin style={{fill:"#575fcf", fontSize:"20px",marginRight:"5px"}} />Kabul,Afghanistan</Button>
               <IconButton style={{left:"5vw",position:"relative",top:"1vh"}}><Error style={{fill:"#CF852A",fontSize:"14px"}} /></IconButton>
               </Grid>
      </CardContent>
      </Hidden>
      <Hidden only={['xs','sm']}>
      <CardActions disableSpacing style={{marginTop:"-8vh"}}>
        <IconButton aria-label="store">
        <LocalStore style={{fill:"#575fcf", fontSize:"22px"}} /><p style={{fontSize:"12px",color:"#9497E0"}}>store</p>
        </IconButton>
        <IconButton aria-label="share">
        <Resturant style={{fill:"#575fcf", fontSize:"20px"}} /><p style={{fontSize:"12px",color:"#9497E0"}}>something</p>
        </IconButton>
        <Button variant="outlined" color="primary" style={{fontSize:"9px",borderRadius:"20px",height:"20px",marginRight:"20px",marginTop:"8px"}}><GetApp style={{fontSize:"12px",marginRight:"4px"}} />Download</Button>
         <Button variant="outlined" color="primary" style={{fontSize:"9px",borderRadius:"20px",height:"20px",marginTop:"8px"}}><ArrowF style={{fontSize:"12px",marginRight:"4px"}} />Profile</Button>
      </CardActions>
      </Hidden>
    </Card>
  );
}
