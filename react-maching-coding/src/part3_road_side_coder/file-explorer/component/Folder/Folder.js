import React, { useState } from "react";
import "./Folder.css";
const Folder = ({ handleInsertNode = () => {}, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });

  function handleInput(e) {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        isVisible: false,
        ...showInput,
      });
    }
  }

  function handleAddFolder(e) {
    e.stopPropagation();
    setShowInput({
      isVisible: true,
      isFolder: true,
    });
  }

  function handleAddFile(e) {
    e.stopPropagation();
    setShowInput({
      isVisible: true,
      isFolder: false,
    });
  }
 
  if (explorer.isFolder) {
    return (
      <div className="directory">
        <div className="directory__folder">
          <span className="directory__name">📁 {explorer.name}</span>
          <div>
            <button className="btn " onClick={(e) => handleAddFolder(e)}>
              Folder +
            </button>
            <button className="btn " onClick={(e) => handleAddFile(e)}>
              File +
            </button>
          </div>
        </div>

        {
          <div style={{ display: "flex", flexDirection: "column" }}>
            {showInput.isVisible && (
              <div className="input">
                <span>{showInput.isFolder ? "📂" : "📹"}</span>
                <input
                  type="text"
                  onBlur={() =>
                    setShowInput({ ...showInput, isVisible: false })
                  }
                  onKeyDown={handleInput}
                  autoFocus
                />
              </div>
            )}
            {explorer.items.map((ob) => (
              <Folder
                explorer={ob}
                key={ob.id}
                handleInsertNode={handleInsertNode}
              />
            ))}
          </div>
        }
      </div>
    );
  } else {
    return <span>📹{explorer.name}</span>;
  }
};

export default Folder;
