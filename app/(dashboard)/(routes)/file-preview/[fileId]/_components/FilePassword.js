import React from "react";

const FilePassword = () => {
  return (
    <div className="w-full flex items-center mt-4">
      <input type="text" placeholder="Enter password" className="w-full p-3 outline-none border-blue-400 border rounded-l-lg" />
      <button className="bg-primary text-white border border-blue-600 rounded-r-md px-6 p-3">
        Copy
      </button>
    </div>
  );
};

export default FilePassword;
