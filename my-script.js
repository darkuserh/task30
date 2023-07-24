function avg(a, b, c){
    if( a === undefined || b === undefined ){
        return;
    }
     if( c === undefined){
        return a + b / 2;
    }else{
        return a + b + c / 3;
    }
}
let res=avg(2,4,5)
console.log(res)
