// src/components/Directory.js
import React from 'react';

const Directory = () => {
  return (
    <div className="flex flex-wrap mt-4">
      {/* Directory content goes here */}
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">College 1</h3>
          {/* College details go here */}
        </div>
      </div>
      {/* Add more directory items as needed */}
    </div>
  );
};

export default Directory;
