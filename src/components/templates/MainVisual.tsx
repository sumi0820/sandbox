import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { gsap, Power3 } from 'gsap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: palette.primary.main,
    background: `linear-gradient(25deg,#a6eaf5, ${palette.primary.main})`,
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '& a': {
      color: '#ffff',
      // fontSize: '48px',
      textShadow: '0 0 0.5px #444',
    },
  },
}));

const MainVisual: React.FC = () => {
  const classes = useStyles();
  const logoItem = useRef<HTMLImageElement>(null);

  const setAnimation = () => {
    gsap.fromTo(
      logoItem.current,
      2,
      {
        opacity: 0,
        y: 15,
        ease: Power3.easeOut,
        delay: 0.1,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeInOut,
        delay: 0.1,
      },
    );
  };

  useEffect(() => {
    setAnimation();
  }, []);

  return (
    <div className={classes.container} id="main" ref={logoItem}>
      <Link to="/dashboard" data-test="internal-link1">
        Dashboard
      </Link>
      <h1>This is a test - h1</h1>
      <h2>This is a test - h2</h2>
      <h3>This is a test - h3</h3>
      <h4>This is a test - h4</h4>
      <h5>This is a test - h5</h5>
      <h6>This is a test - h6</h6>
      <p>This is a test - p</p>
      <a
        href="https://twitter.com/StoffelFinance"
        target="_blank"
        rel="noopener noreferrer"
        data-test="external-link1"
      >
        This is a test - a
      </a>
      <a
        href="https://docs.stoffelmpc.com/"
        target="_blank"
        rel="noopener noreferrer"
        data-test="external-link2"
      >
        This is a test - b
      </a>
      <ul>
        <li>This is a test - li</li>
        <li>This is a test - li</li>
        <li>This is a test - li</li>
      </ul>
    </div>
  );
};

export default MainVisual;
