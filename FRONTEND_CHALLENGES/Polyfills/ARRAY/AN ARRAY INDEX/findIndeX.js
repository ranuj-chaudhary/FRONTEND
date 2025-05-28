/*
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

SATIFIES RETURNS: index
NOT FOUND RETURNS: -1
*/

Array.prototype.findIndex = function (callback) {
  if (!callback) {
    throw new TypeError('callback must be a function');
  }

  let index = -1;
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i])) {
      index = i;
      break;
    }
  }

  return index;
};
