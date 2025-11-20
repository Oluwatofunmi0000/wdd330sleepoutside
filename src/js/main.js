import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import ProductSearch from './productSearch.mjs';
import Testimonials from './testimonials.mjs';

const dataSource = new ProductData();
const element = document.querySelector('.product-list');
const list = new ProductList('tents', dataSource, element);

// Initialize product list
list.init().then(() => {
  new ProductSearch(list);
  new Testimonials().init();
});
