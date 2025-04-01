import React, { useState } from 'react';
import tree from './folderStructure.json';
import Folder from './Folder';
import useTraverseHook from './hook/useTraverseHook';

const Explorer = () => {
  const [explorer, setExplorer] = useState(tree);
  const { insertNode } = useTraverseHook();

  function handleInsertNode(id, item, isFolder) {
    const finalTree = insertNode(explorer, id, item, isFolder);
    setExplorer(finalTree);
  }

  return (
    <div className="ml-4 w-96 p-2 bg-slate-300">
      <Folder tree={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
};

export default Explorer;
