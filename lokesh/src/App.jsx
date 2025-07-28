import React from 'react';

import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotesProvider } from './context/NotesContext';
import Navbar from './component/Navbar';
import LandingPage from './pages/landingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import UploadPage from './pages/UploadPage';
import AllNotesPage from './pages/AllNotesPage';
import AboutPage from './pages/AboutPage';
import ProtectedRoute from './component/ProtectedRoute';

const App = () => {

    const [data, setData] = useState('');
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/v1/note') // or your actual route
        .then(res => setData(JSON.stringify(res.data)))
        .catch(err => console.log(err));
    }, []);
  

  return (
    <AuthProvider>
      <NotesProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
              <Route path="/upload" element={<ProtectedRoute> <UploadPage /> </ProtectedRoute>}/>
              <Route path="/all-notes" element={ <ProtectedRoute> <AllNotesPage /></ProtectedRoute>}/>
            </Routes>
          </div>
        </Router>
      </NotesProvider>
    </AuthProvider>
  );
}

export default App;