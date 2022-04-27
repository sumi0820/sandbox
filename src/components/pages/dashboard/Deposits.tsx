/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { VFC } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const onClick = (event: { preventDefault: () => void }) => {
  event.preventDefault();
};

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposits: VFC = () => {
  const classes = useStyles();

  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={onClick}>
          View balance
        </Link>
      </div>
    </>
  );
};
export default Deposits;
