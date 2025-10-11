class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }
  addEdge(v1, v2) {
    // cannot add vertex among same vertex
    if (v1 === v2) return false;

    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      console.error(
        `Both vertices must exist before adding an edge: "${v1}", "${v2}"`
      );
      return false;
    }
    // Add edges if not already present

    [
      [v1, v2],
      [v2, v1],
    ].forEach(([a, b]) => {
      if (!this.adjacencyList[a].includes(b)) {
        this.adjacencyList[a].push(b);
      }
    });
    return true;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
      return true;
    }
    return false;
  }
  removeVertex(vertexToRemove) {
    if (!this.adjacencyList[vertexToRemove]) return undefined;
    while (this.adjacencyList[vertexToRemove].length > 0) {
      const removedVertex = this.adjacencyList[vertexToRemove].pop();
      this.removeEdge(vertexToRemove, removedVertex);
    }
    delete this.adjacencyList[vertex];
    return true;
  }
}

const mygragh = new Graph();

mygragh.addVertex("ranuj");
mygragh.addVertex("raneesh");
mygragh.addVertex("amisha");
mygragh.addVertex("tanya");
mygragh.addEdge("tanya", "amisha");
mygragh.addEdge("raneesh", "ranuj");
mygragh.addEdge("amisha", "raneesh");
mygragh.addEdge("raneesh", "amisha");
mygragh.removeEdge("raneesh", "amisha");
mygragh.addEdge("tanya", "amisha");
mygragh.addVertex("rajat");
mygragh.addEdge("tanya", "rajat");
mygragh.addEdge("rajat", "amisha");
mygragh.addEdge("raneesh", "rajat");
mygragh.addEdge("ranuj", "rajat");
mygragh.addEdge("ranuj", "amisha");
mygragh.addEdge("mother", "ranuj");

console.log(JSON.stringify(mygragh));
