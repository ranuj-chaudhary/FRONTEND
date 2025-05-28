// ★ includes(): Check if an element exists in an array or not.

// This polyfill checks if an element exists in an array using a for loop.
// It iterates through the array and compares each element with the given value.
// If a match is found, it returns true; otherwise, it returns false.
// The second argument is the starting index from where the search begins.
// If not provided, it defaults to 0.



// Polyfill for Array.prototype.includes() method

/*
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

SATIFIES RETURNS: true
NOT FOUND RETURNS: false
*/

Array.prototype.includes = function (element, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === element) {
        return true;
      }
    }
    return false;
  };
 