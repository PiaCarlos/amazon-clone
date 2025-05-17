export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}]
}


// save to storage
function savetoStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


// function to add items to cart and updates cart quantity
export let cartQuantity = 0; 
export function addToCart(productId, quantityItems) {
  let matchingItem; 
    // add items to the cart - for now only one at a time
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if(matchingItem) {
      matchingItem.quantity += quantityItems;
      cartQuantity += quantityItems;
    }
    else {
      cart.push({
            productId: productId,
            quantity: quantityItems 
        });
      cartQuantity += quantityItems;
    }
    savetoStorage();
}


export function removeFromCart(productId) {
    // remove the item
    let cartNew = [];
    cart = cart.filter(item => item.productId !== productId);
    savetoStorage();
  }
