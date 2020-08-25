import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Hidden } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      justifyContent: "center",
      
    },
  },
}));

export default function BasicPagination() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hidden only={['xs','sm','md']}>
      <Pagination count={10} color="primary" style={{display:"flex",justifyContent:"center",alignContent:"center"}} />
      </Hidden>
      <Hidden only={['lg']}> 
        <Pagination count={5} color="primary" style={{display:"flex",justifyContent:"center",alignContent:"center",width:"70vw"}} />
      </Hidden>
    </div>
  );
}
