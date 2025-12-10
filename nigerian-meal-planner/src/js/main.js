// Nigerian Meal Planner - Main Entry Point
import RecipeService from './services/RecipeService.mjs';
import YouTubeService from './services/YouTubeService.mjs';

console.log('🍲 Nigerian Meal Planner initialized!');
console.log('Environment:', import.meta.env.MODE);

// Initialize the app
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM Content Loaded');
  initializeApp();
});

/**
 * Initialize the application
 */
async function initializeApp() {
  try {
    // Load featured recipes on homepage
    const featuredSection = document.getElementById('featured-list');
    if (featuredSection) {
      await loadFeaturedRecipes();
    }

    console.log('✅ App initialization complete');
  } catch (error) {
    console.error('❌ Initialization error:', error);
    showError('Failed to initialize application');
  }
}

/**
 * Load featured Nigerian recipes
 */
async function loadFeaturedRecipes() {
  try {
    const featuredSection = document.getElementById('featured-list');
    if (!featuredSection) return;

    // Show loading state
    featuredSection.innerHTML = '<p class="loading">Loading featured recipes...</p>';

    const recipes = await RecipeService.getFeaturedRecipes();

    if (recipes.length === 0) {
      featuredSection.innerHTML = '<p class="no-results">No recipes found. Please check your API configuration.</p>';
      return;
    }

    // Clear loading state
    featuredSection.innerHTML = '';

    // Render recipe cards
    recipes.forEach(recipe => {
      const card = createRecipeCard(recipe);
      featuredSection.appendChild(card);
    });

    console.log(`✅ Loaded ${recipes.length} featured recipes`);
  } catch (error) {
    console.error('Error loading featured recipes:', error);
    const featuredSection = document.getElementById('featured-list');
    if (featuredSection) {
      featuredSection.innerHTML = '<p class="error">Failed to load recipes. Check API keys in .env.local</p>';
    }
  }
}

/**
 * Create a recipe card DOM element
 * @param {Object} recipe - Recipe object
 * @returns {HTMLElement} Recipe card element
 */
function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.label}" class="recipe-card__image">
    <div class="recipe-card__content">
      <h4 class="recipe-card__title">${recipe.label}</h4>
      <p class="recipe-card__source">By ${recipe.source}</p>
      <p class="recipe-card__info">
        <span class="badge">⏱ ${recipe.totalTime || 0} min</span>
        <span class="badge">🍽 ${recipe.yield} servings</span>
      </p>
      <p class="recipe-card__calories">
        <strong>${recipe.calories || 0}</strong> calories per serving
      </p>
      <button class="btn btn-sm btn-primary" onclick="viewRecipe('${recipe.id}')">
        View Recipe
      </button>
    </div>
  `;
  return card;
}

/**
 * View recipe details (placeholder)
 */
window.viewRecipe = function(recipeId) {
  console.log('Viewing recipe:', recipeId);
  // TODO: Implement recipe detail page
  alert('Recipe detail page coming soon! ID: ' + recipeId);
};

/**
 * Show error message
 */
function showError(message) {
  const alert = document.createElement('div');
  alert.className = 'alert alert-danger';
  alert.textContent = message;
  document.body.insertBefore(alert, document.body.firstChild);
}
