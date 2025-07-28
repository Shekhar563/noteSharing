import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, Globe, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotes } from '../context/NotesContext';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const { addNote } = useNotes();
  const navigate = useNavigate();

  const subjects = [
    'Computer Science',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'History',
    'Economics',
    'Psychology',
    'Other'
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
        setError('');
      } else {
        setError('Please select a PDF file');
        setFile(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !description || !subject || !file) {
      setError('Please fill in all fields and select a PDF file');
      return;
    }

    setIsLoading(true);

    try {
      const fileUrl = URL.createObjectURL(file);

      addNote({
        title,
        description,
        subject,
        fileName: file.name,
        fileUrl,
        isPublic,
        uploadedBy: user?.id || '',
        uploaderName: user?.name || ''
      });

      navigate('/dashboard');
    } catch (err) {
      setError('Failed to upload note. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Notes</h1>
            <p className="text-gray-600">
              Help your fellow students by sharing your knowledge and study materials
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Note Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter a descriptive title for your notes"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe what topics these notes cover and what makes them helpful"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a subject</option>
                {subjects.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                Upload PDF File *
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <div className="mx-auto h-12 w-12 text-gray-400">
                    {file ? (
                      <FileText className="h-12 w-12" />
                    ) : (
                      <Upload className="h-12 w-12" />
                    )}
                  </div>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>{file ? 'Change file' : 'Upload a file'}</span>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    {file ? file.name : 'PDF files only, up to 10MB'}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Visibility *
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    id="public"
                    name="visibility"
                    type="radio"
                    checked={isPublic}
                    onChange={() => setIsPublic(true)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="public" className="ml-3 flex items-center cursor-pointer">
                    <Globe className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Public</div>
                      <div className="text-xs text-gray-500">Anyone can view and download these notes</div>
                    </div>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="private"
                    name="visibility"
                    type="radio"
                    checked={!isPublic}
                    onChange={() => setIsPublic(false)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="private" className="ml-3 flex items-center cursor-pointer">
                    <Lock className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Private</div>
                      <div className="text-xs text-gray-500">Only you can view and download these notes</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? 'Uploading...' : 'Share Notes'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;