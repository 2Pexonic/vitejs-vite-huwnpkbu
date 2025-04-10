import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LoanApplication from './pages/LoanApplication';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home.jsx';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard/*"
              element={
                <div className="flex w-full">
                  <Sidebar />
                  <div className="flex-1 p-8">
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="apply" element={<LoanApplication />} />
                      <Route path="profile" element={<Profile />} />
                      <Route path="wallet" element={<Wallet />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;