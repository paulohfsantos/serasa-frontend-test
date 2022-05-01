import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Form from '../views/Form';
import Header from '../components/Header';

const SystemRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default SystemRoutes;