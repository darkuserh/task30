let productQuantity=[];
        // назва товарів
        let names = [];
        names[0] = "Папір офісний А4, 80 г/м2, 500 л";
        names[1] = "Біндер для паперу 51 мм";
        names[2] = "Ручка кулькова синя";

        // ціни на товар
        let prices = [];
        prices[0] = 280.25; // Папір офісний А4, 80 г/м2, 500 л
        prices[1] = 56;     // Біндер для паперу 51 мм
        prices[2] = 12.50;  // Ручка кулькова синя
    
        let count = [];
        count[0] = 2;   // Папір офісний А4, 80 г/м2, 500 л
        count[1] = 10;  // Біндер для паперу 51 мм
        count[2] = 10;  // Ручка кулькова синя

        for(let i = 0; i < count.length; i++){
            const Count=count[i];
            const price=prices[i];
        
          productQuantity[i]=+prompt(`Введіть кількість продуктів ${Count} та ціна ${price}`,0)
        }
        let totalPrice=0;
        let totaItems1=0;
        let totaItems2=0;
        let totaItems3=0;
        for(let i = 0; i < productQuantity.length; i++){
            totalPrice+=productQuantity[i]*prices[i]
            totaItems1+=productQuantity[0]*prices[0]
            totaItems2+=productQuantity[1]*prices[1]
            totaItems3+=productQuantity[2]*prices[2]
          productQuantity[i]=+prompt(`Загальна сума ${totalPrice} `,0)
          productQuantity[i]=+prompt(` сума  1 товару ${totaItems1} `,0)
          productQuantity[i]=+prompt(` сума  2 товару ${totaItems2} `,0)
          productQuantity[i]=+prompt(` сума  3 товару ${totaItems3} `,0)
        }