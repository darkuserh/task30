
function createProduction(name,price,ordered){
    return{
        name,
        price,
        ordered,
  
    calculateProduction(){
        return this.price*this.ordered;
    }
    
}

}
let products=[
    createProduction(' Папір офісний А4, 80 г/м2, 500 л,',280.26,0),
    createProduction(' name: "Біндери для паперу 51 мм",,',56,0),
    createProduction(' "Ручка кулькова синя",',12.5,0)

]
// цикл для отримання кількості придбаних продуктів
for (let index = 0; index < products.length; index++) {
    const name = products[index].name;
    const price = products[index].price;

    products[index].ordered = +prompt(`Вкажіть кількість продуктів '${name}', ціна ${price}`, 0);
}

// цикл для розрахунку загальної ціни придбаних продуктів
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    totalPrice += products[index].price * products[index].ordered;
}

alert(`Сума Вашого замовлення ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) // інколи в умові використовується тільки одна змінна.
{
    alert("Доставка буде безкоштовною.");
}
