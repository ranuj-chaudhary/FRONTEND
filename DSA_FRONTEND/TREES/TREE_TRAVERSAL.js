 class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
 }

 class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        if(typeof val !== 'number'){
            console.error('only number type params are allowed')
            return undefined;
        }
        const newdNode = new Node(val);
        if(!this.root){
            this.root = newdNode;
            return this;
        }

        let temp = this.root;
        
        while(true){
            
            if(val < temp.val){
                if(!temp.left){
                    temp.left = newdNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if(!temp.right){
                    temp.right = newdNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(val){
        let temp = this.root;

        while(temp){
            if(temp.val === val) return true;
            if(val < temp.val){
                temp = temp.left;
            } else {
                temp = temp.right
            }
        }
        return false;
    }
 }

 const tree = new BinaryTree();
 tree.insert(50)
 tree.insert(20)
 tree.insert(55)
 tree.insert(10)
 tree.insert(30)
 tree.insert(75)
 tree.insert(62)



function BreadFirstSearch(root){
   
    const queue = [] ;
    queue.push(root);
    let result = [];

    while(queue.length !== 0){
        const currentNode = queue.shift()
        result.push(currentNode.val);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }
   
    return result;
}
// BreadFirstSearch(tree.root)
// root left right
function DepthFirstPreOrder(currentNode){
    let result = []
    function traverse(currentNode){
    result.push(currentNode.val)
    if(currentNode.left) traverse(currentNode.left)
    if(currentNode.right) traverse(currentNode.right)
    }
    traverse(currentNode)
    return result;
}

function DepthFirstInOrder(currentNode){
    let result = []
    function traverse(currentNode){
    if(currentNode.left) traverse(currentNode.left)
        result.push(currentNode.val)
    if(currentNode.right) traverse(currentNode.right)
    }
    traverse(currentNode)
    return result;
}

function DepthFirstPostOrder(currentNode){
    let result = []
    function traverse(currentNode){
    if(currentNode.left) traverse(currentNode.left, result)
    if(currentNode.right) traverse(currentNode.right, result)
    result.push(currentNode.val)
    }
    traverse(currentNode)
    return result;
 }

const preOrder = []
const inOrder = []
const postOrder = []

console.log(DepthFirstPreOrder(tree.root, ));
console.log(DepthFirstInOrder(tree.root));
console.log(DepthFirstPostOrder(tree.root));
