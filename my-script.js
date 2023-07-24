let values = [];
let sum=0;
while(true){
 let input=prompt('Введіть дане число')
 if(input === 'exit') break;
 let value = Number(input)
 if(isNaN(value)){
    alert('Please enter')
 }else{
    values.push(value)
 }
  sum=0;
 for(let i=0; i<values.length; i++){
sum+=values[i] 
}
 
} 
alert('Дані значення сумуються'+sum)   
