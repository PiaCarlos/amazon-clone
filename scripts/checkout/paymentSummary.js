import { cart, removeFromCart, updateDeliveryOption  } from '../../data/carts.js';
import { products, getProduct } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js'
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js'


export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  let totalBeforeTaxCents = 0;
  let taxPriceCents = 0;
  let totalAfterTaxCents=0;
  let paymentSummaryHTML = '';
  // grab a item in cart
  cart.forEach((cartItem) => {
    // grab the exact product of that item
    let product = getProduct(cartItem.productId);
    let priceProduct = product.priceCents * cartItem.quantity;
    // grab the exact delivery option of that item
    let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    let deliveryPrice = deliveryOption.priceCents;
    // update total products prices, shipping and max
    productPriceCents += priceProduct;
    shippingPriceCents += deliveryPrice;
    //totals
    totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    taxPriceCents = (totalBeforeTaxCents * 0.10);
    totalAfterTaxCents = totalBeforeTaxCents + taxPriceCents;

    paymentSummaryHTML = 
    `
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxPriceCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalAfterTaxCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `
  });

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
  

}

