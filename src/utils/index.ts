export function getArrayRange(from: number, to: number) {
  let array = []

  for (let index = from; index <= to; index++) {
    array.push(index)
  }

  return array
}

function editDistance(_s1: string, _s2: string) {
  let s1 = _s1.toLowerCase();
  let s2 = _s2.toLowerCase();

  let costs = new Array();

  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;

    for (let j = 0; j <= s2.length; j++) {
      if (i == 0) {
        costs[j] = j;
      } else {
        if (j > 0) {
          let newValue = costs[j - 1];
          
          if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }

          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }

    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }

  return costs[s2.length];
}

export function getPercentSimilar(s1: string, s2: string) {
  let longer = s1;
  let shorter = s2;

  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }

  let longerLength = longer.length;

  if (longerLength == 0) {
    return 1.0;
  }

  return (longerLength - editDistance(longer, shorter)) / longerLength;
}

export function isValidEmail(email: any){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};