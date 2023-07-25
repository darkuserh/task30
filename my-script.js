const arr=[1,2,3,4,5,6,7,7,7,7]
const makeUniq=(arr)=>{
    return arr.filter((el,id)=>{return arr.indexOf(el) === id})
}
function uniqValues(arr){
    if(makeUniq){
        return null;
    }else{
       
        return arr;
    }
}
const UniqCode=uniqValues(arr);
console.log(UniqCode);