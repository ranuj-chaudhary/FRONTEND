const obj1 = {
  name: 'ranuj choudhary',
};
const obj2 = {
  name: 'raneesh choudhary',
};

function myBindPolyfill(context, ...args) {
  // insert function in context in runtime
  if (typeof this !== 'function') {
    throw new Error('Context is not a function');
  }

  context.func = this;

  return function (...others) {
     context.func(...args, ...others);
  };
}


Function.prototype.myBind = myBindPolyfill;

function fullName(age, city) {
  console.log(
    `Hi I am ${this.name.toUpperCase()}. I am ${age} years old and my Home Town is ${city.toUpperCase()}.`
  );
}

const getUserDetails = fullName.myBind(obj2);

getUserDetails(40, 'meerut');
