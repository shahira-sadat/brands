import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/InboxOutlined'
import Filter from '@material-ui/icons/FilterList';
import logo from "../images/colorized_complete.png";
import Hidden from "@material-ui/core/Hidden"
import { Grid } from '@material-ui/core';
import Menuicon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import link from '@material-ui/core/Link';
import Link from 'react-router-dom/Link'



const useStyles = makeStyles((theme) => ({
    grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
},
 
  search: {
    position: 'relative',
    top:'8px',
    [theme.breakpoints.down('')]: {
        display: 'none',
      },
      border:'1px solid #F1F1F1',
      boxShadow:"2px 2px 7px #F1F1F1",
    borderRadius: theme.shape.borderRadius,
   
 
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#575fcf',
    
  },
  inputRoot: {
    color: '#575fcf',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
     
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton  color="#575fcf">
            <Filter style={{fill:"#575fcf"}} />
        </IconButton>
        <p>Filter by</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="#575fcf"
        >
          <InboxIcon   style={{fill:"#575fcf"}} />
        </IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="#575fcf">
            <AccountCircle  style={{fill:"#575fcf"}} />
        </IconButton>
        <p>Register</p>
      </MenuItem>
    </Menu>
  );

  return (
   
    <div className={classes.grow}>
        <Hidden only={['lg','md']}>
      <AppBar position="static" style={{backgroundColor:"#fff",boxShadow:"none"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
        
            aria-label="open drawer"
          >
            <img src={logo} alt="logo" className="logo" style={{width:"10vw",marginTop:"3%"}} />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop} style={{marginTop:"15px"}}>
          <IconButton aria-controls="customized-menu"  variant="contained"   >
                <Menuicon style={{fill:"#575fcf"}} />
              </IconButton>
          <Button  style={{color:'#575fcf',fontSize:'16px',textTransform:'capitalize',textDecoration:'none',marginLeft:"10px"}} component={link} to="/signup" >Register</Button>
          <Button  style={{color:'#575fcf',fontSize:'16px',textTransform:'capitalize',textDecoration:'none',marginLeft:"10px"}} component={link} to="/login" >Login</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#575fcf"
            >
              <MoreIcon style={{fill:"#575fcf",marginTop:"15px"}} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      </Hidden>
      <Hidden only={['sm','xs']}>
      <AppBar style={{boxShadow:'none', background:"#fff"}}>
<Toolbar className="App-bar"> 
  <img src={logo} alt="logo" className="logo" style={{width:"10vw",marginTop:"3%",marginLeft:"20px"}} />
  <div style={{ width:"86vw", display:"flex", justifyContent:"end", marginTop:"6vh",gap:"10px"}}>
  <Grid item  >
        <Hidden only={['lg','md']}>
        <input type="text" placeholder="Search..." id="search" style={{ background:"#fff",width:"300px",marginLeft:"20px",height:"40px",border:"1px solid #F1F1F1",boxShadow:"2px 2px 7px #F1F1F1"}} />
        </Hidden>
        </Grid>
   <Grid container style={{ justifyContent:"end",gap:"20px",}}> 
   <IconButton >
            <Filter style={{fill:'#575fcf'}} />
          </IconButton>  
  <Button  style={{color:'#575fcf',fontSize:'18px',textTransform:'capitalize',textDecoration:"none"}} component={Link} to="/signup" >Register</Button>
  <Button  style={{color:'#575fcf',fontSize:'18px',textTransform:'capitalize',textDecoration:"none"}} component={Link} to="/login">Login</Button>
  </Grid> 
  </div>
</Toolbar>
</AppBar>      

      </Hidden>
      {renderMobileMenu}
      {renderMenu}
    </div>
   
  );
}