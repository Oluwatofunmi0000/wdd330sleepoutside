# Final Project Proposal: Nigerian Meal Planner & Recipe Finder

## 1. Overview

### Project Description

The Nigerian Meal Planner & Recipe Finder is a web application designed to help users discover, plan, and prepare authentic Nigerian meals. The application addresses the challenge many people face when trying to maintain their cultural food heritage or explore Nigerian cuisine - finding reliable recipes, planning weekly meals, and learning proper cooking techniques.

### Problem Statement

Many Nigerian diaspora members and people interested in Nigerian cuisine struggle to:

- Find authentic Nigerian recipes online
- Plan balanced weekly meals with Nigerian dishes
- Learn proper cooking techniques through visual guides
- Keep track of favorite recipes and meal plans
- Calculate nutritional information for Nigerian meals

### Motivation

This project aims to preserve and promote Nigerian culinary culture while making it accessible to both Nigerians abroad and international food enthusiasts. By combining recipe discovery, meal planning, and video tutorials, users can confidently prepare authentic Nigerian dishes at home.

---

## 2. Target Audience

### Primary Audience

- **Nigerian Diaspora (Ages 25-45)**: Individuals living abroad who want to maintain connection to their cultural food heritage
- **Young Nigerian Professionals (Ages 22-35)**: People learning to cook who want to prepare traditional family meals
- **Parents**: Families wanting to introduce their children to Nigerian cuisine

### Secondary Audience

- **Food Enthusiasts**: International users interested in exploring African cuisine
- **Culinary Students**: People studying global cuisines and wanting to learn Nigerian cooking techniques
- **Health-Conscious Individuals**: Users seeking nutritious Nigerian meal options with detailed nutritional information

---

## 3. Major Functions

### Function 1: Recipe Search & Discovery

Users can search for Nigerian recipes by:

- Dish name (e.g., "Jollof Rice", "Egusi Soup")
- Ingredients (e.g., "plantain", "yam")
- Meal type (breakfast, lunch, dinner, snacks)
- Dietary preferences (vegetarian, gluten-free, etc.)
- Cooking time and difficulty level

**Details**: Integration with Edamam Recipe API to fetch recipes, filter by Nigerian cuisine keywords, and display comprehensive recipe information including ingredients, instructions, prep time, and nutritional data.

### Function 2: Video Tutorial Integration

For each recipe, users can access related cooking videos showing:

- Step-by-step cooking demonstrations
- Traditional preparation techniques
- Ingredient preparation methods
- Plating and presentation tips

**Details**: YouTube Data API integration to fetch relevant cooking videos based on recipe names, with video previews, channel information, and direct links to watch full tutorials.

### Function 3: Weekly Meal Planner

Users can create and manage weekly meal plans:

- Drag-and-drop interface for assigning recipes to specific days
- Breakfast, lunch, dinner, and snack slots for each day
- Save multiple meal plan templates
- Print or export meal plans
- Calculate total nutritional information for the week

**Details**: Interactive calendar interface with local storage persistence, allowing users to build balanced meal schedules and view aggregated nutritional data.

### Function 4: Shopping List Generator

Automatically generate shopping lists from meal plans:

- Aggregate ingredients from selected recipes
- Combine duplicate ingredients with quantities
- Categorize items (proteins, vegetables, spices, etc.)
- Check off items as you shop
- Export to mobile-friendly format

**Details**: Parse recipe ingredients, merge quantities, organize by category, and provide a printable/shareable shopping list with checkbox functionality.

### Function 5: Recipe Favorites & Collections

Users can save and organize recipes:

- Bookmark favorite recipes
- Create custom recipe collections (e.g., "Quick Weeknight Meals", "Party Foods")
- Add personal notes and modifications to recipes
- Rate and review recipes
- Share collections with friends and family

**Details**: Local storage system for saving user data, with import/export functionality for backup and sharing between devices.

### Function 6: Nutritional Information Dashboard

Display detailed nutritional data for recipes and meal plans:

- Calories, macronutrients (protein, carbs, fats)
- Vitamins and minerals
- Dietary labels (high protein, low carb, etc.)
- Daily value percentages
- Weekly nutritional trends and insights

**Details**: Leverage Edamam's nutrition API data to display comprehensive nutritional breakdowns with visual charts and health indicators.

