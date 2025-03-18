import React, { useState } from 'react';

function Folder({ tree, handleInsertNode }) {
  const [showFolder, setShowFolder] = useState({
    isFolder: false,
    isFile: false,
  });

  function handleShowFolder() {
    setShowFolder({
      isFolder: true,
      isFile: false,
    });
  }

  function handleShowFile() {
    setShowFolder({
      isFolder: false,
      isFile: true,
    });
  }

  function handleRemoveFocus() {
    setShowFolder({
      isFolder: false,
      isFile: false,
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleInsertNode(tree.id, e.target.value, showFolder.isFolder);
      handleRemoveFocus();
    }
  }

  return (
    <div className="name ml-4 px-2 py-1 bg-gray-400">
      <div
        className={`title ${
          tree.isFolder ? 'bg-yellow-200' : ''
        } px-2 flex justify-between items-center`}
      >
        <div className="title__name">
          <span>{tree.isFolder ? 'Folder> ' : 'File>'}</span>
          <span>{tree.name}</span>
        </div>

        {tree.isFolder ? (
          <div className="actions flex gap-2">
            <button
              className="px-1 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600"
              onClick={handleShowFolder}
            >
              +Folder
            </button>
            <button
              className="px-1 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600"
              onClick={handleShowFile}
            >
              +File
            </button>
          </div>
        ) : null}
      </div>

      {showFolder.isFolder && (
        <div className="py-2">
          <input
            type="text"
            placeholder="Enter folder name"
            onKeyDown={handleKeyDown}
            onBlur={handleRemoveFocus}
            className="p-1"
            autoFocus
            required
          />
        </div>
      )}
      {showFolder.isFile && (
        <div className="py-2">
          <input
            type="text"
            placeholder="Enter file name"
            onKeyDown={handleKeyDown}
            className="p-1"
            onBlur={handleRemoveFocus}
            autoFocus
            required
          />
        </div>
      )}

      <ul className="ml-4">
        {tree.items.map((item) => (
          <Folder
            key={item.id}
            tree={item}
            handleInsertNode={handleInsertNode}
          />
        ))}
      </ul>
    </div>
  );
}

export default Folder;
