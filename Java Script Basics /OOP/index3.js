class Tea {
    constructor (name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    describe(){
        return `Tea: ${this.name} costs ${this.price}`
    }
}

const t1 = new Tea ("Black Tea", 10, 5);
console.log(t1.describe()); 

// output Tea: Black Tea costs 10