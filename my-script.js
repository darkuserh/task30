
let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];

console.log('Парні значення')
values.filter(values=>values%2==0).forEach(values=>console.log(values))
console.log('Непарні значення')
values.filter(values=>values%2!=0).forEach(values=>console.log(values))


