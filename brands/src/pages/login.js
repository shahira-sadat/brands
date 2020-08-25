
import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import link from 'react-router-dom/Link';
import ArrowIcon from "@material-ui/icons/ArrowBack";
import Form from "../component/form";

 class login extends Component {
  render() { 
    return ( 
   <Grid container xs justify="center" direction="column" alignItems="center"  style={{background:"#6c6fcc", width:"100vw", height:"100vh"}}>
     <Grid container style={{direction:"row"}}>
       <Hidden only='xs'>
       <Button  component={link} to="/" style={{width:"30px",}}>
             <ArrowIcon style={{fontSize:'30px', fill:"#fff",}}/>
        </Button>
        </Hidden>
       </Grid>
      

       <Hidden only={['lg','md']}>
     <Grid container justify="center" xs={12} sm={9} md={6} lg={6} >
       <Paper  item style={{background:"#fff",width:"600px",height:"650px",alignContent:"center" }}>
       <Grid container xs={10} md={12} lg={12} style={{marginTop:"40px",paddingLeft:"35px",justifyContent:"center",justify:"center"}}>
       <Form />
      </Grid> 
      </Paper>
      </Grid>
      </Hidden>
      


      <Hidden only={['sm','xs']}>
      <Grid container justify="center" xs={12} sm={6} md={6} lg={6} >
       <Paper  item style={{background:"#fff",borderRadius:"20px",width:"600px",height:"650px",alignContent:"center" }}>
       <Grid container xs={10} md={12} lg={12} style={{marginTop:"50px",justifyContent:"center",justify:"center"}}>
       <Form />
      </Grid> 
      </Paper>
      </Grid>
      </Hidden>

     </Grid>
    
  
);
     
  }
}
 
export default login

