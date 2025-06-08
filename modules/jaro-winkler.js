import BitArray from "./BitArray.js";

const {min, max} = Math;

function jaroWinkler(str1, str2, prefixWeigth) {
  if(str1 === str2) return 1;

  const S1_LEN = str1.length, S2_LEN = str2.length;
  const WEIGTH = prefixWeigth ?? 0.1;
  const str1Matches = new BitArray(S1_LEN), str2Matches = new BitArray(S2_LEN);
  let jaroResult;
  let matches = 0, transposition = 0, prefix = 0;

  { // correspondencias
    const MATCH = parseInt(max(max(S1_LEN, S2_LEN) / 2 - 1, 0));

    if(MATCH === 0) return 0;

    let y = 0, x = 0, start = 0, end = 0;
    for(; y < S1_LEN; y++) {
      x = start = max(0, y - MATCH);
      end = min(y + MATCH + 1, S2_LEN);

      for(; x < end; x++) {
        if(str1Matches[y] || str1[y] !== str2[x]) continue;

        str1Matches[y] = str2Matches[x] = true;
        matches++;
        break;
      }
    }
  }

  if(matches === 0) return 0;

  // transposition
  for(let i = 0, k = 0; i < S1_LEN; i++) {
    if(!str1Matches[i]) continue;

    while(k < S2_LEN && !str2Matches[k]) k++;

    if(str1[i] !== str2[k]) transposition++;

    k++;
  }

  jaroResult = 
    (1.0 / 3.0) * (matches / S1_LEN + matches / S2_LEN + (
      (matches - transposition) / matches)
    );

  { // prefix
    const PREFIX_LEN = min(4, min(S1_LEN, S2_LEN));

    for(let i = 0; i < PREFIX_LEN; i++, prefix++) {
      if(str1[i] !== str2[i]) break;
    }
  }

  return jaroResult + (prefix * WEIGTH * (1 - jaroResult));
}

export default jaroWinkler;