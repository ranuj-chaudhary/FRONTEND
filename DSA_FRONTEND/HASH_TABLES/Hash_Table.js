class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  hash_func(key) {
    if (typeof key !== "string") return undefined;
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
      hash = Math.floor((hash + key.charCodeAt(i) * 23) % this.dataMap.length);
    }
    return hash;
  }

  set(key, value) {
    const index = this.hash_func(key)
    if(!this.dataMap[index]){
        this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value])
    return this;
  }

  get(key){
    const index = this.hash_func(key);
    if(!this.dataMap[index]) return undefined;
   
        for(let j = 0; j < this.dataMap[index].length; j++){
            if(this.dataMap[index][j][0] === key){
                return this.dataMap[index][j][1];
            }
        }
 
    return false;
  }
  keys(){
   
    const result = []
    for(let i = 0; i < this.dataMap.length; i++){
         if(!this.dataMap[i]) continue;
        for(let j = 0; j < this.dataMap[i].length; j++){
            result.push([this.dataMap[i][j][0], this.dataMap[i][j][1]])
        }
    }
 
    return result;
  }


}

const hashObject = new HashTable();

hashObject.set("ranuj",'bit meerut' );
hashObject.set("raneesh" ,'bit meerut' );
hashObject.set("rajat" ,'miet meerut' );
hashObject.set("tanya" ,'du university' );
hashObject.set("amisha", 'allahabad university');
// console.log(JSON.stringify(hashObject))
// console.log(hashObject.get('ranuj'))
// console.log(hashObject.get('tanya'))
// console.log(hashObject.get('amisha'))
// console.log(hashObject.get('raneesh'))
// console.log(hashObject.get('akash'))
console.log(hashObject.keys())
