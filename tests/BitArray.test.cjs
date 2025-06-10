const assert = require("node:assert")
const BitArray = require("../modules/BitArray.js").default
/* TESTS --------------------------------------------------------------------*/

const tst = {
  label: "test",
  index: 0,
  ok() {
    console.log(`[${this.label} ${this.index}: ok]`)
    this.index++
  }
};

const bitsSize = 10
const bits = new BitArray(bitsSize)

assert.ok(typeof bits.length === "number", 
  "the length getter must return a Number")
tst.ok()

assert.ok(bits.length === bitsSize, 
  "the length getter should return the true amount of the length of the BitArray")
tst.ok()

for(let element of bits) {
  assert(element === 0 || element === 1,
    "BitArray can only store 0 and 1")
}
tst.ok()

assert.ok(typeof bits["get"] === "function", "get must be a Function")
assert.ok(typeof bits["set"] === "function", "set must be a Function")
assert.ok(typeof bits["invert"] === "function", "invert must be a Function")
assert.ok(typeof bits["toString"] === "function", "toString must be a Function")
tst.ok()

// returns
{
  let i= 0, getRes
  while((getRes = bits.get(i++))) {
    assert.ok(typeof getRes === "number", "get should return a Number")
  }
}

assert.ok(typeof bits.toString() === "string", "toString should return a String")
tst.ok()

bits.set(true, 0)
assert.strictEqual(bits.get(0), 1, "get or set have agreement error")
tst.ok()

bits.invert(0)
assert.strictEqual(bits.get(0), 0, "inversion error")
tst.ok()