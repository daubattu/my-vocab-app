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

const levenshteinDistance = (a: any, b: any) => {
  const matrix = Array.from({ length: a.length + 1 }, () =>
      Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          matrix[i][j] = Math.min(
              matrix[i - 1][j] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j - 1] + cost
          );
      }
  }

  return matrix[a.length][b.length];
};

const compareTexts = (text1: any, text2: any) => {
  const distance = levenshteinDistance(text1, text2);
  const maxLength = Math.max(text1.length, text2.length);
  const similarity = ((maxLength - distance) / maxLength) * 100; // Phần trăm giống nhau
  return similarity.toFixed(2) + '%';
};

const text1 = "Xin chào, tôi là ChatGPT.";
const text2 = "Xin chào, tôi là trợ lý AI.";
console.log(compareTexts(text1, text2)); // Output: % độ giống nhau

export function isValidEmail(email: any){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};