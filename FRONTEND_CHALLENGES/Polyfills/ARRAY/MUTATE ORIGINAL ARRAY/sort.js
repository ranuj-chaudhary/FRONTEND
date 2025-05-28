

Array.prototype.sort = function(compareFn) {
    if (!compareFn) {
      compareFn = function(a, b) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFn(this[i], this[j]) > 0) {
          let temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