### Function 7: Recipe Substitution Suggestions

Help users adapt recipes based on ingredient availability:

- Suggest alternative ingredients for common Nigerian items
- Provide conversion measurements
- Offer dietary substitutions (e.g., vegan alternatives)
- Explain how substitutions affect taste and nutrition

**Details**: Built-in substitution database with recommendations, allowing users to adapt recipes while maintaining authenticity and nutritional balance.

### Function 8: Cooking Tips & Cultural Context

Provide educational content about Nigerian cuisine:

- Ingredient glossary with photos and descriptions
- Traditional cooking methods and tools
- Regional variations of popular dishes
- Cultural significance of meals and celebrations
- Spice level indicators and adjustment tips

**Details**: Static content pages with rich media, searchable glossary, and contextual information displayed alongside recipes.

### Function 9: Mobile-Responsive Cooking Mode

Optimized recipe viewing during cooking:

- Large text for easy reading while cooking
- Step-by-step mode with timer integration
- Voice command support (optional)
- Keep screen awake functionality
- Ingredient checklist to track progress

**Details**: Specialized UI mode with enhanced readability, built-in timers for each step, and hands-free navigation options.

### Function 10: Recipe Recommendations

Personalized recipe suggestions based on:

- Previously viewed or saved recipes
- Seasonal ingredients
- Trending Nigerian dishes
- User's dietary preferences
- Cooking skill level

**Details**: Algorithm combining user history, recipe popularity, and seasonal data to suggest relevant recipes on homepage and search results.

---

## 4. Wireframes

### Mobile View - Homepage

```
┌─────────────────────┐
│  🍲 Nigerian Meals  │
│  [Search Bar]       │
├─────────────────────┤
│ Featured Recipes    │
│ ┌─────┐ ┌─────┐    │
│ │Img  │ │Img  │    │
│ │Joll-│ │Egusi│    │
│ │of   │ │Soup │    │
│ └─────┘ └─────┘    │
│                     │
│ Quick Filters       │
│ [Breakfast] [Lunch] │
│ [Dinner] [Snacks]   │
│                     │
│ Meal Planner        │
│ [View This Week]    │
│                     │
│ My Favorites        │
│ [10 Saved Recipes]  │
└─────────────────────┘
```

### Mobile View - Recipe Detail

```
┌─────────────────────┐
│ ← Jollof Rice       │
│ [Recipe Image]      │
├─────────────────────┤
│ ⏱ 45 min | 🍽 4    │
│ ⭐⭐⭐⭐⭐ (128)     │
│ [♥ Save] [📋 Plan] │
├─────────────────────┤
│ Ingredients         │
│ □ 2 cups rice       │
│ □ 1 can tomatoes    │
│ □ 1 onion           │
│ [Show 8 more]       │
├─────────────────────┤
│ Instructions        │
│ Step 1: Wash rice..│
│ Step 2: Blend...    │
├─────────────────────┤
│ Nutrition (per srv) │
│ 450 cal | 8g protein│
├─────────────────────┤
│ Video Tutorials     │
│ [▶ Video Thumbnail] │
│ "Perfect Jollof"    │
└─────────────────────┘
```

### Mobile View - Meal Planner

```
┌─────────────────────┐
│ Weekly Meal Plan    │
│ [< Week 46 >]       │
├─────────────────────┤
│ Monday, Nov 18      │
│ 🌅 Akara & Pap      │
│ 🌞 Jollof Rice      │
│ 🌙 Egusi Soup       │
│ [+ Add Meal]        │
├─────────────────────┤
│ Tuesday, Nov 19     │
│ 🌅 [+ Add]          │
│ 🌞 [+ Add]          │
│ 🌙 [+ Add]          │
├─────────────────────┤
│ [Generate List] 🛒  │
│ [View Nutrition] 📊 │
└─────────────────────┘
```

### Desktop View - Homepage

