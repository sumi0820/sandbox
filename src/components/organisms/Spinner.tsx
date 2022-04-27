import { CircularProgress } from '@material-ui/core';
import { VFC } from 'react';

const Spinner: VFC = () => (
  <div style={{ margin: '3rem 0 5rem' }}>
    <CircularProgress color="primary" style={{ color: 'white' }} />
  </div>
);

export default Spinner;
