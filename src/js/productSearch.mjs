export default class ProductSearch {
  constructor(productListInstance) {
    this.productList = productListInstance;
    this.searchInput = document.getElementById('product-search');
    this.clearButton = document.getElementById('clear-search');
    this.resultsCount = document.getElementById('search-results-count');
    this.allProducts = [];
    this.init();
  }

  init() {
    if (!this.searchInput) return;

    // Add event listeners
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
    this.clearButton.addEventListener('click', () => this.clearSearch());
    
    // Store all products when they're loaded
    this.storeProducts();
  }

  async storeProducts() {
    // Wait a bit for products to load
    setTimeout(() => {
      this.allProducts = this.productList.products || [];
    }, 500);
  }

  handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    // Show/hide clear button
    if (searchTerm) {
      this.clearButton.classList.add('visible');
    } else {
      this.clearButton.classList.remove('visible');
    }

    // Filter products
    if (searchTerm === '') {
      this.showAllProducts();
    } else {
      this.filterProducts(searchTerm);
    }
  }

  filterProducts(searchTerm) {
    const filtered = this.allProducts.filter(product => {
      const name = product.NameWithoutBrand?.toLowerCase() || '';
      const brand = product.Brand?.Name?.toLowerCase() || '';
      const fullName = product.Name?.toLowerCase() || '';
      
      return name.includes(searchTerm) || 
             brand.includes(searchTerm) || 
             fullName.includes(searchTerm);
    });

    this.productList.renderList(filtered);
    this.updateResultsCount(filtered.length, searchTerm);
  }

  showAllProducts() {
    this.productList.renderList(this.allProducts);
    this.resultsCount.textContent = '';
  }

  clearSearch() {
    this.searchInput.value = '';
    this.clearButton.classList.remove('visible');
    this.showAllProducts();
  }

  updateResultsCount(count, term) {
    if (count === 0) {
      this.resultsCount.textContent = `No products found for "${term}"`;
    } else if (count === 1) {
      this.resultsCount.textContent = `Found 1 product`;
    } else {
      this.resultsCount.textContent = `Found ${count} products`;
    }
  }
}
