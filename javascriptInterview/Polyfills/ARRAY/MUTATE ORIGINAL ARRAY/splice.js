Array.prototype.splice = function(index, deleteCount, items) {
    if (deleteCount === undefined) {
      deleteCount = this.length - index;
    }

    let removed = [];
    for (let i = index; i < index + deleteCount; i++) {
      removed.push(this[i]);
    }

    for (let i = index; i < this.length; i++) {
      this[i] = this[i + deleteCount];
    }

    if (items !== undefined) {
      for (let i = 0; i < items.length; i++) {
        this[index + i] = items[i];
      }
    }

    return removed;
  };
