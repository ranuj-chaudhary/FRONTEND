import React, { useRef, useState } from 'react';
import './FileUploadAndPreview.css';
import ProgressBar from './ProgressBar';
const FileUploadAndPreview = () => {
  const [file, setFile] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const uploadRefrence = useRef();

  function handleProgress(event) {
    const percent = Math.floor((event.loaded / event.total) * 100);
    setProgressPercent(percent);
  }

  function handleSuccess(req) {
    console.log(req);
  }

  function handleError(e) {}

  function handleAbort(e) {
    console.error('Failed upload file and aborted...');
  }

  function handlUploadFile(e) {
    e.preventDefault();
    // selected file
    const file = uploadRefrence.current.files[0];
    if (!file) return;
    setFile(URL.createObjectURL(file));

    // attach file with formdata
    let formData = new FormData();
    formData.append('file', file);

    // create xhr request
    const xhr = new XMLHttpRequest();

    // handle file upload events
    xhr.upload.addEventListener('progress', handleProgress, false);
    xhr.addEventListener('load', handleSuccess, false);
    xhr.addEventListener('error', handleError, false);
    xhr.addEventListener('abort', handleAbort, false);

    // open xhr request
    xhr.open('POST', 'http://localhost:8000/upload');

    // send formData

    xhr.send(formData);
  }

  return (
    <div className="file-upload">
      <div className="file-upload__progress">
        {progressPercent > 0 && (
          <ProgressBar progressPercent={progressPercent} />
        )}
      </div>
      {progressPercent < 100 ? (
        <input
          type="file"
          name="file"
          id="file-input"
          ref={uploadRefrence}
          onChange={handlUploadFile}
          // accept='.jpeg, .jpg, .png'
        />
      ) : (
        <p className="upload__complete">File uploaded sucessfully</p>
      )}
      {/* <div className="filename">{file ? `uploading file... ${file}` : ''}</div> */}
    </div>
  );
};

export default FileUploadAndPreview;
