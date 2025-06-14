import BitArray from "./BitArray.js"

const {min, max} = Math;

/*
* @param {string} str1 - string.
* @param {string} str2 - string.
* @returns {float} A float Number between 0 and 1.
*/
function jaro(str1, str2) {
  if(str1 === str2) return 1;

  const S1_LEN = str1.length, S2_LEN = str2.length;
  const str1Matches = new BitArray(S1_LEN), str2Matches = new BitArray(S2_LEN);
  let matches = 0 , transposition = 0;

  { // correspondencias
    const MATCH = parseInt(max(max(S1_LEN, S2_LEN) / 2 - 1, 0));

    if(MATCH === 0) return 0;

    let y = 0 , x = 0, start = 0, end = 0;
    for(; y < S1_LEN; y++) {
      x = start = max(0, y - MATCH);
      end = min(y + MATCH + 1, S2_LEN);

      for(; x < end; x++) {
        if(str2Matches[x] || str1[y] !== str2[x]) continue;

        str1Matches[y] = str2Matches[x] = true;
        matches++;
        break;
      }
    }
  }
  
  if(matches === 0) return 0;

  // transposição
  for(let i = 0, k = 0; i < S1_LEN; i++) {
    if(!str1Matches[i]) continue;

    while(k < S2_LEN && !str2Matches[k]) k++;

    if(str1[i] !== str2[k]) transposition++;

    k++;
  }

  return (1.0 / 3.0) * (matches / S1_LEN + matches / S2_LEN + ((matches - transposition) / matches));
}

export default jaro;