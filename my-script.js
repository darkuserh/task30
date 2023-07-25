
var data = [1, 2, 3, 4, 5];

var result = data.map( (value)=> {
    return value * value;
});

result.forEach((e)=> {
    console.log(e);
});
