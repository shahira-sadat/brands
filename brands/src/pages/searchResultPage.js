import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import FooterPage from '../component/footer';
import BlockBox from '../component/BlockBox'
import SearchNav from '../component/searchNav';
import adv from '../images/adv.jpg'
import Pageination from '../component/Pageination';
import Footer from '../component/footer';
import AdvBlock from '../component/adv';
import { Hidden } from '@material-ui/core';


class SearchResultPage extends Component {
    state = {  }
    render() { 
        return (  
            <Grid container >
                <Grid item >
                    <SearchNav  />
                </Grid>
                <Hidden only={['xs','sm']}>
                <Grid container style={{width:"100vw",display:"flex",justifycontent:"spacebetween" }}>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"60vw",marginLeft:"60px"}}>
                    <BlockBox />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"30vw"}}>
                    <AdvBlock />
                </Grid>
                </Grid>
                <Grid container style={{width:"100vw",display:"flex",justifycontent:"spacebetween" }}>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"60vw",marginLeft:"60px"}}>
                    <BlockBox />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"30vw"}}>
                    <AdvBlock />
                </Grid>
                </Grid>

                <Grid container style={{width:"100vw",display:"flex",justifycontent:"spacebetween" }}>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"60vw",marginLeft:"60px"}}>
                    <BlockBox />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"30vw"}}>
                    <AdvBlock />
                </Grid>
                </Grid>

                <Grid container style={{width:"100vw",display:"flex",justifycontent:"spacebetween" }}>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"60vw",marginLeft:"60px"}}>
                    <BlockBox />
                </Grid>
                <Grid item lg={6} md={12} sm={12} xs={12} style={{padding:"30px",width:"30vw"}}>
                    <AdvBlock />
                </Grid>
                </Grid>


                </Hidden>

                <Hidden only={['lg','md']}>
                <Grid item  style={{marginBottom:"60px", marginLeft:"10px"}}>
                    <BlockBox />
                </Grid>
                <Grid style={{marginBottom:"60px",marginLeft:"40px"}}>
                    <AdvBlock />
                </Grid>

                <Grid item  style={{marginBottom:"60px",marginLeft:"10px"}}>
                    <BlockBox />
                </Grid>
                <Grid style={{marginBottom:"60px",marginLeft:"40px"}}>
                    <AdvBlock />
                </Grid>


                <Grid item  style={{marginBottom:"60px",marginLeft:"10px"}}>
                    <BlockBox />
                </Grid>
                <Grid style={{marginBottom:"60px",marginLeft:"40px"}}>
                    <AdvBlock />
                </Grid>

                <Grid item  style={{marginBottom:"60px",marginLeft:"10px"}}>
                    <BlockBox />
                </Grid>
                <Grid style={{marginBottom:"60px",marginLeft:"40px"}}>
                    <AdvBlock />
                </Grid>
                </Hidden>

                <Grid item>
                    <Pageination />
                </Grid>
                    <Footer />
                </Grid>
            
        );
    }
}
 
export default SearchResultPage;
