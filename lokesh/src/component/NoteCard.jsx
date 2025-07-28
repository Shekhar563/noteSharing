import React from 'react';
import { Download, FileText, Calendar, User } from 'lucide-react';

const NoteCard = ({ note, showUploader = true, onDownload }) => {
  const handleDownload = () => {
    if (onDownload) {
      onDownload(note);
    } else {
      // In a real app, this would download the actual file
      alert('Download functionality would be implemented here');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{note.title}</h3>
        </div>
        {!note.isPublic && (
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
            Private
          </span>
        )}
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{note.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          {note.subject}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-4">
          {showUploader && (
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{note.uploaderName}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{note.uploadDate}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{note.fileName}</span>
        <button
          onClick={handleDownload}
          className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
