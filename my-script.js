function test(value){

if(value<1){
  return;
}
console.log(value);

test(value-1);


}


test(+prompt('Введіть число ',0))