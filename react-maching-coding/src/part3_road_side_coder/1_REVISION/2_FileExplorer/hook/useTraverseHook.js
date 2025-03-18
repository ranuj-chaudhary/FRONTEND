import React from 'react';

const useTraverseHook = () => {
  function insertNode(tree, id, item, isFolder) {
    if (tree.id === id) {
      tree.items.unshift({
        id: new Date().toISOString(),
        name: item,
        isFolder,
        items: [],
      });
    }

    let currentNode = tree.items.map((node) =>
      insertNode(node, id, item, isFolder)
    );

    return { ...tree, items: currentNode };
  }
  return {insertNode};
};

export default useTraverseHook;
