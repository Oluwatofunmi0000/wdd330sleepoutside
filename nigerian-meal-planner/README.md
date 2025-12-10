# 🍲 Nigerian Meal Planner & Recipe Finder

A web application designed to help users discover, plan, and prepare authentic Nigerian meals. Find recipes, plan your weekly meals, generate shopping lists, and learn proper cooking techniques.

## Features

- **Recipe Search & Discovery** - Search by dish name, ingredients, meal type, or difficulty level
- **Video Tutorials** - Watch cooking videos from YouTube for each recipe
- **Weekly Meal Planner** - Drag-and-drop calendar to plan your week
- **Shopping List Generator** - Auto-generate shopping lists from meal plans
- **Favorites & Collections** - Save and organize your favorite recipes
- **Nutrition Dashboard** - View detailed nutritional information
- **Responsive Design** - Works on mobile, tablet, and desktop

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Build Tool**: Vite
- **APIs**:
  - Edamam Recipe Search API
  - YouTube Data API v3
- **Storage**: LocalStorage for user preferences and saved recipes

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repo-url>
cd nigerian-meal-planner
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
# Create a .env file and add:
EDAMAM_ID=your_edamam_id
EDAMAM_KEY=your_edamam_key
YOUTUBE_KEY=your_youtube_api_key
```

### Getting API Keys

1. **Edamam Recipe API**

   - Visit: https://developer.edamam.com/
   - Sign up for a free account
   - Get your App ID and Key

2. **YouTube Data API**
   - Visit: https://console.cloud.google.com/
   - Create a new project
   - Enable YouTube Data API v3
   - Create an API key

### Running Locally

```bash
npm run dev
```

The app will open at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

Output files will be in the `dist/` directory.

## Project Structure

```
nigerian-meal-planner/
├── src/
│   ├── index.html           # Main page
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   ├── main.js         # Entry point
│   │   └── services/
│   │       ├── RecipeService.mjs    # Edamam API handler
│   │       └── YouTubeService.mjs   # YouTube API handler
│   ├── images/             # Recipe images
│   └── pages/              # Sub-pages
├── public/                 # Static assets
├── dist/                   # Build output
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies
```

## Development Roadmap

### Week 1: Foundation

- ✅ Project setup with Vite
- ✅ API integrations (Edamam + YouTube)
- ⏳ Recipe search interface
- ⏳ Recipe detail pages

### Week 2: Core Features

- ⏳ Meal planner calendar
- ⏳ Shopping list generator
- ⏳ Favorites & collections

### Week 3: Polish & Deploy

- ⏳ Mobile responsiveness
- ⏳ Performance optimization
- ⏳ Testing & QA
- ⏳ Deployment to Netlify

## Contributing

This is a personal project for WDD 330 Final Project. Feel free to fork and modify!

## License

ISC License

## Author

Created as a WDD 330 Final Project by [Your Name]

## Support

For issues or questions, please open an GitHub issue or contact the author.

---

**Live Site**: [Coming Soon - Deploying to Netlify]

**Trello Board**: [Coming Soon - Project tracking]
