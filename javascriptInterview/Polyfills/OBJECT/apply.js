const obj1 = {
  name: 'ranuj choudhary',
};
const obj2 = {
  name: 'raneesh choudhary',
};

function myApplyPolyfill(context, args) {
  // insert function in context in runtime
  if (typeof this !== 'function') {
    throw new Error('Context is not a function');
  }
  context.func = this;
  //  pass the arguments to added function to context on runtime
  context.func(...args);
}

Function.prototype.myApply = myApplyPolyfill;

function fullName(age, city) {
  console.log(
    `Hi I am ${this.name.toUpperCase()}. I am ${age} years old and my Home Town is ${city.toUpperCase()}.`
  );
}

fullName.myApply(obj2, [33, 'Meerut']);
