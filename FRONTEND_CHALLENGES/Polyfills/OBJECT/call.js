const obj1 = {
  name: 'ranuj choudhary',
};
const obj2 = {
  name: 'raneesh choudhary',
};

function myCallPolyfill(context, ...args) {
  // insert function in context in runtime
  if (typeof this !== 'function') {
    throw new Error('Context is not a function');
  }
  context.func = this;
  //  pass the arguments to added function to context on runtime
  context.func(...args);
}

Function.prototype.myCall = myCallPolyfill;

function fullName(age) {
  console.log(age);
  console.log(this.name);
}

fullName.myCall(obj2, 34);
