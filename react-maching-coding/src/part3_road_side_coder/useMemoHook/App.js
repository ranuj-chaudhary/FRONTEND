import { useState } from "react";
import "./App.css";
import data from "./data/explorer";
import Folder from "./component/Folder/Folder";
import useTraverseTree from "./hook/useTraverseTree";
function App() {
  const [explorer, setExplorer] = useState(data);
  const { insertNode } = useTraverseTree();

  function handleInsertNode(folderId, item, isFolder) {
    const finalTree = insertNode(explorer, folderId, item, isFolder);
    setExplorer(finalTree);
  }

  return (
    <div className="App">
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
