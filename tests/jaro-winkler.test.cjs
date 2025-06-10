const assert = require("node:assert")
const {jaroWinkler} = require("../index")

/* TESTS --------------------------------------------------------------------*/

const tst = {
  label: "test",
  index: 0,
  ok() {
    console.log(`[${this.label} ${this.index}: ok]`)
    this.index++
  }
};

// returns type
assert.ok(typeof jaroWinkler("Tomate", "Tomate") === "number",
   "did not return a value of type Number")
tst.ok()

// returns values
{ 
  const paramsList = [
    ["banana", "anna"], ["lucas", "sinuca"],
    ["coelho", "cha"], ["uva", "ovo"],
    ["peixe", "baleia"], ["rua", "rua"],
    ["oceano", "oseando"], ["leite", "deite"],
    ["cardiologista", "cadologista"], ["jarro", "jarra"]
  ]

  for(let p of paramsList) {
    resultTest(jaroWinkler(p[0], p[1]))
  }

  function resultTest(res) {
    assert.ok(res >= 0.0 || res <= 1.0, 
      "returned a larger number value than expected"
    )
  }
  tst.ok()
}

assert.strictEqual(jaroWinkler("banana", "prime"), 0.0,
  "must return 0 for Strings that have no matching characters")
tst.ok()

assert.ok(jaroWinkler("banana", "print") > 0.0, 
  "must return a value greater than 0.0 because it has at least one character match")
tst.ok()

assert.ok(jaroWinkler("banana", "print") < 1.0, 
  "should return a value less than 1.0 because it is not the same word but has some matching characters")
tst.ok()

// time
console.log("> time test:");
console.log("'telephone' X 'microwave' :", jaroWinkler("telephone","microwave"))
console.time("jaroWinkler-time");
jaroWinkler("telephone","microwave")
console.timeEnd("jaroWinkler-time");
tst.ok()