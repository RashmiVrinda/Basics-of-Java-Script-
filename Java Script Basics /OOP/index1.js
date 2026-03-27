// 🎯 Task

// Create a class called:

// Tea
// 📦 It should have:
// a property: name
// a property: price
// a property: quantity 

class Tea {
    constructor (name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const t1 = new Tea ("Black Tea", 15, 5);
console.log(t1);