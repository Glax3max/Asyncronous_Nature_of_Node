export class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    display() {
        console.log(`Product ID : ${this.id}`);
        console.log(`Name : ${this.name}`);
        console.log(`Price : ₹${this.price}`);
    }
}
export class ShoppingCart {
    cart;
    constructor(cart) {
        this.cart = cart;
    }
    addProduct(product) {
        this.cart.push(product);
    }
    removeProduct(productId) {
        const product = this.findProduct(productId);
        if (product) {
            const idx = this.cart.indexOf(product);
            this.cart.splice(idx, 1);
        }
        throw new Error('Product not found');
    }
    findProduct(productId) {
        let idx = -1;
        for (const ele of this.cart) {
            if (ele.id === productId) {
                idx = this.cart.indexOf(ele);
            }
        }
        if (idx != -1) {
            return this.cart[idx];
        }
        throw new Error('Product not found');
    }
    getTotalPrice() {
        const totalPrice = this.cart.reduce((acc, curr) => acc + curr.price, 0);
        if (totalPrice == 0)
            throw new Error("No product in the cart");
        return totalPrice;
    }
    get totalProducts() {
        return this.cart.length;
    }
    clearCart() {
        if (this.cart.length === 0)
            throw new Error("Cart already empty");
        this.cart = [];
    }
    displayCart() {
        console.log('====================================');
        console.log("Shopping Cart");
        console.log('====================================');
        console.log("");
        console.log("");
        if (this.cart.length === 0)
            throw new Error("Cart is empty");
        this.cart.forEach((ele) => {
            console.log(`Product ID : ${ele.id}`);
            console.log(`Name : ${ele.name}`);
            console.log(`Price : ₹${ele.price}`);
            console.log("");
        });
        console.log("-------------------------------------");
        console.log(`Total Products : ${this.cart.length}`);
        console.log(`Total Price : ${this.getTotalPrice()}`);
    }
    updatePrice(productId, newPrice) {
        const product = this.findProduct(productId);
        if (!product) {
            throw new Error("Product not found");
        }
        const index = this.cart.indexOf(product);
        this.cart[index].price = newPrice;
    }
}
//# sourceMappingURL=ShoppingCartSystem.js.map