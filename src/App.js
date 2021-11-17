import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {FeedPage} from './pages/FeedPage';
import {ProfilePage} from './pages/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/profile/:id' element={<ProfilePage />} />
          <Route path="*" element={<FeedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
