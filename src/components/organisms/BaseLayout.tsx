import React, { ReactNode, VFC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

type ContainerProps = {
  children?: ReactNode;
  id?: string;
};

const useStyles = makeStyles(({ breakpoints }) => ({
  section: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '.7rem 10rem',
    [breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

const LayoutContainer: VFC<ContainerProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.section}>{children}</section>
    </>
  );
};

export default LayoutContainer;
