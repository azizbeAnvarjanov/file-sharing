import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-3 bg-gray-600 rounded-full h-5 overflow-hidden">
      <div
        className="text-white transition-all h-full flex items-center justify-center bg-primary "
        style={{ width: `${progress}%` }}
      >
        {progress < 100 ? (
          <p className="text-center text-sm text-white">
            Uploading... {Math.floor(progress)}%
          </p>
        ) : (
          <p className="text-center  text-sm text-white">
            Upload Completed
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
