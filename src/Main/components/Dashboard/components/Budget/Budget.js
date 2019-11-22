import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: '300px',
  },
  paper: {
    // padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
    width: 340,
  },
  paperText: {
    padding: theme.spacing(2),
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  img:{
    height: '150px',
  },
}));

const Budget = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
              <Paper className={fixedHeightPaper}>
              <img className={classes.img} src={process.env.PUBLIC_URL + '/10.jpg'} alt="img"/> 
              <div className={classes.paperText}>
              <Typography className={classes.carName} variant="p">2018 Toyota Avalon Hybrid</Typography>
                <Typography
                  className={classes.differenceValue}
                  variant="body2"
                >
                  $250
                </Typography>
                {/* <Icon className={classes.iconHover} color="error" style={{ fontSize: 30 }}>
                   add_circle
               </Icon>     */}
            </div>
              </Paper>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
