export const cart = [];
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