class Tea {
    constructor (name,price,quantity){
this.name = name;
this.price = price;
this.quantity = quantity;

    }
isInStock(){
    return this.quantity > 0
}
    }

    const t1 = new Tea("Black Tea", 100, 5);    

console.log(t1.isInStock());