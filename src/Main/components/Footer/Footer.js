import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    background: '#2196f3',
  },
  space: {
    paddingRight: '8px',
    float: 'right',
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.space}>
      <span className={classes.space} variant="body1">
        &copy;{' '}
        <Link
          href="https:github.com/dendekky/"
          target="_blank"
        >
          craigslist
        </Link>
      </span>
     <span className={classes.space}>Terms</span>
     <span className={classes.space}>Privacy</span>
     </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
