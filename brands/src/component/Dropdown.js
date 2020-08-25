import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 210,
  },
  grow: {
    flexGrow: 1,
  },
  
 
  
}));

export default function Dropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  

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
      <Grid item >  
      <FormControl variant="outlined" style={{marginRight:"5px",marginBottom:"10px"}} className={classes.formControl}>
        <InputLabel htmlFor="outlined-category-native-simple">Category</InputLabel>
        <Select
          native
          value={state.category}
          onChange={handleChange}
          label="category"
          inputProps={{
            name: 'category',
            id: 'outlined-category-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      </Grid>
      <Grid item>
      <FormControl variant="outlined" style={{marginRight:"5px",marginBottom:"10px"}} className={classes.formControl}>
        <InputLabel htmlFor="outlined-subcategory-native-simple">subcategory</InputLabel>
        <Select native value={state.subcategory} onChange={handleChange} label="category" inputProps={{ name: 'subcategory',   id: 'outlined-subcategory-native-simple', }}>
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
</Grid>
      <Grid item>
      <FormControl variant="outlined" style={{}} className={classes.formControl}>
        <InputLabel htmlFor="outlined-province-native-simple">Province</InputLabel>
        <Select native value={state.province} onChange={handleChange} label="province" inputProps={{   name: 'province'}} >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      
      
      
  );
}
