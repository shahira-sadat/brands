
import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import { Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import link from 'react-router-dom/Link';
import brand from "../pages/b.png";
import ArrowIcon from "@material-ui/icons/ArrowBack";



export default class  extends Component {
   
    render() {
        return (
      <div>   

<form style={{ textAlign:"center", width:"300px"}}>
       <Grid container style={{direction:"row",alignItems:"flex-start"}}>
       <Hidden only={['lg', 'md','sm']}>
       <Button  component={link} to="/" style={{}} >
             <ArrowIcon style={{fontSize:'25px', fill:"#575fcf",}}/>
        </Button>
        </Hidden>
       </Grid>
       <img className="img" src={brand} alt="brandicon" style={{width:"50px",  marginBottom:"30px"  }}  />
        
              <Grid item >
       <TextField 
               style={{width:"300px", marginBottom:"30px",padding:"5px"}} variant="standard" required id="email" label="Email Address" name="email"/>
          </Grid>
          <Grid item>       
       <TextField style={{width:"300px",  marginBottom:"30px",padding:"5px"}} variant="standard" required name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
             <Grid item style={{marginBottom:"30px"}}>
              <Link href="#"  variant="body2" style={{  textDecoration:'none' ,}} >
              Forgot password? </Link>
              </Grid>
              <Grid item >
              <Button variant="contained" color="primary" style={{borderRadius:'20px' ,width:"250px",marginBottom:"35px"  }}>
                Login
              </Button>
              </Grid>
              
              <Grid item>
              <Box textAlign="center" fontSize={12} style={{color: '#575fcf',marginBottom:"25px" }} >or login using social media</Box>
              </Grid>
              <Grid item>
              <IconButton aria-label="facebook">
            <FaFacebook style={{fill:'#3b5998'}} />
          </IconButton>
          <IconButton aria-label="Google">
            <FcGoogle />
          </IconButton>  
          <IconButton aria-label="Google">
            <FaTwitter style={{fill:'#00acee'}} />
          </IconButton>  
          <p textAlign="center"  style={{color: '#575fcf', fontSize:"12px",marginTop:"30px"}} >Don't have an account yet?
          <Button  style={{color:'#575fcf',fontSize:'12px',textTransform:'capitalize',textDecoration:'none',}} component={link} to="/signup" >Register</Button>
          </p>
          </Grid>
          </Grid> 
              </form>
              </div>   
        );
    }
}