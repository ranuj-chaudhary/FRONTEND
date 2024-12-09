const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    console.log("insert node running");
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        isFolder: isFolder,
        name: item,
        items: [],
      });
      return tree;
    }

    let currNode = tree.items.map((node) =>
      insertNode(node, folderId, item, isFolder)
    );

    return { ...tree, items: currNode };
  };

  return { insertNode };
};

export default useTraverseTree;
