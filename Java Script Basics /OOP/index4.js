class Tea {
    constructor (name,price,quantity){
this.name = name;
this.price = price;
this.quantity = quantity;

    }
applyDiscount(percent){
    return this.price - (this.price * percent / 100)
}
    }

    const t1 = new Tea("Black Tea", 100, 5);    
    console.log(t1.applyDiscount(10));