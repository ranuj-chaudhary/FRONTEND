

Array.prototype.slice = function(start, end, count) {
    if (start === undefined) {
      start = 0;
    }

    if (end === undefined) {
      end = this.length;
    }

    if (count === undefined) {
      count = end - start;
    }

    let result= [];
    for (let i = start; i < end && i < this.length; i++) {
      result.push(this[i]);
    }

    return result;
  };
