import React from 'react';
import { BookOpen, Users, Share2, Download, Globe, Lock, Upload } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About NoteNest</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering students to share knowledge and collaborate through seamless note sharing
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              NoteNest helps students collaborate by sharing notes and learning materials easily.
              We believe that knowledge should be accessible to everyone, and that students learn
              best when they can share their insights and perspectives with each other.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 text-blue-600">
                <BookOpen className="h-6 w-6" />
                <span className="text-lg font-semibold">Store. Share. Study Smarter.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How NoteNest Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Notes</h3>
              <p className="text-gray-600">
                Easily upload your study notes in PDF format with detailed descriptions and subject categorization.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Knowledge</h3>
              <p className="text-gray-600">
                Choose to make your notes public to help others or keep them private for personal use.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download & Study</h3>
              <p className="text-gray-600">
                Access and download notes from fellow students to enhance your learning experience.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Public & Private Notes</h3>
              </div>
              <p className="text-gray-600">
                Control your note visibility. Share publicly to help the community or keep notes private for personal study.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Subject Organization</h3>
              </div>
              <p className="text-gray-600">
                Organize notes by subject and use powerful search and filter tools to find exactly what you need.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Community Driven</h3>
              </div>
              <p className="text-gray-600">
                Join a community of students helping each other succeed through collaborative learning.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Secure & Reliable</h3>
              </div>
              <p className="text-gray-600">
                Your notes are stored securely with user authentication and privacy controls you can trust.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">
            Join thousands of students who are already using NoteNest to improve their studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Create Account
            </a>
            <a
              href="/all-notes"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Browse Notes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;