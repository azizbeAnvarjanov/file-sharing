import Image from "next/image";
import React from "react";
import { Paperclip, X } from "lucide-react";

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="flex items-center justify-between mt-5 border p-2 px-4 border-blue-400 rounded-md">
      <div className="p-2 gap-4 flex items-center">
        <Paperclip className="w-6 h-6 text-primary" />
        <div className="text-left">
          <h2>{file.name}</h2>
          <h2 className="text-sm text-gray-500">
            {file.type} / {(file.size / 1024 / 1024).toFixed(2)} MB
          </h2>
        </div>
      </div>
      <X className="text-red-500 cursor-pointer" onClick={() => removeFile()}/>
    </div>
  );
};

export default FilePreview;
