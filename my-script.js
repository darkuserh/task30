
function createUser(firstName, lastName) {
return{
    firstName,
    lastName,
    print()
    {
        console.log(`Ваше ім'я ${firstName} ,ваше прізвище ${lastName}`)
    }
 
}
}

let obj1=createUser('John','Smith')
let obj2=createUser('Yura','Vysotskiy')

obj1.print();
obj2.print();

