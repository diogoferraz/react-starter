export default class useArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    // eslint-disable-next-line no-plusplus
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // shifting itens to the left. Each means adding 1 to the index.
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }
}
