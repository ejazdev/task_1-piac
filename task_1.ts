type Item = { name: string; price: number };

function buyGroceries(itemType: string, quantity: number): number {
    const items: { [key: string]: Item } = {
        fruits: { name: 'sharafi', price: 250 },
        vegetables: { name: 'tamator', price: 1160 },
        groceries: { name: 'Bread', price: 318 },
    };

    const item = items[itemType.toLowerCase()];

    if (item) {
        const total = item.price * quantity;
        console.log(`You bought ${quantity} ${item.name} at RS${item.price} each. Total: RS${total}`);
        return total;
    } else {
        console.log('Invalid item type. Please choose "fruits", "vegetables", or "groceries".');
        return 0;
    }
}

function applyDiscount(totalBill: number): number {
    const discountThreshold = 50;
    const discountPercentage = 0.1;

    if (totalBill > discountThreshold) {
        const discount = totalBill * discountPercentage;
        console.log(`Congratulations! You get a 10% discount. Your discounted total is $${totalBill - discount}`);
        return totalBill - discount;
    } else {
        console.log('No discount applied. Your total remains $' + totalBill);
        return totalBill;
    }
}

function checkoutProcess(paymentMethod: string): void {
    const validPaymentMethods = ['cash', 'card'];

    if (validPaymentMethods.includes(paymentMethod.toLowerCase())) {
        console.log(`You have chosen to pay with ${paymentMethod}. Please proceed to the ${paymentMethod} counter.`);
        console.log('Thank you for shopping with us!');
    } else {
        console.log('Invalid payment method. Please choose "cash" or "card".');
    }
}


const totalBill = buyGroceries('fruits', 3) + buyGroceries('vegetables', 2) + buyGroceries('groceries', 1);
const discountedTotal = applyDiscount(totalBill);
checkoutProcess('cash');