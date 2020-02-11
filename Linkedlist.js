class _Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  };
};


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  };

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  };

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let tempNode = this.head;

    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    };

    tempNode.next = new _Node(item, null);
  };

  insertBefore(beforeItem, item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && currNode.value !== beforeItem) {
      prevNode = currNode;
      currNode = currNode.next;

      prevNode.next = new _Node(item, currNode);
    }

  }

  insertAfter(afterItem, item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.find(afterItem);

    if (currNode === null) {
      this.insertLast(item)
      return;
    }

    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, index) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currNode = this.head;
    let currPosition = 1;

    while (currPosition < index - 1) {
      currNode = currNode.next;
      currPosition++;
    };

    currNode.next = new _Node(item, currNode.next);
  }

  find(item) {
    //Start at the head
    let currNode = this.head;

    //If the list is empty
    if (!this.head) {
      return null;
    };

    // Check for the item
    while (currNode.value !== item) {
      // return null if its the end of the list & the item is not on the list
      if (currNode.next === null) {
        return null;
      }

      // keep looking
      currNode = currNode.next;

    };

    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }

    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    // Start at the head
    let currNode = this.head;

    // Keep track of previous
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    prevNode.next = currNode.next;
  }

  // prints the list items 
  printList() {
    var curr = this.head;
    var str = "";

    while (curr) {
      str = str + curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

module.exports = LinkedList;