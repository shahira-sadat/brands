import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from  "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import fade from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/Menu';
import logo from "../images/colorized_complete.png";
import Menuicon from '@material-ui/icons/Menu';
import link from 'react-router-dom/Link'
import Notification from '@material-ui/icons/Notifications'
import { InsertChartOutlinedTwoTone, Translate } from '@material-ui/icons';
import Dropdown from './Dropdown';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    maxWidth: 120,
  },
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
      marginLeft: theme.spacing(25),
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
    // vertical padding + font size from searchIcon
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
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
  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Grid container >
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
              style={{width:"45vw"}}
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
          <Button  style={{color:'#575fcf',fontSize:'16px',textTransform:'capitalize',textDecoration:'none',marginLeft:"10px"}}  ><Notification /></Button>
          <Button  style={{color:'#575fcf',fontSize:'16px',textTransform:'capitalize',textDecoration:'none',marginLeft:"10px"}} ><AccountCircle /></Button>
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
      <Grid container style={{width:"100vw", display:"flex", justify:"center", justifyContent:"center"}}>   
      <Grid item style={{marginTop:"16.4px"}}>
      <Dropdown />
      </Grid>
      
      </Grid> 
      <hr
          style={{ width:"100vw", marginLeft:"auto", marginRight:"auto", color:"#9497E0", opacity:"0.1", boxShadow:"1px 1px 1px 1px #9497E0"}} />
    </Grid>
  );
}