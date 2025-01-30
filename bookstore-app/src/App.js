import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<PrivateRoute><Books /></PrivateRoute>} />
        <Route path="/books/:id" element={<PrivateRoute><BookDetail /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;