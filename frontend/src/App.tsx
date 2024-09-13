import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SobreNos from './pages/SobreNos';
import AdminPanel from './pages/AdminPanel';
import ManageUsers from './pages/ManageUsers';
import AddViagem from './pages/AddViagem';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/add-viagem" element={<AddViagem />} />
      </Routes>
    </Router>
  );
};

export default App;

