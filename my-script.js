let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

for(let i=0;i<values.length;i++){
    if(values[i]<0){
    values[i]=Number(String(values[i]).split('-')[0]);
    
    }
}
console.log(values);