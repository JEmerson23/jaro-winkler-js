/* !warning!
  The BitArray class is not fully developed in terms of robustness and 
    broader functionality. Since its use in this project is solely 
      for optimization purposes, a minimalist and straightforward approach was
        considered the most appropriate."
*/
class BitArray {
  #_SIZE_
  #_LEN_
  #_storage_
  /* 
  * @param {int} size - Amount of bits in the array.
  */
  constructor(size) { // teste
    this.#_LEN_ = size ?? 0;
    this.#_SIZE_ = Math.ceil(size / 32);
    this.#_storage_ = new Uint32Array(this.#_SIZE_);
  }

  /* 
  * @returns {int} BitArray length.
  */
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

  /*
  * @param {int} index - Bit value index.
  * @returns {int} A bit 0 or 1.
  */
  get(index) { // read bit
    return (this.#_storage_[Math.floor(index / 32)] >> index % 32) & 1;
  }

  /*
  * @param {boolean} | {int} bit - Bit new value.
  * @param {int} index - Old bit value index.
  */
  set(bit, index) { // change value
    if(bit) this.#_storage_[0] |= (1 << index);
    else this.#_storage_[0] &= ~(1 << index);
  }

  /*
  * @param {int} index - New bit value index.
  */
  invert(index) { // invert bit
    this.#_storage_[0] ^= (1 << index);
  }

  /*
  * @returns {string} BitArray in string format.
  */
  toString() {
    let result = '[';

    for(let i = this.#_LEN_-1; i >= 0; i--) result += this.get(i);

    return result + ']';
  }
}

export default BitArray;