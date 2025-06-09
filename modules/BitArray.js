class BitArray {
  #_SIZE_
  #_LEN_
  #_storage_
  constructor(size) { // teste
    this.#_LEN_ = size ?? 0;
    this.#_SIZE_ = Math.ceil(size / 32);
    this.#_storage_ = new Uint32Array(this.#_SIZE_);
  }

  get length() {
    return this.#_LEN_;
  }

  *[Symbol.iterator]() {
    let i = 0;
    while(i < this.#_LEN_) {
      yield this.get(i);
      i++;
    }
  }

  get(index) { // read bit
    return (this.#_storage_[Math.floor(index / 32)] >> index % 32) & 1;
  }

  set(bit, index) { // change value
    if(bit) this.#_storage_[0] |= (1 << index);
    else this.#_storage_[0] &= ~(1 << index);
  }

  invert(index) { // invert bit
    this.#_storage_[0] ^= (1 << index);
  }

  toString() {
    let result = '[';

    for(let i = this.#_LEN_-1; i >= 0; i--) result += this.get(i);

    return result + ']';
  }
}

export default BitArray;