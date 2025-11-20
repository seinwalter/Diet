# T-Boost Diet Tracker

A modern, Spotify-themed diet tracking app designed for testosterone optimization, muscle building, and fat loss. Features a 7-day rotating meal plan with intelligent day detection and real-time meal tracking.

## Features

### 1. Smart Day Detection
- Automatically detects which day of the 7-day cycle you're on
- Cycles through the meal plan seamlessly
- Always shows you today's plan

### 2. Current Meal Indicator
- Tracks which meal you should be eating based on the current time
- Highlights your current meal with a green indicator
- Shows completed meals in a dimmed state

### 3. Macro Tracking
- Input your consumed calories, protein, fat, and carbs
- Visual progress bars showing your progress toward daily goals
- Real-time tracking of your nutritional intake

### 4. BMI Calculator & Tracker
- Calculate your BMI instantly
- Track weight progress over time
- Visual categorization (Underweight, Normal, Overweight, Obese)
- Historical weight log

### 5. Shopping List
- Complete weekly shopping list for all meals
- Organized by category (Proteins, Fats, Carbs, Vegetables, Dairy, Extras)
- Checkboxes to mark items as purchased
- Saves your progress automatically

### 6. Weekly Overview
- View all 7 days at a glance
- Compare macros across different days
- See detailed meal breakdowns for each day

## The Diet Plan

### Macro Targets (Daily Average)
- **Calories**: 2,200-2,400
- **Protein**: 180-200g
- **Fat**: 140-160g (35-40% of calories)
- **Carbs**: 100-130g (strategically timed around workouts)

### Meal Timing
- **Meal 1**: Post-Workout (within 1-2 hours)
- **Meal 2**: 3-4 hours later
- **Meal 3**: 3-4 hours later
- **Meal 4**: 2-3 hours before bed

### Testosterone-Boosting Focus
- High-quality saturated fats from red meat, eggs, and butter
- Cholesterol from whole eggs (testosterone precursor)
- Zinc from red meat and seafood
- Vitamin D from fatty fish and fortified dairy
- Selenium from Brazil nuts
- No soy, minimal processed carbs, no seed oils

## How to Use

### Two Versions Available

**Desktop Version (`index.html`)**:
- Full-featured desktop layout with sidebar navigation
- Best for tablets and computers

**Mobile Version (`mobile.html`)**:
- Single-file optimized for phones
- Bottom navigation bar
- Touch-optimized interface
- Manual day selection
- Reset controls

### Running the App

1. **Open the app**:
   - Desktop/Tablet: Open `index.html` in any modern web browser
   - **Mobile/Phone: Open `mobile.html` for best experience**
2. **Navigate**: Use the sidebar (desktop) or bottom navigation (mobile) to switch between views
3. **Track macros**: Go to "Macro Tracker" to log your daily intake
4. **Check BMI**: Visit "BMI Tracker" to calculate and track your body metrics
5. **Shop**: Use "Shopping List" to organize your weekly grocery trip

### Mobile-Specific Features

The mobile version includes additional controls:
- **Day Selector**: Manually choose which day (1-7) you're on
- **Auto-Detect Day**: Switch back to automatic day detection based on current date
- **Reset All Data**: Clear all saved data (macros, weight log, shopping list, day override)
- **Reset Shopping List**: Uncheck all shopping items

**To use on your phone**:
1. Transfer `mobile.html` to your phone or access it via a web server
2. Open in your phone's browser (Safari, Chrome, etc.)
3. Add to home screen for app-like experience

### Day Detection

The app automatically calculates which day you're on based on the start date (January 20, 2025). It will cycle through all 7 days continuously, so you'll always see the correct meal plan.

### Meal Time Detection

The app determines your current meal based on the time of day:
- Before 10 AM: Meal 1 (Post-Workout Breakfast)
- 10 AM - 2 PM: Meal 2 (Lunch)
- 2 PM - 6 PM: Meal 3 (Dinner)
- After 6 PM: Meal 4 (Evening)

## Design

The app features a **Spotify-inspired design** with:
- Dark theme (#191414 background)
- Spotify green accents (#1DB954)
- Smooth transitions and hover effects
- Clean, modern typography
- Responsive layout for all devices

## Data Persistence

The app uses browser localStorage to save:
- Shopping list checkbox states
- Weight tracking history
- BMI calculations

Your data is stored locally in your browser and never sent to any server.

## Customization

### Changing the Start Date

To adjust when Day 1 begins, edit `app.js` and change this line:

```javascript
const startDate = new Date('2025-01-20'); // Change this date
```

### Modifying Meal Plans

All meal data is stored in the `mealPlan` object in `app.js`. You can:
- Adjust portion sizes
- Change food items
- Modify macro values
- Add or remove meals

## Browser Compatibility

Works best in modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tips for Success

1. **Meal Prep**: Cook rice and sweet potatoes in bulk on Sundays
2. **Timing**: Try to eat Meal 1 within 1-2 hours post-workout for optimal results
3. **Brazil Nuts**: Limit to 2-3 per day (selenium toxicity)
4. **Consistency**: Stick to the plan for at least 4 weeks to see results
5. **Hydration**: Drink plenty of water throughout the day
6. **Sleep**: Aim for 7-9 hours for optimal testosterone production

## License

Free to use and modify for personal use.
