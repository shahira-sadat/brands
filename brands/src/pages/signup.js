
import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField"
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import link from 'react-router-dom/Link';
import brand from "./b.png";
import ArrowIcon from "@material-ui/icons/ArrowBack";
import Hidden from "@material-ui/core/Hidden";



 class signup extends Component {
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
    
     <Grid container justify="center" xs={6} sm={6} md={6} lg={8} >
       <Paper  item style={{background:"#fff",borderRadius:"20px",padding:"10px",paddingRight:"90px",paddingLeft:"90px",paddingTop:"40px",alignContent:"center" }}>
       
       <Grid container xs={10} md={12} lg={12} style={{padding:"10",justifyContent:"center",justify:"center"}}>
       <form style={{ textAlign:"center", width:"300px"}}>
       <Grid container style={{direction:"row",alignItems:"flex-start"}}>
       <Hidden only={['lg', 'md','sm']}>
       <Button  component={link} to="/" style={{}} >
             <ArrowIcon style={{fontSize:'25px', fill:"#575fcf",}}/>
        </Button>
        </Hidden>
       </Grid>
       <img className="img" src={brand} alt="brandicon" style={{width:"50px",   marginBottom:"10px"  }}  />
        
        <Grid item>       
              <TextField
              style={{width:"300px",  marginBottom:"20px",padding:"5px"}}
              variant="standard"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"  
              />
              </Grid>
              <Grid item >
       <TextField 
               style={{width:"300px", marginBottom:"20px",padding:"5px"}}
                variant="standard"
                required
                id="email"
                label="Email Address"
                name="email"
                  />
          </Grid>
          <Grid item>       
              <TextField
              style={{width:"300px",  marginBottom:"50px",padding:"5px"}}
                variant="standard"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              
              <Grid item >
              <Button variant="contained" color="primary" style={{borderRadius:'20px' ,width:"250px",marginBottom:"35px"  }}>
                Register
              </Button>
              </Grid>
              
              <Grid item>
              <Box textAlign="center" fontSize={12} style={{color: '#575fcf',marginBottom:"25px" }} >or signup using social media</Box>
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
          <p textAlign="center"  style={{color: '#575fcf', fontSize:"12px",marginTop:"30px"}} >Already have an account?
          <Button  style={{color:'#575fcf',fontSize:'12px',textTransform:'capitalize',textDecoration:'none',marginLeft:"-10px"}} component={link} to="/login" >Login</Button>
          </p>
          </Grid>
          </Grid> 
              </form>
              
      </Grid> 
      </Paper>
      </Grid>
     </Grid>
  
);
     
  }
}
 
export default signup
