import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mission from '../../assets/mission-image.png';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '.7rem 18rem',
    paddingBottom: '10rem',
    [breakpoints.down('md')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('sm')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('xs')]: {
      padding: '5rem 2rem',
    },
  },

  title: {
    color: palette.primary.dark,
    fontWeight: 'bold',
    marginTop: '10rem !important',
    marginBottom: '7rem !important',
    [breakpoints.down('sm')]: {
      marginTop: '10rem !important',
      marginBottom: '7rem !important',
    },
    [breakpoints.down('xs')]: {
      marginTop: '0 !important',
      marginBottom: '2rem !important',
    },
  },
  contents: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    objectFit: 'contain',
    width: '400px',
    [breakpoints.down('sm')]: {
      width: '300px',
    },
    [breakpoints.down('xs')]: {
      width: '30%',
    },
  },
  texts: {
    maxWidth: '500px',
    textAlign: 'left',
  },
}));

const Mission: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="mission">
      <h2 className={classes.title}>Our Mission</h2>
      <div className={classes.contents}>
        <img src={mission} alt="mission" className={classes.img} />
        <div className={classes.texts}>
          <p>
            Our mission is to make it as easy as possible to use privacy
            enhancing technology (PET) securely and with the best UX possible
            for the cryptocurrency industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
