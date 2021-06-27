import React, { useState, useEffect } from "react";
import FileCard from "./FileCard";
import FileItem from "./FileItem";
import "../../styles/FilesView.css";
import { db } from "../../firebase";

const FilesViews = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);

  console.log(files);

  return (
    <div className="fileView">
      <div className="fileView__row">
        {files.slice(0, 3).map(({ id, item }) => (
          <FileCard name={item.caption} />
        ))}
      </div>

      <div className="fileView__title">
        <div className="fileView__title--left">
          <p>Name</p>
        </div>

        <div className="fileView__title--right">
          <p>Last Modified</p>
          <p>File Size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
};

export default FilesViews;
