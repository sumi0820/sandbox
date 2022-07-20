import { VFC } from 'react';
import { Route, Routes } from 'react-router';

import Home from 'components/pages/Home';
import Auth from 'components/pages/Auth';
import Header from 'components/atoms/Header';
import Others from 'components/pages/Others';

const App: VFC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/others" element={<Others />} />
    </Routes>
  </>
);

export default App;
