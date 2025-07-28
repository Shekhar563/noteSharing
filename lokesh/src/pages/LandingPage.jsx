import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Share2, Download, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NoteNest
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Store. Share. Study Smarter.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              The ultimate platform for students to share, discover, and access class notes. 
              Collaborate with your peers and never miss important study materials again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NoteNest?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your study process with our comprehensive note-sharing platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Organized Storage
              </h3>
              <p className="text-gray-600">
                Keep all your notes organized by subject and easily accessible whenever you need them.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-600 p-3 rounded-lg w-fit mb-4">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Sharing
              </h3>
              <p className="text-gray-600">
                Share your notes with classmates or keep them private. Help others while building your reputation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-600 p-3 rounded-lg w-fit mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quick Downloads
              </h3>
              <p className="text-gray-600">
                Download notes instantly in PDF format. Study offline and never worry about internet connectivity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-orange-600 p-3 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Learning
              </h3>
              <p className="text-gray-600">
                Join a community of students helping each other succeed. Discover notes from different perspectives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-pink-600 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Subject Organization
              </h3>
              <p className="text-gray-600">
                Filter and search notes by subject, making it easy to find exactly what you're looking for.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-indigo-600 p-3 rounded-lg w-fit mb-4">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Privacy Control
              </h3>
              <p className="text-gray-600">
                Choose whether to make your notes public or keep them private. You have full control over your content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Study Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using NoteNest to study smarter, not harder.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Start Sharing Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;