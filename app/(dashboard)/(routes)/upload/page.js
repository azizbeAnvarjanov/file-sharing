"use client";
import { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import generateRandomString from "../../../_utils/GenerateRandomString";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../../../firebaseConfig";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";



const Upload = () => {
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const route = useRouter();

  const uploadFile = (file) => {
    const storageRef = ref(storage, `file-upload/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      progress === 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveInfo(file, downloadURL);
        });
    });
  };




  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "uploadFile", docId), {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      userEmail: user.primaryEmailAddress.emailAddress,
      userName: user.fullName,
      password: "",
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
    });
    getDocId(docId);
  };


  const getDocId = (id) => {
    console.log(id);
    setTimeout(() => {
      route.push('/file-preview/' + id);
    }, 500);
  };
  
  useEffect(() => {
    setProgress(null);
  },[progress == 100]);
  

  


  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start <strong className="text-primary">Uploading</strong> File and{" "}
        <strong className="text-primary">Share</strong> it
      </h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
};

export default Upload;
