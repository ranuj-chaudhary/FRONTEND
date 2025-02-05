import React, { useRef, useState, useSyncExternalStore } from 'react';

const FileUploadAndPreview = () => {
  const [files, setFile] = useState([]);
  const uploadRefrence = useRef();

  function handleProgress(event) {
    console.log(event.loaded);
    console.log(event.total);
  }

  function handleSuccess(req) {
    console.log(req.status);
  }

  function handleError(e) {}

  function handleAbort(e) {
    console.log('Failed upload file and aborted...');
  }

  function handlUploadFile(e) {
    e.preventDefault();
    const file = uploadRefrence.current.files[0];
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append('image', file);
    console.log(formData);
    // const xhr = new XMLHttpRequest();
    // xhr.upload.addEventListener('progress', handleProgress, false);
    // xhr.addEventListener('load', handleSuccess, false);
    // xhr.addEventListener('error', handleError, false);
    // xhr.addEventListener('abort', handleAbort, false);

    // // open xhr request
    // xhr.open('POST', 'http://localhost:8000/upload');
    // xhr.send(formData);
  }
  return (
    <div className="file-upload">
      <input
        type="file"
        name="file"
        id="file-input"
        ref={uploadRefrence}
        onChange={handlUploadFile}
      />
    </div>
  );
};

export default FileUploadAndPreview;
