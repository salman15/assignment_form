import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

/**
 * ideas
 * fade in text when validation fails with requirement
 * assemble link from array
 */

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
