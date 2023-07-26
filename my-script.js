
        // массив створено за допомогою https://jsonplaceholder.typicode.com/users
        // всі властивості в об'єктах, які знаходяться в массиві, взяті в "". Такий формат даних
        let user={
            firstname: "Yuriy",
            user2:{
            secondname: "Vysotskyi",    
            },
       

      
        print: function (){
           console.log(this.firstname + " "+ this.user2.secondname )
        } 
    };
    user.print();

