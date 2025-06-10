# jaro-winkler lib

A lightweight JavaScript library providing two powerful string similarity functions: `jaro()` and `jaroWinkler()`.
These algorithms are especially useful for fuzzy matching, typo correction, and approximate string comparison in a variety of applications such as search, NLP, or form validation.

**A more optimized version of the algorithm using bitwise operations.**

## 📦 Installation
- Using NPM
```bash
npm install --save jaro-lib
```

## ➕ Import

```javascript
import { jaro, jaroWinkler } from "jaro-winkler";
```
or
```javascript
const { jaro, jaroWinkler } = require("jaro-winkler");
```


# jaro()
The jaro() function calculates the Jaro similarity score between two strings.
  It ranges from 0.0 (completely different) to 1.0 (identical).
  It is ideal for detecting minor character changes, insertions, or swaps, and 
    is the foundation for Jaro-Winkler.

- Benefits

    - Fast and lightweight

    - Detects similarity even when characters are transposed

    - Useful for fuzzy matching in databases, name matching, and search suggestions


```javascript
// jaro(String str1, String str2)
// comparing Strings

jaro("telephone", "microwave"); // -> 0.48148148148148145
jaro("banana", "prime"); // -> 0
jaro("blockbuster","blockbuster") // -> 1

if (jaro("maria", "marcia") > 0.85) {
  console.log("Strings are very similar!");
}

```

# jaroWinkler()
```javascript
// jaroWinkler(String str1, Stirng str2, [Float prefixWeigth])
// comparing Strings

jaroWinkler("telephone", "microwave"); // -> 0.48148148148148145
jaroWinkler("banana", "prime"); // -> 0
jaroWinkler("blockbuster", "blockbuster"); // -> 1

if (jaroWinkler("maria", "marcia") > 0.85) {
  console.log("Strings are very similar!");
}
```

jaroWinkler() builds on top of jaro() by giving extra weight to common prefixes.
This makes it more sensitive to human-recognizable similarities — names, typos, or short strings.

The optional prefixWeight (default: 0.1) allows tuning how much the common prefix boosts the score.

- Benefits
  - Better accuracy in name and word matching

  - Prioritizes strings with the same start (e.g. "Michael" vs. "Micheal")

  - Great for search autocomplete and intelligent string comparison

## 🔗 Links
* 📦 [NPM](www.npmjs.com/package/jaro-lib)
* 🌐 [github repository](https://github.com/JEmerson23/jaro-winkler-js.git)

* extra:
  * ⚙️🔍 [repository with some word lists for speed tests](https://github.com/thoughtworks/dadoware)

### 📚 References & Credits

This implementation is based on the official definitions and explanations of the Jaro and Jaro–Winkler distance algorithms:
[Jaro-Winkler distance on Wikipedia](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance)

### 📄 License
This project is licensed under the MIT License.