```
┌─────────────────────────────────────────────────────────────┐
│ 🍲 Nigerian Meal Planner          [Search...] [🔍] 👤 📋 ♥  │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [Large Hero Banner: Featured Recipe of the Day]            │
│  "Smoky Party Jollof Rice"  [View Recipe →]                 │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│  Quick Filters: [All] [Breakfast] [Lunch] [Dinner] [Snacks] │
│                                                               │
│  Popular Recipes                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐           │
│  │  [Img] │  │  [Img] │  │  [Img] │  │  [Img] │           │
│  │ Jollof │  │  Egusi │  │  Moin  │  │  Suya  │           │
│  │  Rice  │  │  Soup  │  │  Moin  │  │  Beef  │           │
│  │⭐ 4.8  │  │⭐ 4.9  │  │⭐ 4.7  │  │⭐ 4.6  │           │
│  └────────┘  └────────┘  └────────┘  └────────┘           │
│  [Load More Recipes]                                         │
│                                                               │
│  This Week's Meal Plan          |  Cooking Tips              │
│  Mon: Jollof, Plantain          |  📖 Nigerian Spice Guide   │
│  Tue: Empty slots               |  🎥 How to Cook Jollof     │
│  [Plan Full Week →]             |  🥘 Kitchen Essentials     │
└─────────────────────────────────────────────────────────────┘
```

### Desktop View - Recipe Detail (Split Screen)

```
┌─────────────────────────────────────────────────────────────┐
│ 🍲 Nigerian Meal Planner    [Search...] 🔍  👤 📋 ♥         │
├──────────────────────────┬──────────────────────────────────┤
│                          │                                  │
│  [Large Recipe Image]    │  Jollof Rice                    │
│                          │  ⭐⭐⭐⭐⭐ (128 reviews)       │
│  [Photo Gallery]         │  ⏱ 45 min | 🍽 Serves 4        │
│  [📷] [📷] [📷]         │  [♥ Save] [📋 Add to Plan]     │
│                          │  [🔗 Share] [🖨 Print]          │
│  Video Tutorials         │                                  │
│  ▶ [Video 1 Thumbnail]  │  Ingredients                     │
│  "Perfect Jollof"        │  □ 2 cups long-grain rice       │
│  by Chef Lola (5:23)     │  □ 1 can tomato paste           │
│                          │  □ 3 fresh tomatoes             │
│  ▶ [Video 2 Thumbnail]  │  □ 2 red bell peppers           │
│  "Party Jollof Secrets"  │  □ 1 large onion                │
│  by 9jaCooking (8:45)    │  □ 3 tbsp vegetable oil         │
│                          │  □ 2 cups chicken stock         │
│  Nutrition Facts         │  □ 2 tsp curry powder           │
│  ┌──────────────────┐   │  □ 1 tsp thyme                  │
│  │ Calories: 450    │   │  □ 2 bay leaves                 │
│  │ Protein: 8g      │   │  □ Salt & pepper to taste       │
│  │ Carbs: 72g       │   │  [📋 Add to Shopping List]      │
│  │ Fat: 14g         │   │                                  │
│  │ Fiber: 3g        │   │  Instructions                    │
│  └──────────────────┘   │  1. Wash rice and set aside     │
│                          │  2. Blend tomatoes, peppers...  │
│                          │  3. Heat oil in large pot...    │
│                          │  [Show all 8 steps]             │
│                          │                                  │
│                          │  Cultural Context                │
│                          │  Jollof rice is West Africa's... │
│                          │  [Read More]                     │
└──────────────────────────┴──────────────────────────────────┘
```

### Desktop View - Meal Planner

