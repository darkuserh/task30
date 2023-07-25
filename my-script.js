
        // назва товарів
        let names = [];
        names[0] = "Папір офісний А4, 80 г/м2, 500 л";
        names[1] = "біндери для паперу 51 мм";
        names[2] = "Ручка кулькова синя";

        // ціна на товар
        let prices = [];
        prices[0] = 280.25; // Папір офісний А4, 80 г/м2, 500 л
        prices[1] = 56;     // біндери для паперу 51 мм
        prices[2] = 12.50;  // Ручка кулькова синя

        let count = [];



        let initCountArray =  () => {
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                let counttoBuy = +prompt("Вкажіть кількість для " + productName);

                if (isNaN(counttoBuy))
                    counttoBuy = 0;

                count.push(counttoBuy);
            }
        }

        let calculateSum  =  () => {
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
        initCountArray();
        calculateSum();