export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}
];

export let cartQuantity = 0; 

// function to add items to cart and updates cart quantity
export function addToCart(productId) {
  let matchingItem; 
    // add items to the cart - for now only one at a time
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if(matchingItem) {
      matchingItem.quantity += 1;
      cartQuantity += 1;
    }
    else {
      cart.push({
            productId: productId,
            quantity: 1 
        });
      cartQuantity += 1;
    }
}