
/*
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)

SATIFIES RETURNS: index
NOT FOUND RETURNS: -1
*/

Array.prototype.lastIndexOf = function (
    element,
    fromIndex = this.length - 1
  ) {
    for (let i = fromIndex; i >= 0; i--) {
      if (this[i] === element) {
        return i;
      }
    }
    return -1;
  };
 