```
┌─────────────────────────────────────────────────────────────┐
│ 🍲 Nigerian Meal Planner    Weekly Meal Plan   👤 📋 ♥      │
├─────────────────────────────────────────────────────────────┤
│  [< Previous Week]   Week of Nov 18-24, 2025  [Next Week >]│
├───────┬────────┬────────┬────────┬────────┬────────┬────────┤
│ Mon   │ Tue    │ Wed    │ Thu    │ Fri    │ Sat    │ Sun    │
├───────┼────────┼────────┼────────┼────────┼────────┼────────┤
│🌅      │🌅      │🌅      │🌅      │🌅      │🌅      │🌅      │
│Akara & │[+Add]  │[+Add]  │[+Add]  │[+Add]  │[+Add]  │[+Add]  │
│ Pap    │        │        │        │        │        │        │
├───────┼────────┼────────┼────────┼────────┼────────┼────────┤
│🌞      │🌞      │🌞      │🌞      │🌞      │🌞      │🌞      │
│Jollof  │[+Add]  │[+Add]  │[+Add]  │[+Add]  │[+Add]  │[+Add]  │
│Rice    │        │        │        │        │        │        │
├───────┼────────┼────────┼────────┼────────┼────────┼────────┤
│🌙      │🌙      │🌙      │🌙      │🌙      │🌙      │🌙      │
│Egusi   │[+Add]  │[+Add]  │[+Add]  │[+Add]  │[+Add]  │[+Add]  │
│Soup    │        │        │        │        │        │        │
└───────┴────────┴────────┴────────┴────────┴────────┴────────┘
│                                                               │
│  Weekly Summary:                                             │
│  📊 Total Calories: 3,200 | Protein: 95g | Carbs: 420g      │
│  [📋 Generate Shopping List] [🖨 Print Plan] [💾 Save]     │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. External Data

### API Sources

#### Edamam Recipe Search API

**Purpose**: Primary recipe data source
**Data Retrieved**:

- Recipe names, images, and source URLs
- Ingredient lists with quantities
- Cooking instructions
- Nutritional information (calories, macros, vitamins, minerals)
- Dietary labels (vegan, gluten-free, etc.)
- Cuisine type and dish type
- Prep time and cooking time

**Search Strategy**: Use Nigerian cuisine keywords (Jollof, Egusi, Suya, Moin Moin, etc.) to filter relevant recipes. Implement fallback searches for ingredient-based queries.

**API Endpoint**: `https://api.edamam.com/api/recipes/v2`

#### YouTube Data API v3

**Purpose**: Video tutorial integration
**Data Retrieved**:

- Video titles, descriptions, and thumbnails
- Channel information
- Video duration and view count
- Video IDs for embedding
- Related videos

**Search Strategy**: Search for "{recipe_name} Nigerian recipe" to find relevant cooking tutorials. Prioritize videos from verified Nigerian cooking channels.

**API Endpoint**: `https://www.googleapis.com/youtube/v3/search`

### Local Storage Data

**User Preferences**:

- Dietary restrictions
- Preferred cuisine regions
- Default serving sizes
- UI theme (light/dark)

**Saved Recipes**:

- Recipe IDs from Edamam
- User ratings and reviews
- Personal notes and modifications
- Date saved

**Meal Plans**:

- Weekly schedule with recipe assignments
- Custom meal plan templates
- Shopping lists (generated and manual)

**User Collections**:

- Custom recipe folders/categories
- Shared collection links
- Recipe tags

**Recipe History**:

- Recently viewed recipes
- Search history
- Most frequently accessed recipes

---

## 6. Module List

### 6.1 Core Modules

#### `RecipeService.mjs`

Handles all Edamam API interactions

- Search recipes by query
- Fetch recipe details by ID
- Filter by dietary preferences
- Handle API errors and rate limiting

#### `YouTubeService.mjs`

Manages YouTube Data API calls

- Search videos by recipe name
- Fetch video details
- Handle API quotas
- Cache video results

#### `StorageManager.mjs`

Manages local storage operations

- Save/retrieve user data
- Handle storage quotas
- Import/export functionality
- Data validation

### 6.2 UI Components

#### `RecipeCard.mjs`

Reusable recipe display component

- Image, title, ratings display
- Quick actions (save, plan, share)
- Responsive layout

#### `RecipeDetail.mjs`

Full recipe page component

- Ingredients list with checkboxes
- Step-by-step instructions
- Nutrition facts display
- Video tutorials section

#### `MealPlanner.mjs`

Weekly meal planning interface

- Calendar grid layout
- Drag-and-drop functionality
- Meal assignment logic

#### `SearchBar.mjs`

Search interface component

- Auto-complete suggestions
- Filter options
- Search history

#### `ShoppingList.mjs`

Shopping list generator and display

- Ingredient aggregation
- Category organization
- Checkbox interactions
- Print/export functionality

### 6.3 Utility Modules

#### `utils.mjs`

General utility functions

- Date formatting
- Measurement conversions
- String manipulation
- Validation helpers

#### `nutritionCalculator.mjs`

Nutrition calculations

- Aggregate meal plan nutrition
- Calculate daily percentages
- Generate nutrition charts

#### `recipeFilter.mjs`

Recipe filtering logic

