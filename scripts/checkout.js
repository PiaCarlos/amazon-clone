import { cart, removeFromCart, updateDeliveryOption  } from '../data/carts.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js'
import { deliveryOptions } from '../data/deliveryOptions.js'
import {renderOrderSummary} from './checkout/orderSummary.js'

renderOrderSummary();
