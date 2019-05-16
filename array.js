// imports files
const mem = require("./Memory");
// above file contains class, need to create an instance of the class
// with the same name; only necessary when importing classes
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    // private attribute; should not be accessed the scope of the class
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error("index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("index error");
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("index error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(1);
//   arr.push(2);
//   arr.push(3);
//   arr.push(1);
//   arr.push(2);
//   arr.push(3);
//   arr.push(1);
//   arr.push(2);
//   arr.push(3);

  // while (arr.length) {
  //   arr.pop();
  // }
  // arr.push("tauhida");
  console.log(arr);
  // console.log(arr.get(0));
}

main();

// 2) Explore the push() method

// Array { length: 1, _capacity: 3, ptr: 0 }

// Array { length: 6, _capacity: 12, ptr: 3 }

// 3) Explore the pop() method

// Array { length: 3, _capacity: 12, ptr: 3 }

// 4) Understanding more about how arrays work

// console.log(arr.get(0));
// the result is NaN; could this be because of typing issues?

// resize allocates extra space for future array elements
