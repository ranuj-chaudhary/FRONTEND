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

//  console.log(JSON.stringify(tree, null, 2));

//  console.log(tree.contains(50));
//  console.log(tree.contains(20));
//  console.log(tree.contains(62));
//  console.log(tree.contains(500));
//  console.log(tree.contains(30));
//  console.log(tree.contains(75));
//  console.log(tree.contains(200));
//  console.log(tree.contains(500));

export default tree;