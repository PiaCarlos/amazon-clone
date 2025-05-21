function Cart(LocalStorageKey) {
    const cart = {
     cartItems: undefined,
     cartQuantity:  0 ,

    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(LocalStorageKey));

        if (!this.cartItems) {
            this.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
            }];
        }

        this.cartQuantity = this.cartItems.reduce((sum, it) => sum + it.quantity, 0);
    },

    // save to storage
    savetoStorage() {
        localStorage.setItem(LocalStorageKey, JSON.stringify(this.cartItems));
    },

    // function to add items to cart and updates cart quantity
    addToCart(productId, quantityItems = 1) {
        let matchingItem; 
        // add items to the cart - for now only one at a time
        this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
        });

        if(matchingItem) {
            matchingItem.quantity += quantityItems;
            this.cartQuantity += quantityItems;
        }
        else {
            this.cartItems.push({
                productId: productId,
                quantity: quantityItems, 
                deliveryOptionId: '1'
            });
            this.cartQuantity += quantityItems;
        }
        this.savetoStorage();
    },

    removeFromCart(productId) {
        // remove the item
        let cartNew = [];
        this.cartItems = this.cartItems.filter(item => item.productId !== productId);
        this.savetoStorage();
        this.cartQuantity = this.cartItems.reduce((sum, it) => sum + it.quantity, 0);
    },

    updateDeliveryOption(productId, deliveryOptionId) {
        // get item in cart
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.savetoStorage();
    }

    };

    return cart;
}

const cart = Cart('cart-opp');
const businessCart = Cart('business-op');

cart.loadFromStorage();
businessCart.loadFromStorage();
cart.addToCart('4df68c27-fd59-4a6a-bbd1-e754ddb6d53c')
console.log(cart);
console.log(businessCart);