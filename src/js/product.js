import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  if (!product) return;
  // Normalize existing cart to an array and append the new product
  const cart = getLocalStorage("so-cart");
  const normalized = Array.isArray(cart) ? cart : cart ? [cart] : [];
  normalized.push(product);
  setLocalStorage("so-cart", normalized);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const id = e?.target?.dataset?.id || e?.currentTarget?.dataset?.id;
  const product = await dataSource.findProductById(id);
  addProductToCart(product);
}

// add listener to Add to Cart button
const addToCartBtn = document.getElementById("addToCart");
// If the button doesn't already have a data-id, try to populate it from the URL
if (addToCartBtn && !addToCartBtn.dataset.id) {
  const params = new URL(document.location).searchParams;
  const productId = params.get("product");
  if (productId) addToCartBtn.dataset.id = productId;
}

addToCartBtn?.addEventListener("click", addToCartHandler);
