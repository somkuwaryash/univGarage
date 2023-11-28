// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Directory from './components/Directory';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-4 py-6">
            {/* Your main content goes here */}
            <h1 className="text-2xl font-semibold text-gray-800">Welcome to Degreease</h1>
            <Directory />
            {/* Add more content as needed */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
