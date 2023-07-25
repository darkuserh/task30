
        // назва товарів
        let names = [];
        names[0] = "Папір овісний А4, 80 г/м2, 500 л";
        names[1] = "Біндери для паперу 51 мм";
        names[2] = "Ручка кулькова синя";

        // ціна на товар
        let prices = [];
        prices[0] = 280.25; // Папір овісний А4, 80 г/м2, 500 л
        prices[1] = 56;     // Біндери для паперу 51 мм
        prices[2] = 12.50;  // Ручка кулькова синя

        initCountArray();
        calculateSum(initCountArray());
      
        function initCountArray() {
            let count = []; 
           
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                  counttoBuy = +prompt("Вкажіть кількість для " + productName);

                if (isNaN(counttoBuy))
                    counttoBuy = 0;

                    count.push(counttoBuy);
            }
           return count;
        }
       
        function calculateSum(count) {
            
            let totalSum = 0;
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                const productPrice = prices[i];
                const boughtCount = count[i];

                let price = productPrice * boughtCount;
                totalSum += price;
                console.log(`Придбано ${productName} на суму ${price}`);
            }
            console.log("Всього продуктів придбано на " + totalSum);
        }
    