- Apply dietary filters
- Sort by criteria
- Search algorithm

#### `substitutionEngine.mjs`

Ingredient substitution logic

- Substitution database
- Dietary alternatives
- Measurement conversions

### 6.4 Data Models

#### `Recipe.mjs`

Recipe data structure

- Parse API responses
- Normalize data
- Validation methods

#### `MealPlan.mjs`

Meal plan data structure

- Week management
- Recipe assignments
- Serialization

#### `User.mjs`

User preferences and data

- Settings management
- Collection management
- History tracking

---

## 7. Graphic Identity

### Color Scheme

**Primary Colors** (Nigerian Flag Inspired):

- **Forest Green**: `#008751` - Main brand color, navigation, primary buttons
- **White**: `#FFFFFF` - Background, cards, text on dark
- **Nigerian Green**: `#00A86B` - Accents, hover states

**Secondary Colors** (Food & Warmth):

- **Jollof Red**: `#E63946` - Call-to-action buttons, alerts
- **Palm Oil Orange**: `#FF9F1C` - Highlights, badges, ratings
- **Plantain Yellow**: `#FFD166` - Warning messages, info boxes

**Neutral Colors**:

- **Dark Charcoal**: `#2B2D42` - Primary text, headers
- **Medium Gray**: `#8D99AE` - Secondary text, borders
- **Light Gray**: `#EDF2F4` - Backgrounds, subtle dividers
- **Off-White**: `#F8F9FA` - Card backgrounds, alternate sections

### Typography

**Primary Font**: **Poppins** (Google Fonts)

- Modern, clean, highly readable
- Weights: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)
- Usage: Headers, navigation, body text

**Secondary Font**: **Lora** (Google Fonts)

- Elegant serif for contrast
- Weights: 400 (Regular), 600 (Semi-Bold)
- Usage: Recipe titles, cultural context sections, quotes

**Font Sizes**:

- H1 (Page Titles): 2.5rem / 40px
- H2 (Section Headers): 2rem / 32px
- H3 (Subsections): 1.5rem / 24px
- Body Text: 1rem / 16px
- Small Text: 0.875rem / 14px

### Component Styling

**Buttons**:

- Primary: Forest Green background, white text, rounded corners (8px)
- Secondary: White background, Forest Green border and text
- Hover: Slight darken (10%) + subtle shadow
- Disabled: 50% opacity

**Cards**:

- White background
- Subtle shadow: `0 2px 8px rgba(0,0,0,0.1)`
- Border-radius: 12px
- Hover: Lift effect with increased shadow

**Input Fields**:

- Border: 1px solid Medium Gray
- Border-radius: 8px
- Focus: Forest Green border, subtle glow
- Padding: 12px 16px

**Icons**:

- Line style, consistent stroke width (2px)
- Use: Lucide Icons or Feather Icons library
- Size: 20px (small), 24px (medium), 32px (large)

### Application Icon Design

**Concept**: Steaming cooking pot with Nigerian flag colors

**Icon Description**:

