
let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let max = Number.MIN_VALUE;

for (let value of values) { 
{
    const element = value;
    if(element > max)
    {
        max = element;
    }
}
}
console.log("Максимальне значення массиву - " + max);
