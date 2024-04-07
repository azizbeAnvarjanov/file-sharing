"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../../../firebaseConfig";
import Image from "next/image";
import FileInfo from "./_components/FileInfo";
import FileShareForm from "./_components/FileShareForm";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const FilePreview = ({ params }) => {
  const { fileId } = params;
  const db = getFirestore(app);
  const [file, setFile] = useState({});

  useEffect(() => {
    fileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadFile", fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  console.log(file?.fileName && "sssssss");

  return (
    <div className="p-4">
      <Link
        href={"/upload"}
        className="flex items-center gap-2 p-3 transition-all hover:bg-blue-100 rounded md:w-[20%]"
      >
        <ArrowLeft className="w-8 h-8 text-primary" />
        <h2>Go to upload new file</h2>
      </Link>
      <div className="mt-5 p-4 grid md:grid-cols-2 gap-3">
        <FileInfo file={file} />
        <FileShareForm file={file} />
      </div>
      {/* <Image src={file?.fileUrl} alt="file" width={400} height={400} /> */}
    </div>
  );
};

export default FilePreview;
