import React, { useState } from "react";
import ShortUrl from "./ShortUrl";
import FilePassword from "./FilePassword";
import SendEmailForm from "./SendEmailForm";


const FileShareForm = ({ file }) => {

  const [passwordActive, setPasswordActive] = useState("");

  return (
    <div className="h-[50vh] px-6">
      <div>
        <label>Short Url</label>
        <ShortUrl file={file} />
        <div class="flex items-center mt-4">
          <input
            id="link-checkbox"
            type="checkbox"
            onChange={() => setPasswordActive(!passwordActive)}
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="link-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enable password
            .
          </label>
        </div>
        {passwordActive && <FilePassword />}
        {/* <FilePassword /> */}
        <SendEmailForm />
      </div>
    </div>
  );
};

export default FileShareForm;
