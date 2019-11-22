import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  Budget
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
        >
          <Budget />
        </Grid>
         <Grid
         item>
          <Budget />
        </Grid>
        <Grid
         item>
          <Budget />
        </Grid>
        <Grid
         item>
          <Budget />
        </Grid>
        <Grid
         item>
          <Budget />
        </Grid>
        <Grid
         item>
          <Budget />
        </Grid>
        <Grid
         item>
          <Budget />
        </Grid>
        <Grid
         item>
          <Budget />
        </Grid>
        <Grid
         item>
          <Budget />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
