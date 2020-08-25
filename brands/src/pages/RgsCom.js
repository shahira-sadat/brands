
import React, { Component } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from "../images/colorized_complete.png";
import profile from "../images/h.jpg";
import Hidden from "@material-ui/core/Hidden"
import { Grid } from '@material-ui/core';
import Menuicon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import link from 'react-router-dom/Link';
import Notification from '@material-ui/icons/Notifications';
import Add from '@material-ui/icons/Add'
import Block from '../component/block';
import {useTheme} from '@material-ui/core'
import {useMediaQuery} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import DropDown from '../component/DropdownCom'
import Pageination from '../component/Pageination'
import Footer from '../component/footer'
import Box from '@material-ui/core/Box'

export default function RgsCom() {
    const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
        return (
 <Grid container>
     <Grid item>
<AppBar style={{boxShadow:'none', background:"#fff"}}>
<Toolbar className="App-bar"> 
<Hidden only={['sm','xs']}>
  <img src={logo} alt="logo" className="logo" style={{width:"10vw",marginTop:"3%",marginLeft:"20px"}} />
  </Hidden>
  <Hidden only={['lg','md']}>
  <img src={logo} alt="logo" className="logo" style={{width:"100px",marginTop:"35px",marginLeft:"20px"}} />
  </Hidden>

  <div style={{ width:"86vw", display:"flex", justifyContent:"end", marginTop:"6vh",gap:"10px"}}>
   <Grid container style={{ justifyContent:"end",gap:"3px",}}> 
  <Button  style={{color:'#575fcf',fontSize:'18px',textTransform:'capitalize',textDecoration:"none"}} component={link} to="/" >Home</Button>
  <IconButton >
            <Notification style={{fill:'#575fcf'}} />
   </IconButton> 
   <Hidden only={['sm','xs']}>
   <Grid item style={{marginTop:"5px"}}>
   <img src={profile} alt="logo" className="logo" style={{width:"3.5vw",height:"4.5vh",marginTop:"3%",borderRadius:"50%"}} />
   </Grid>
   </Hidden> 
   <Hidden only={['lg','md']}>
   <Grid item style={{marginTop:"5px"}}>
   <img src={profile} alt="logo" className="logo" style={{width:"6vw",height:"4.5vh",marginTop:"3%",borderRadius:"50%"}} />
   </Grid>
   </Hidden>
  </Grid> 
  </div>
  
</Toolbar>
<Grid container>
<hr style={{ width:"100vw", marginLeft:"auto", marginRight:"auto",marginTop:"30px", color:"#9497E0", opacity:"0.1", boxShadow:"1px 1px 1px 1px #9497E0"}} />
   
    <Grid item style={{gap:"10px",position:"relative",right:"-30vw",display:"flex"}}>
        <Hidden only={['lg','sm','md']}>
    <p style={{marginRight:"-50px",color:'#3C40C6',fontSize:'8px',width:"60vw"}}>Do you want to add your company at brands.af?</p>
    <Button size="small" variant="outlined" color="primary" style={{fontSize:"6px",height:"2vh",marginTop:"1.3vh",borderRadius:"5px",width:"8vw",margin:"8px 10px auto 10px"}} onClick={handleClickOpen}><Add style={{fontSize:"12px",marginRight:"4px"}}  />Add</Button>
    </Hidden>

    <Hidden only={['xs']}>
    <p style={{color:'#3C40C6',fontSize:'14px',width:"40vw"}}>Do you want to add your company at brands.af?</p>
    <Button variant="outlined" color="primary" style={{fontSize:"9px",height:"4vh",marginTop:"1.3vh",borderRadius:"5px",width:"20vw"}} onClick={handleClickOpen}><Add style={{fontSize:"12px",marginRight:"4px"}}  />Add new company</Button>
    </Hidden>
</Grid>

<Grid container style={{width:"100vw"}}>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle style={{display:"flex",alignContent:"center",justifyContent:"center",color:"#9497E0"}}>{"Add Company"}</DialogTitle>
        <hr
          style={{ width:"100vw", marginLeft:"auto", marginRight:"auto", color:"#9497E0", opacity:"0.1", boxShadow:"1px 1px 1px 1px #9497E0"}} />

        <DialogContent>
            <Grid container style={{gap:"13px"}}>
        <TextField variant="outlined" placeholder="Name" color="primary" style={{width:"40vw"}} />
        <TextareaAutosize rowsMax={3} color="primary"  placeholder="Description" style={{width:"40vw",padding:"10px"}} />
        <TextField variant="outlined" placeholder="Phone" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="Email" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="Address" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="Google Business Link" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="Google Map Address" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="LinkedIn" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="Twitter" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="Facebook" color="primary" style={{width:"40vw"}} />
        <TextField variant="outlined" placeholder="Website" color="primary" style={{width:"40vw"}} />
        <DropDown  />
        </Grid>
        </DialogContent>
        <DialogActions style={{display:"flex", justifyContent:"center",alignContent:"center"}}>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
</Grid>
<hr style={{ width:"100vw", marginLeft:"auto", marginRight:"auto", color:"#9497E0", opacity:"0.1", boxShadow:"1px 1px 1px 1px #9497E0"}} />
<p style={{color:"#575fcf",margin:"10px auto 0 auto",fontWeight:"900"}}>Companies Registered by you</p>
</AppBar>  
</Grid> 
<Box style={{display:"flex",flexDirection:"column",gap:"30px",marginTop:"5vh",marginLeft:"25vw"}}>
    <Grid  item style={{marginTop:"37vh",}}>
    <Block />
    </Grid>

    <Grid item >
    <Block />
    </Grid>

    <Grid item>
    <Block />
    </Grid>

    <Grid item>
    <Block />
    </Grid>
    <Grid item justifyContent="center" >
        <Pageination  />
    </Grid>
</Box>
    <Grid item>
        <Footer />
    </Grid>
</Grid> 
           
        )
    }
