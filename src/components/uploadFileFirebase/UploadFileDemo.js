import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { storage } from "../../firebase";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

const UploadFileDemo = () => {
  let [file, setFile] = useState(null);
  let [images, setImages] = useState([]);

  let handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  let imageRef = ref(storage, "photos");
  let storageRef = ref(storage, "photos/image1");
  let handleFileUpload = () => {
    uploadBytes(storageRef, file).then(console.log("Uploaded"));
  };
  const [value, loading, error] = useDownloadURL(storageRef);
  useEffect(() => {
    listAll(imageRef)
      .then(function (result) {
        result.items.forEach(function (imageRef) {
          // And finally display them
          console.log(imageRef);
          displayImage(imageRef);
        });
      })
      .catch(function (error) {
        // Handle any errors
      });

    function displayImage(imageRef) {
      getDownloadURL(imageRef)
        .then(function (url) {
          // TODO: Display the image on the UI
          // console.log(url);
          setImages((prevData) => [...prevData, url]);
        })
        .catch(function (error) {
          // Handle any errors
          console.log(error.message);
        });
    }
  }, []);

  return (
    <div className="border border-red-500 h-[500px] ">
      <p> Upload File Demo</p>
      <div className="flex h-[100px] w-[300px] items-center flex-col ml-auto mr-auto overflow-hidden gap-5 ">
        <input
          type="file"
          onChange={(e) => {
            handleFileChange(e);
          }}
          className="w-full"
        />
        <button
          className="border px-5 py-2 bg-slate-200 rounded-sm"
          onClick={handleFileUpload}
        >
          Upload File
        </button>{" "}
      </div>
      <div className="h-[100px] w-[100px]">
        {" "}
        {images?.map((image) => {
          return <img src={image} className="w-full" />;
        })}
      </div>
    </div>
  );
};

export default UploadFileDemo;
