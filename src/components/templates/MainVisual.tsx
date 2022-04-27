import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { gsap, Power3 } from 'gsap';
import { Divider } from '@material-ui/core';
import StoffelMPC from '../../assets/products-stoffelMPC-logo.png';
import twitterLogo from '../../assets/twitter-logo.png';
import developerSurvey from '../../assets/products-developer-survey.svg';
import githubLogo from '../../assets/github-logo-black.png';
import mkBook from '../../assets/products-mkbook.png';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: palette.primary.main,
    background: `linear-gradient(25deg,#a6eaf5, ${palette.primary.main})`,
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '3px solid',
    borderRadius: '10px',
    borderColor: palette.primary.light,
    width: '95%',
    height: '95%',

    '& $hr': {
      width: '40%',
      height: '1px',
      marginTop: '10px',
      background: '#8C8C8C',
    },
  },

  logo: {
    width: '200px',
    object: 'contain',
    marginBottom: '-20px',

    [breakpoints.down('sm')]: {
      width: '200px',
    },
    [breakpoints.down('xs')]: {
      width: '150px',
      marginBottom: '-10px',
    },
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '700px',

    '& $h2': {
      color: palette.primary.light,
      textShadow: '0 0 3px #FFDB6A',
    },
    '& $h5': {
      textAlign: 'center',
      lineHeight: '1.8rem',
      color: palette.secondary.dark,

      [breakpoints.down('xs')]: {
        lineHeight: '1.2rem',
      },
    },
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '10px',

    '& $h6': {
      color: palette.secondary.light,
      marginBottom: '6px',
      textShadow: '0 0 1px #868686',
    },

    '& $div': {
      display: 'flex',
      justifyContent: 'center',
      padding: '0 4px',
    },

    '& $div > div': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },

    '& $a': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        transform: 'translateY(-0.1875em)',
      },
    },

    '& $img': {
      objectFit: 'contain',
      width: '30px',
      margin: '0 10px 4px 10px',

      '&:hover': {
        opacity: '.5',
        color: 'white',
      },
    },
    '& $p': {
      color: 'white',
      backgroundColor: '#03CD69',
      marginTop: '0',
      marginBottom: '12px',
      padding: '0 6px',
      borderRadius: '5px',
      '&:hover': {
        backgroundColor: '#009048',
      },
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
    <div className={classes.container} id="main">
      <div className={classes.wrapper} ref={logoItem}>
        <img src={StoffelMPC} alt="stoffel" />
        <div className={classes.textWrapper}>
          <h2>Stoffel MPC</h2>
          <h5>
            A framework for building expressive confidential blockchain
            applications using multiparty computation (MPC)
          </h5>
        </div>
        <Divider />
        <div className={classes.socialMedia}>
          <h6>Follow us</h6>
          <div>
            <div>
              <a
                href="https://twitter.com/StoffelFinance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterLogo} alt="twitter" />
                <p>Twitter</p>
              </a>
              <a
                href="https://cryptpad.fr/form/#/3/form/view/3b4ed9a8bde9ba12924acdd86fad2a39/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={developerSurvey}
                  alt="developer-survey"
                  style={{ width: '25px' }}
                />
                <p>Developer Survey</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/hashcloak/stoffelMPC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="github" />
                <p>Github</p>
              </a>
              <a
                href="https://docs.stoffelmpc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mkBook} alt="documentation" />
                <p>Stoffel MPC Docs</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
