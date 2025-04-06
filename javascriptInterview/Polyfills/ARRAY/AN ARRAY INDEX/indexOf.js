
// indexOf(): Get the index of the first occurrence of an element in an array.
//
// This polyfill checks if an element exists in an array using a for loop.
// It iterates through the array and compares each element with the given value.
// If a match is found, it returns the index of the first occurrence; otherwise, it returns -1.

/*
indexOf(searchElement)
indexOf(searchElement, fromIndex)

SATIFIES RETURNS: index
NOT FOUND RETURNS: -1
*/

Array.prototype.indexOf = function (element, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === element) {
        return i;
      }
    }
    return -1;
  };
 