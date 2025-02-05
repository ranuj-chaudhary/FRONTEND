import { useEffect, useState } from 'react';
import './App.css';
// import PdfViewer from './sangam_mukherjee_part2/14.PdfViewer/PdfViewer';
// import FormValidation from './sangam_mukherjee_part2/12.FormValidation/FormValidation';
// import FileUploadAndPreview from './sangam_mukherjee_part2/13.FileUploadAndPreview/FileUploadAndPreview';
// import ScrollTracker from './react_machine_coding/useThrottle/ScrollTracker';
import ParentComponent from './react-hooks/useCallBack';
function App() {
  return (
    <div className="app">
      <div className="app">
        {/* <FormValidation /> */}
        {/* <FileUploadAndPreview /> */}
        {/* <PdfViewer /> */}
        {/* <ScrollTracker /> */}
        <ParentComponent />
      </div>
    </div>
  );
}

export default App;
