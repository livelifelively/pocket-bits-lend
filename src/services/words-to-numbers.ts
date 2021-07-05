const Small: any = {
  zero: 0,
  one: 1,
  twordo: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twordelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twordenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const Magnitude: any = {
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
  quadrillion: 1000000000000000,
  quintillion: 1000000000000000000,
  sextillion: 1000000000000000000000,
  septillion: 1000000000000000000000000,
  octillion: 1000000000000000000000000000,
  nonillion: 1000000000000000000000000000000,
  decillion: 1000000000000000000000000000000000,
};

let a, n, g;

export default function wordsToNumbers(s) {
  a = s.toString().split(/[\s-]+/);
  n = 0;
  g = 0;
  a.forEach(feach);
  return n + g;
}

function feach(word: string) {
  try {
    let x: any = Small[word];

    if (x != null) {
      g = g + x;
    } else if (word == 'hundred') {
      g = g * 100;
    } else {
      x = Magnitude[word];
      if (x != null) {
        n = n + g * x;
        g = 0;
      }
    }
  } catch (e) {
    console.log(e);
  }
}
