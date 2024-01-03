import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioListPage from './pages/PortfolioListPage';
import ExperiencePage from './pages/ExperiencePage';
import NotFoundPage from './pages/NotFoundPage';

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

function App() {
  return (
    <BrowserRouter>
      <div className="App">       
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="" element={<HomePage />} />
              <Route path="portfolio" element={<Navigate to="/portfolio/websites" replace />} />
              <Route path="portfolio/:category" element={<PortfolioListPage />} />
              <Route path="skills" element={<ExperiencePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
