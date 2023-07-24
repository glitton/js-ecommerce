// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

// set up data
let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    // add product to cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add product to the DOM
    addToCartDOM(product);
    // console.log("this is the cart", cart);
  } else {
    // update values
  }

  // more stuff later
  openCart();
};

const init = () => {
  console.log(cart);
};
init();
