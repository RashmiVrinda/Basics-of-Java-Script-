class Tea {
    constructor (name,price,quantity){
this.name = name;
this.price = price;
this.quantity = quantity;

    }
addStock(amount){
    return this.quantity += amount
}
    }

    const t1 = new Tea("Black Tea", 100, 5);    
t1.addStock(3);
console.log(t1.quantity);