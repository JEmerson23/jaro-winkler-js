const { jaroWinkler } = require("../index");
const wordList = require("node:fs")
  .readFileSync("./tests/wordList.txt.txt", "utf-8")
    .split('\n')

const WL_LEN = wordList.length
const TARGET_INDEX = parseInt(Math.random()*WL_LEN)
const target = wordList[TARGET_INDEX]

console.log(
  `[target: "${target}",  index: ${TARGET_INDEX}, area: ${WL_LEN}]`)


console.time("JWST");
for(let i = 0; i < WL_LEN; i++) {
  if(jaroWinkler(target, wordList[i]) >= 0.99) break
}
console.timeEnd("JWST");