- Circular green background (#008751)
- Stylized white cooking pot in center
- Three wavy steam lines rising from pot
- Steam lines alternate: green, white, green (Nigerian flag stripes)
- Optional: Small star or geometric pattern at top

**Variations**:

- Full color icon (for app/browser)
- Monochrome version (for favicons)
- Simplified version for small sizes

---

## 8. Timeline

### Week 5 (Nov 18-24): Foundation & Core Features

**Deliverables**:

- ✅ Complete project setup (repo, folder structure, dependencies)
- ✅ API integration modules (RecipeService, YouTubeService)
- ✅ Basic UI layout and navigation
- ✅ Homepage with featured recipes
- ✅ Recipe search functionality
- ✅ Recipe detail page with video integration
- **Milestone**: Users can search and view recipes with videos

**Tasks**:

- Set up Vite project with proper folder structure
- Register for Edamam and YouTube API keys
- Create API service modules with error handling
- Build reusable UI components (RecipeCard, SearchBar)
- Implement responsive navigation
- Create homepage layout with recipe grid
- Test API integrations thoroughly

---

### Week 6 (Nov 25-Dec 1): Advanced Features & Meal Planning

**Deliverables**:

- ✅ Meal planner interface (calendar view)
- ✅ Drag-and-drop or click-to-add meal assignment
- ✅ Shopping list generator
- ✅ Local storage implementation for saving data
- ✅ Recipe favorites and collections
- ✅ Nutrition dashboard
- **Milestone**: Users can create meal plans and generate shopping lists

**Tasks**:

- Build meal planner calendar component
- Implement local storage manager
- Create shopping list aggregation logic
- Add favorites functionality
- Build nutrition calculator and charts
- Implement recipe collections feature
- Add export/print functionality for meal plans

---

### Week 7 (Dec 2-8): Polish, Testing & Deployment

**Deliverables**:

- ✅ Mobile-responsive design refinements
- ✅ Cooking mode interface
- ✅ Recipe substitution suggestions
- ✅ Cultural context and tips pages
- ✅ Performance optimizations
- ✅ Comprehensive testing (unit, integration, user)
- ✅ Deployment to Netlify/Vercel
- ✅ Documentation (README, user guide)
- **Milestone**: Fully functional, deployed, production-ready application

**Tasks**:

- Test all features on mobile devices
- Optimize images and lazy loading
- Add loading states and error messages
- Implement cooking mode with timers
- Create cultural context pages
- Write unit tests for critical functions
- Perform cross-browser testing
- Deploy to hosting platform
- Create video demo/walkthrough
- Finalize project documentation

---

## 9. Project Planning

### Trello Board Link

**Board Name**: Nigerian Meal Planner - Final Project
**URL**: [Create your Trello board and insert link here]

### Sample Trello Card Structure

**List 1: Backlog**

- Set up project repository
- Register API keys
- Create wireframes in Figma
- Choose color scheme and fonts

**List 2: Week 5 - Foundation**

- Initialize Vite project
- Set up folder structure
- Create RecipeService module
- Create YouTubeService module
- Build navigation component
- Create homepage layout
- Build RecipeCard component
- Implement search functionality
- Create recipe detail page
- Integrate video tutorials
- Test API error handling

**List 3: Week 6 - Meal Planning**

- Create MealPlanner component
- Implement calendar grid
- Add drag-and-drop functionality
- Build ShoppingList component
- Create StorageManager module
- Implement favorites feature
- Build collections interface
- Create nutrition calculator
- Add nutrition charts
- Implement export functionality
- Test local storage

**List 4: Week 7 - Polish & Deploy**

- Mobile responsiveness testing
- Create cooking mode interface
- Add timer functionality
- Build substitution feature
- Create cultural context pages
- Optimize images
- Add loading states
- Implement error boundaries
- Write unit tests
- Cross-browser testing
- Deploy to Netlify
- Create README documentation
- Record demo video
- Final QA testing

**List 5: Nice-to-Have (Future)**

- User accounts and authentication
- Social sharing features
- Recipe rating and reviews
- Community recipe submissions
- Meal plan templates marketplace
- Grocery store integration
- Recipe scaling calculator
- Voice commands in cooking mode
- Multi-language support
- Progressive Web App features

**List 6: Bugs**

- [Track any bugs found during development]

**List 7: Completed**

- [Move finished cards here]

---

## 10. Challenges

### Technical Challenges

#### 1. API Rate Limiting & Quotas

**Challenge**: Both Edamam and YouTube APIs have usage limits. Free tier quotas may be restrictive during development and testing.

**Mitigation**:

- Implement aggressive caching of API responses in local storage
- Use localStorage to store recently fetched recipes for 24 hours
- Batch API requests where possible
- Monitor API usage with logging
- Consider implementing a mock API layer for development
- Display clear error messages when quotas are exceeded

#### 2. Nigerian Recipe Availability

**Challenge**: Edamam may have limited authentic Nigerian recipes, as it's a general recipe database.

**Mitigation**:

- Use broad search terms and filter results client-side
- Search for specific Nigerian dish names (Jollof, Egusi, etc.)
- Supplement with ingredient-based searches
- Create fallback mechanisms to show similar African/Caribbean recipes
- Consider creating a small custom recipe database for popular Nigerian dishes
- Allow users to submit recipe links for review

#### 3. Complex Meal Planning UI

**Challenge**: Creating an intuitive drag-and-drop interface that works on both desktop and mobile.

**Mitigation**:

- Start with a simple click-to-add interface
- Use a proven library like SortableJS for drag-and-drop if needed
- Provide alternative methods (buttons) for mobile users
- Conduct user testing early in development
- Keep the UI simple and focused on core functionality
- Provide clear visual feedback during interactions

#### 4. Nutrition Data Accuracy

**Challenge**: Ensuring nutritional information is accurate and properly aggregated across meal plans.

**Mitigation**:

- Rely on Edamam's verified nutrition data
- Clearly label nutrition as "estimated" where appropriate
- Implement careful calculation logic with unit tests
- Allow users to report discrepancies
- Provide sources for nutrition data
- Include disclaimers for dietary planning

### Development Challenges

#### 5. Scope Creep

**Challenge**: The project has many potential features that could expand beyond the 3-week timeline.

**Mitigation**:

- Strictly prioritize MVP features for Weeks 5-6
- Use Week 7 primarily for polish and deployment
- Move nice-to-have features to "Future Enhancements" backlog
- Set clear milestones for each week
- Review progress daily and adjust if falling behind
- Be willing to cut non-essential features if needed

#### 6. Responsive Design Complexity

**Challenge**: Ensuring the application works well on all device sizes, especially the meal planner calendar.

**Mitigation**:

- Design mobile-first, then enhance for desktop
- Use CSS Grid and Flexbox for flexible layouts
- Test on real devices early and often
- Consider separate views for mobile vs desktop meal planner
- Use Chrome DevTools device emulation during development
- Implement breakpoints strategically (mobile: <768px, tablet: 768-1024px, desktop: >1024px)

#### 7. Local Storage Limitations

**Challenge**: Browser storage limits (typically 5-10MB) may be restrictive for users with many saved recipes and meal plans.

**Mitigation**:

- Store only essential data (IDs and metadata, not full recipe objects)
- Implement data compression where possible
- Provide export/import functionality for backup
- Monitor storage usage and warn users approaching limits
- Implement data cleanup for old/unused items
- Consider IndexedDB for larger storage needs if localStorage proves insufficient

#### 8. Cultural Authenticity

**Challenge**: Ensuring the application respects and accurately represents Nigerian food culture without stereotyping.

**Mitigation**:

- Research Nigerian cuisine thoroughly
- Consult with Nigerian friends, family, or community members
- Include educational content about regional variations
- Avoid oversimplification of complex dishes
- Credit sources and recipe creators properly
- Be open to feedback and corrections from Nigerian users

### Learning Challenges

#### 9. API Integration Experience

**Challenge**: Limited prior experience with multiple third-party APIs and handling complex asynchronous data flows.

**Mitigation**:

- Start with simple API calls before building complex features
- Study API documentation thoroughly before coding
- Build isolated test modules for each API
- Use async/await consistently for cleaner code
- Implement robust error handling from the start
- Keep API logic separate from UI logic

#### 10. Testing & Quality Assurance

**Challenge**: Ensuring code quality and preventing bugs in a complex application with limited testing experience.

**Mitigation**:

- Write tests for critical business logic (nutrition calculations, data aggregation)
- Use browser DevTools extensively for debugging
- Implement linting (ESLint) and formatting (Prettier) from day one
- Test each feature immediately after implementation
- Keep functions small and focused for easier testing
- Create a checklist of manual tests for each major feature

---

## Conclusion

The Nigerian Meal Planner & Recipe Finder addresses a real need in the Nigerian diaspora community and food enthusiast circles. By combining recipe discovery, meal planning, video tutorials, and nutritional information, the application provides comprehensive support for anyone interested in exploring or maintaining connection to Nigerian cuisine.

The 3-week timeline is ambitious but achievable by focusing on core MVP features first and leaving enhancements for future iterations. The project leverages two robust APIs (Edamam and YouTube) to provide rich content without requiring a custom backend, making it feasible within the time constraints.

Success will be measured by:

- Functional recipe search and display
- Working meal planner with shopping list generation
- Video tutorial integration
- Mobile-responsive design
- Successful deployment to a live URL
- Positive feedback from initial users (classmates, family, friends)

This project will not only fulfill the course requirements but also create a valuable tool that can continue to grow and serve its community beyond the class timeline.

---

**Student Name**: [Your Name]
**Course**: WDD 330
**Instructor**: [Instructor Name]
**Due Date**: November 24, 2025
