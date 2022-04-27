import React, { VFC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import githubLogo from '../../assets/github-logo.png';
import twitterLogo from '../../assets/twitter-logo-white.png';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    objectFit: 'contain',
    width: '36px',
    '&:hover': {
      filter: 'invert(50%) grayscale(50%)',
    },
  },
}));

const SocialMedia: VFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <a
        href="https://twitter.com/hashcloak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterLogo} alt="twitter-logo" className={classes.logo} />
      </a>
      <a
        href="https://github.com/hashcloak"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: '30px' }}
      >
        <img src={githubLogo} alt="github-logo" className={classes.logo} />
      </a>
    </div>
  );
};

export default SocialMedia;
