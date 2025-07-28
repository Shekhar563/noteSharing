import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">NoteNest</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/all-notes"
              className={`transition-colors duration-200 ${
                isActive('/all-notes') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              All Notes
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className={`transition-colors duration-200 ${
                    isActive('/dashboard') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-800">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/all-notes"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-200 ${
                  isActive('/all-notes') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                All Notes
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-200 ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                About
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors duration-200 ${
                      isActive('/dashboard') ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-800">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
