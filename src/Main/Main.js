import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, IconButton, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { Sidebar, Topbar, Footer, Dashboard } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
      background: '#2196f3',
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  dashText: {
    fontSize: '16px',
    padding: '30px',
    marginTop: '30px',
    display: 'flex',
  },
  dashRight: {
    paddingLeft: '180px',
    // float: 'right',
    display: 'flex',
  },
  icon: {
    height: '8px !important',
    // width: '8px',
    fontSize: '8px',
    margin: '10px',
  },
  boldText: {
    fontWeight: 'bold',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {/* {children} */}
        <div className={classes.dashText} >
          <div className={classes.dashLeft}>
          <span className={classes.boldText}>Vintage Car:  </span>
          <span>326 results</span>
          </div>
          <div className={classes.dashRight}>
            <span className={classes.boldText}>New Delhi  </span>
            {/* <div><IconButton  className={classes.icon}>
              <NotificationsIcon  className={classes.icon} />
          </IconButton></div> */}
            <select>
              <option>Oldest</option>
              <option>Newest</option>
              <option>Farthest</option>
            </select>
          </div>
        </div>
        <Dashboard />
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
