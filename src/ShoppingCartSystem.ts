export class Product {
    constructor(
        public readonly id:number,
        public name:string,
        public price:number       
    ){}

    /**
     * Display product information
     */
    display() {
        console.log(`Product ID : ${this.id}`)
        console.log(`Name : ${this.name}`)
        console.log(`Price : ₹${this.price}`)
    }
}


export class ShoppingCart{
    constructor(
        private cart:Product[],
    ){}

    /**
     * Add product method
     */

    addProduct(product:Product) {
        this.cart.push(product)
    }


    /**
     * Remove product
     */

    removeProduct(productId:number) {
        const product:Product = this.findProduct(productId)
        if(product) {
            const idx = this.cart.indexOf(product);
            this.cart.splice(idx,1);
        }
        throw new Error('Product not found');
    }

    /**
     * Find Product
     */
    findProduct(productId:number):Product {
        let idx = -1;
        for(const ele of this.cart) {
            if(ele.id === productId) {
                idx = this.cart.indexOf(ele);
            }
        }
        if(idx != -1) {
            return this.cart[idx];
        }
        throw new Error('Product not found');
    }

    /**
     * Get total price
     */
    getTotalPrice():number {
        const totalPrice = this.cart.reduce((acc,curr)=>acc+curr.price,0)
        if(totalPrice == 0) throw new Error("No product in the cart")
        return totalPrice;
    }

    /**
     * Getter
     */

    get totalProducts():number {
        return this.cart.length;
    }

    /**
     * Clear Cart
     */
    clearCart(){
        if(this.cart.length === 0) throw new Error("Cart already empty")
        this.cart = []
    }


    /**
     * Display cart
     */
    displayCart() {
        console.log('====================================');
        console.log("Shopping Cart");
        console.log('====================================');
        console.log("")
        console.log("")
        if(this.cart.length === 0) throw new Error("Cart is empty") 
        this.cart.forEach((ele)=>{
            console.log(`Product ID : ${ele.id}`);
            console.log(`Name : ${ele.name}`);
            console.log(`Price : ₹${ele.price}`);
            console.log("")
        })

        console.log("-------------------------------------")
        console.log(`Total Products : ${this.cart.length}`)
        console.log(`Total Price : ${this.getTotalPrice()}`)
    }

    /**
     * Update the price
     */
    updatePrice(productId:number,newPrice:number) {
        const product = this.findProduct(productId)
        if(!product) {
            throw new Error("Product not found")
        } 
        const index = this.cart.indexOf(product)
        this.cart[index].price = newPrice;
    }

}

