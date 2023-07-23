let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];
let avgValues;
let sum = 0;
let arr = [];

for (let i = 0; i < values.length; i++) {
  let value = values[i];
  
  avgValues = value / 16;
  sum += avgValues;
  console.log(sum);

  if (value > sum) {
    arr.push(value);
  }
}

console.log(arr);