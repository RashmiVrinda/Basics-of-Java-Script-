class Tea {
     #price;
    constructor (name,price,quantity){
this.name = name;
this.#price = price;
this.quantity = quantity;

    }
getPrice(){
    return this.#price; ;
}
setPrice(newPrice) {  this.#price = newPrice
    }}

const t1 = new Tea("Black Tea", 100, 5);

console.log(t1.getPrice()); // 100

t1.setPrice(200);
console.log(t1.getPrice()); // 200