/**
 * RecipeService - Handles all Edamam API interactions
 * Fetches recipe data, filters by preferences, handles errors
 */

class RecipeService {
  constructor() {
    // API Configuration - GET YOUR FREE KEY FROM: https://developer.edamam.com/
    this.apiId = import.meta.env.VITE_EDAMAM_APP_ID || 'YOUR_EDAMAM_ID';
    this.apiKey = import.meta.env.VITE_EDAMAM_APP_KEY || 'YOUR_EDAMAM_KEY';
    this.baseUrl = 'https://api.edamam.com/api/recipes/v2';
    this.cache = new Map();
    this.nigerianDishes = [
      'jollof rice',
      'egusi soup',
      'moi moi',
      'suya',
      'chin chin',
      'pepper soup',
      'eba',
      'akara',
      'plantain',
      'yam',
    ];
    console.log('RecipeService initialized with API ID:', this.apiId ? '✅ Set' : '❌ Missing');
  }

  /**
   * Search recipes by query
   * @param {string} query - Search query
   * @param {object} filters - Filter options (dietType, cuisineType, etc)
   * @returns {Promise<Array>} Array of recipe objects
   */
  async searchRecipes(query, filters = {}) {
    const cacheKey = `${query}-${JSON.stringify(filters)}`;

    // Check cache first
    if (this.cache.has(cacheKey)) {
      console.log('📦 Using cached results for:', query);
      return this.cache.get(cacheKey);
    }

    try {
      const params = new URLSearchParams({
        type: 'public',
        q: query,
        app_id: this.apiId,
        app_key: this.apiKey,
        ...filters,
      });

      const url = `${this.baseUrl}?${params}`;
      console.log('🌐 Calling API:', url.replace(this.apiKey, '***'));

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ API Response:', data.hits ? `${data.hits.length} results` : 'No results');
      
      const recipes = data.hits?.map((hit) => this._normalizeRecipe(hit.recipe)) || [];

      // Cache the results
      this.cache.set(cacheKey, recipes);

      return recipes;
    } catch (error) {
      console.error('❌ Recipe search error:', error);
      console.log('⚠️ Falling back to mock data...');
      return await this._getMockRecipes();
    }
  }

  /**
   * Get featured Nigerian recipes
   * @returns {Promise<Array>} Array of featured recipes
   */
  async getFeaturedRecipes() {
    const randomDish = this.nigerianDishes[Math.floor(Math.random() * this.nigerianDishes.length)];
    console.log('🔍 Searching for:', randomDish);
    console.log('📍 Using API ID:', this.apiId ? '✅ Set' : '❌ Missing');
    console.log('🔑 Using API Key:', this.apiKey ? '✅ Set' : '❌ Missing');
    
    const results = await this.searchRecipes(randomDish, { to: 5 });
    console.log(`📊 Got ${results.length} recipes`);
    return results;
  }

  /**
   * Get recipe by ID
   * @param {string} id - Recipe ID
   * @returns {Promise<Object>} Recipe object
   */
  async getRecipeById(id) {
    // This would require storing recipe data or making another API call
    // For now, we'll use search
    console.log(`Getting recipe ${id}`);
    return null;
  }

  /**
   * Normalize recipe data from API
   * @private
   */
  _normalizeRecipe(recipe) {
    return {
      id: recipe.uri.split('#')[1],
      label: recipe.label,
      image: recipe.image,
      source: recipe.source,
      url: recipe.url,
      ingredients: recipe.ingredients,
      totalTime: recipe.totalTime,
      yield: recipe.yield,
      calories: Math.round(recipe.calories),
      protein: Math.round(recipe.totalNutrients.PROCNT?.quantity || 0),
      carbs: Math.round(recipe.totalNutrients.CHOCDF?.quantity || 0),
      fat: Math.round(recipe.totalNutrients.FAT?.quantity || 0),
      dietLabels: recipe.dietLabels,
      healthLabels: recipe.healthLabels,
    };
  }

  /**
   * Get mock recipes for development/fallback
   * @private
   */
  async _getMockRecipes() {
    try {
      const response = await fetch('/data/mockRecipes.json');
      const data = await response.json();
      console.log('📦 Using mock recipe data');
      return data.hits?.map((hit) => this._normalizeMockRecipe(hit.recipe)) || [];
    } catch (error) {
      console.error('❌ Failed to load mock recipes:', error);
      return [];
    }
  }

  /**
   * Normalize mock recipe data
   * @private
   */
  _normalizeMockRecipe(recipe) {
    return {
      id: recipe.uri,
      label: recipe.label,
      image: recipe.image,
      source: recipe.source,
      ingredientLines: recipe.ingredientLines,
      yield: recipe.yield,
      healthLabels: recipe.healthLabels,
      cuisineType: recipe.cuisineType,
    };
  }
}

export default new RecipeService();
