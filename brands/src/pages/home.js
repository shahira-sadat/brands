import React, { Component } from 'react'
import search from '../images/brands.png';
import Nav from "../component/nav";
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import Grid from "@material-ui/core/grid"
import Hidden from "@material-ui/core/Hidden";
import ViewListIcon from '@material-ui/icons/ViewList';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import Instagram from "@material-ui/icons/Instagram";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';
import Box from "@material-ui/core/Box"


export class home extends Component {
    render() {
        return (
            <Grid container >
                <Nav />
                <Grid container sm={9} md={12} lg={12}>
                <Hidden only={['sm','xs']}>
                <Grid item >
                <img src={search} alt="serchbackground" className="searchimg" style={{ height:"40vh" ,overflow:"hidden",top:"110%"}} />
                </Grid>
                </Hidden>
                <Hidden only={['lg','md']}>
                 <Grid item >
                <img src={search} alt="serchbackground" className="searchimg" style={{ height:"40vh" ,overflow:"hidden",top:"110%",opacity:"0.7"}} />
                </Grid>
                </Hidden>
                <Hidden only={['xs','sm']}>
                <Grid item>
                <form className="form" style={{width:"100vw", display:"flex", justifyContent:"center", marginTop:"", }}>
                 <Button id="menu-icon" style={{marginTop:'8px',marginLeft:'38px',height:'5.2vh',width:'.5vw',background:'#3C40C6',borderTopLeftRadius:'50px',borderTopRightRadius:'0px',borderBottomLeftRadius:'50px',borderBottomRightRadius:'0px'}}>
                 <ViewListIcon style={{fontSize:'20px', fill:"#fff"}}/>
                 </Button>
                 <input type="text" placeholder="Search..." id="search" style={{marginLeft:'-63px',marginRight:'-54px',alignSelf:"center", background:"#fff", width:"30vw",height:"5vh",borderRadius:"30px",border:"1px solid #F1F1F1",boxShadow:"2px 2px 7px #F1F1F1"}} />
                 <Button component={Link} to="/searchResultPage" id="menu-icon" style={{height:'7.8vh',width:'0.1vw',background:'#3C40C6',borderRadius:'80px',color:'white',boxShadow:'2px 2px 7px #F1F1F1'}}>
                     <SearchIcon style={{fontSize:'30px', fill:"#fff"}} />
                 </Button>
                    </form> 
                    </Grid>
                    <Grid container justify="center">
                        <Grid item lg={8} md={8}>
                    <Box textAlign="center"  style={{color:'#676db1',  fontSize:'18px',marginTop:'10vh',letterSpacing:'2px',wordSpacing:'5px'}} >Good Designs Great Impact</Box>
                    </Grid>
                    <Grid item item lg={8} md={8} style={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained"  style={{marginTop:"40px",width:'160px',height:"7vh",borderRadius:'30px',background:"#575fcf",letterSpacing:'2px',color:"#fff" ,textTransform:"uppercase" }}>get started</Button>
                    </Grid>
                    </Grid>
                    </Hidden>
                    <Hidden only={['md', 'lg']}>
                    <Grid container justify="center">
                        <Grid item sm={12} xs={12} style={{marginTop:'-25vh',display:"flex",justifyContent:"center"}}>
                    <Box textAlign="center"  style={{color:'#3C40C6',fontSize:'18px',letterSpacing:'2px',wordSpacing:'5px'}} >Good Designs Great Impact</Box>
                    </Grid>
                    <Grid item item sm={12} xs={12} style={{display:"flex", justifyContent:"center",marginTop:"-16vh" }}>
                    <Button variant="contained"  style={{width:'160px',height:"7vh",borderRadius:'30px',background:"#3C40C6",letterSpacing:'2px',color:"#fff" ,textTransform:"uppercase" }}>get started</Button>
                    </Grid>
                    </Grid>
                        <Grid container style={{width:"100vw", height:"2vh", marginTop:"35vh",gap:"20px"}}>  
             <Grid sm={10} xs={12} item style={{ display:"flex", justifyContent:"spacearound",gap:"10px",}}>
              <Button  style={{color:'#3C40C6',fontSize:'18px',textTransform:'capitalize'}} >AboutUs</Button>
              <Button  style={{color:'#3C40C6',fontSize:'18px',textTransform:'capitalize'}} >ContactUs</Button>
              <Button  style={{color:'#3C40C6',fontSize:'18px',textTransform:'capitalize'}} >What's profile?</Button>
              </Grid>
            <Grid item style={{gap:"8px"}}>
            <IconButton aria-label="facebook"> <FaFacebook style={{fill:'#3C40C6'}} /> </IconButton> 
            <IconButton aria-label="Google">   <Instagram style={{fill:'#3C40C6'}} /> </IconButton>
            <IconButton aria-label="Twitter">   <FaTwitter style={{fill:'#3C40C6'}} /> </IconButton>
            </Grid>
          </Grid>
           </Hidden>
           
           <Hidden only={['sm', 'xs']}>
                        <Grid container  style={{width:"100vw", height:"2vh",display:"flex" ,marginTop:"18vh"}}>  
             <div style={{width:"90vw",display:"flex", justifyContent:"center",gap:"20px"}}>
              <Button  style={{color:'#676db1',fontSize:'18px',textTransform:'capitalize',letterSpacing:"2px"}} >About Us</Button>
              <Button  style={{color:'#676db1',fontSize:'18px',textTransform:'capitalize',letterSpacing:"2px"}} >Contact Us</Button>
              <Button  style={{color:'#676db1',fontSize:'18px',textTransform:'capitalize',letterSpacing:"2px"}} >What is a profile?</Button>
              </div>
              <div style={{width:"5vw",display:"flex", justifyContent:"end",paddingLeft:"34px"}}>
            <IconButton aria-label="facebook"> <FaFacebook style={{fill:'#575fcf'}} /> </IconButton> 
            <IconButton aria-label="Google">   <Instagram style={{fill:'#575fcf'}} /> </IconButton>
            <IconButton aria-label="Twitter">   <FaTwitter style={{fill:'#575fcf'}} /> </IconButton>
            </div>
          </Grid>
           </Hidden>
           </Grid> 
           
           
           
             </Grid> 

            
        ) 
    }
}

export default home;
