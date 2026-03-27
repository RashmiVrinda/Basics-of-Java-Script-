class Tea {
    constructor (name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;}
        
        getTotalPrice() {
                return this.price * this.quantity ;
        }
    }


const t1 = new Tea ("Black Tea", 10, 5);
console.log(t1.getTotalPrice());