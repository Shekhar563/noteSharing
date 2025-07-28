import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, BookOpen, Users, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotes } from '../context/NotesContext';
import NoteCard from '../component/NoteCard';

const Dashboard = () => {
  const { user } = useAuth();
  const { getUserNotes, getPublicNotes } = useNotes();

  const userNotes = getUserNotes(user?.id || '');
  const publicNotes = getPublicNotes().slice(0, 4); // Show only first 4 public notes

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-blue-100 mb-4">
            Ready to share your knowledge or discover new notes from your peers?
          </p>
          <Link
            to="/upload"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <Plus className="h-5 w-5" />
            <span>Share New Notes</span>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Your Notes</p>
                <p className="text-2xl font-bold text-gray-900">{userNotes.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Public Notes</p>
                <p className="text-2xl font-bold text-gray-900">{publicNotes.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Shared Notes</p>
                <p className="text-2xl font-bold text-gray-900">
                  {userNotes.filter(note => note.isPublic).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Notes Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Notes</h2>
            <Link
              to="/upload"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Add New Note
            </Link>
          </div>
          
          {userNotes.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notes yet</h3>
              <p className="text-gray-600 mb-4">
                Share your first note with the community and start building your collection.
              </p>
              <Link
                to="/upload"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>Upload Your First Note</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userNotes.map((note) => (
                <NoteCard key={note.id} note={note} showUploader={false} />
              ))}
            </div>
          )}
        </div>

        {/* Recent Public Notes Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Public Notes</h2>
            <Link
              to="/all-notes"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Notes
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {publicNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;