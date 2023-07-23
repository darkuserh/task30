let values=[10,20,30,40,50,60]
let max=Number.MIN_VALUE;
let min=Number.MAX_VALUE;
let sum=0;
for(let i=0;i<values.length;i++){
    const element=values[i];
    sum+=element
    if(element>max){
        max=element;
    } if(element<min){
        min=element;
    }
    
}
console.log(sum);
console.log(max)
console.log(min)                                                                                                         