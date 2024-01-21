import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import NavigationBar from './components/NavigationBar';
import ScrollToAnchor from './ScrollToAnchor';
import Socials from './components/Socials';

function App() {
  return (
    <header>
      <div className="flex justify-center">
        {/* Fragment */}
        <Router>
          <ScrollToAnchor />
          <NavigationBar />
          <Socials />
          <Routes>
            {/* Make sure only one route shown at a time */}
            {/* Content inswitch depends on the route */}
            <Route path="/">
              <Route index={true} path="" element={<HomePage />} />
              <Route index={true} path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </header>
  )
}

export default App
