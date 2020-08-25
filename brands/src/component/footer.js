import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import brandImg from "../images/colorized_complete.png";
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/box'
import Hidden from '@material-ui/core/Hidden'



class FooterPage extends Component {
    state = {  }
    render() { 
        return (  
            <Grid container style={{}}>
                 <hr
                 style={{ width:"100vw", marginLeft:"auto", marginRight:"auto", color:"#9497E0", opacity:"0.1", boxShadow:"1px 1px 1px 1px #9497E0"}} />
                <Grid container style={{padding:"40px",marginTop:"-20px", }}>
                        <img src={brandImg}  id="footer-logo" style={{width: "7vw",marginBottom:"2vh"}} alt="brand"/>
                        <Typography style={{color:"#9497E0", fontSize:"14px"}}>Some description about our website <br />Some description about our website<br /> and what it does</Typography>
                        <Hidden only={['lg','md']}>
                    <Grid container style={{position:"relative",top:"3vh",right:"10vw"}}>
                    <Grid item>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">Support</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">ContactUs</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">AboutUs</a>
                    </Grid>
            
                    <Grid item >    
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">Support</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">ContactUs</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">AboutUs</a>
                    </Grid>

                    <Grid item> 
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">Support</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">ContactUs</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">AboutUs</a>
                    </Grid>
                    </Grid>
                    </Hidden>
                        <Hidden only={['xs','sm']}>
                    <Grid container style={{position:"relative",top:"-9vh",left:"33vw"}}>
                    <Grid item>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">Support</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">ContactUs</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">AboutUs</a>
                    </Grid>
            
                    <Grid item >    
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">Support</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">ContactUs</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">AboutUs</a>
                    </Grid>

                    <Grid item> 
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">Support</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">ContactUs</a>
                        <a style={{textDecoration:"none", color:"#9497E0", fontSize:"14px",margin:"-100px 5px auto 40px"}} href="#">AboutUs</a>
                    </Grid>
                    </Grid>
                    </Hidden>
                    <Hidden only={['xs','sm']}>
                    <Grid container style={{position:"relative",top:"-20vh",left:"85vw"}}>
                    <p style={{color:"#9497E0"}}>SOCIAL MEDIA</p>
                        <div className="footer-social-link">
                            <a style={{color:"#575fcf", marginRight:"10px"}} href="#"><Facebook className="footer-icon"/></a>
                            <a style={{color:"#575fcf", marginRight:"10px"}} href="#"><Twitter className="footer-icon"/></a>
                            <a style={{color:"#575fcf", marginRight:"10px"}} href="#"><Instagram className="footer-icon"/></a>
                            <a style={{color:"#575fcf", marginRight:"10px"}} href="#"><LinkedIn className="footer-icon"/></a>
                        </div>
                    </Grid>
                    <Grid item style={{position:"relative",top:"-18vh"}}>
                    <hr style={{color:"#9497E0", opacity:"0.1", boxShadow:"1px 1px 1px 1px #9497E0"}} />
                <p style={{display:'flex',justifyContent:'center',color:'#9497E0',fontSize:'12px'}}>2020 &#169; Dastyaar.All rights reserved</p>
                </Grid>
                
                    </Hidden>

                    
                    <Hidden only={['lg','md']}>
                    <Grid container style={{position:"relative",top:"10vh"}}>
                        <div className="footer-social-link">
                            <a style={{color:"#575fcf", marginRight:"40px"}} href="#"><Facebook className="footer-icon"/></a>
                            <a style={{color:"#575fcf", marginRight:"40px"}} href="#"><Twitter className="footer-icon"/></a>
                            <a style={{color:"#575fcf", marginRight:"40px"}} href="#"><Instagram className="footer-icon"/></a>
                            <a style={{color:"#575fcf", marginRight:"40px"}} href="#"><LinkedIn className="footer-icon"/></a>
                        </div>
                    </Grid>
                    

                    <Grid item style={{position:"relative",top:"13vh"}}>
                    <hr style={{color:"#9497E0", opacity:"0.1", boxShadow:"1px 1px 1px 1px #9497E0"}} />
                <p style={{display:'flex',justifyContent:'center',color:'#9497E0',fontSize:'12px'}}>2020 &#169; Dastyaar.All rights reserved</p>
                </Grid>
                </Hidden>
                </Grid>
            
            </Grid>
        );
    }
}
 
export default FooterPage;
