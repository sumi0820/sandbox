import React, { ReactNode, VFC } from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

type Props = {
  children?: ReactNode;
};

const Title: VFC<Props> = ({ children }) => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {children}
  </Typography>
);

export default Title;
