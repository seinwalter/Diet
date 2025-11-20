// 7-Day Meal Plan Data
const mealPlan = {
    day1: {
        name: "Day 1",
        totalCalories: 2260,
        totalProtein: 150,
        totalFat: 138,
        totalCarbs: 128,
        meals: [
            {
                name: "Meal 1 (Post-Workout Breakfast)",
                time: "Post-Workout",
                foods: [
                    "4 whole eggs scrambled in 1 tbsp butter",
                    "1 cup cooked white rice",
                    "1 cup sautéed spinach"
                ],
                calories: 540,
                protein: 32,
                fat: 24,
                carbs: 48
            },
            {
                name: "Meal 2 (Lunch)",
                time: "Lunch",
                foods: [
                    "8 oz ribeye steak",
                    "2 cups roasted broccoli in 1 tbsp olive oil",
                    "1/2 avocado"
                ],
                calories: 720,
                protein: 56,
                fat: 52,
                carbs: 14
            },
            {
                name: "Meal 3 (Dinner)",
                time: "Dinner",
                foods: [
                    "6 oz ground beef (80/20) cooked with peppers & onions",
                    "1 cup jasmine rice",
                    "Spinach salad with olive oil & vinegar"
                ],
                calories: 580,
                protein: 38,
                fat: 32,
                carbs: 42
            },
            {
                name: "Meal 4 (Evening)",
                time: "Evening",
                foods: [
                    "1 cup full-fat Greek yogurt",
                    "1 oz almonds",
                    "2 oz dark chocolate"
                ],
                calories: 420,
                protein: 24,
                fat: 30,
                carbs: 24
            }
        ]
    },
    day2: {
        name: "Day 2",
        totalCalories: 2200,
        totalProtein: 158,
        totalFat: 132,
        totalCarbs: 110,
        meals: [
            {
                name: "Meal 1 (Post-Workout Breakfast)",
                time: "Post-Workout",
                foods: [
                    "4 whole eggs + 2 egg whites scrambled",
                    "1 medium sweet potato",
                    "1 cup sautéed mushrooms in butter"
                ],
                calories: 520,
                protein: 36,
                fat: 22,
                carbs: 42
            },
            {
                name: "Meal 2 (Lunch)",
                time: "Lunch",
                foods: [
                    "8 oz salmon",
                    "2 cups asparagus roasted in olive oil",
                    "1 avocado"
                ],
                calories: 680,
                protein: 52,
                fat: 48,
                carbs: 18
            },
            {
                name: "Meal 3 (Dinner)",
                time: "Dinner",
                foods: [
                    "6 oz chicken thighs",
                    "1 cup white rice",
                    "Broccoli with garlic butter"
                ],
                calories: 560,
                protein: 42,
                fat: 24,
                carbs: 46
            },
            {
                name: "Meal 4 (Evening)",
                time: "Evening",
                foods: [
                    "1 can sardines in olive oil",
                    "1 oz macadamia nuts",
                    "2-3 Brazil nuts"
                ],
                calories: 440,
                protein: 28,
                fat: 38,
                carbs: 4
            }
        ]
    },
    day3: {
        name: "Day 3",
        totalCalories: 2200,
        totalProtein: 166,
        totalFat: 116,
        totalCarbs: 136,
        meals: [
            {
                name: "Meal 1 (Post-Workout Breakfast)",
                time: "Post-Workout",
                foods: [
                    "4 whole eggs cooked in butter",
                    "1 cup cooked jasmine rice",
                    "Bell peppers sautéed"
                ],
                calories: 540,
                protein: 30,
                fat: 24,
                carbs: 50
            },
            {
                name: "Meal 2 (Lunch)",
                time: "Lunch",
                foods: [
                    "8 oz ground turkey",
                    "Mixed vegetables (broccoli, peppers, onions) in olive oil",
                    "1/2 cup rice",
                    "1/2 avocado"
                ],
                calories: 620,
                protein: 54,
                fat: 32,
                carbs: 32
            },
            {
                name: "Meal 3 (Dinner)",
                time: "Dinner",
                foods: [
                    "8 oz NY strip steak",
                    "1 large sweet potato",
                    "Asparagus in butter"
                ],
                calories: 680,
                protein: 56,
                fat: 36,
                carbs: 36
            },
            {
                name: "Meal 4 (Evening)",
                time: "Evening",
                foods: [
                    "1 cup Greek yogurt",
                    "1 oz almonds",
                    "1/2 cup whole milk"
                ],
                calories: 360,
                protein: 26,
                fat: 24,
                carbs: 18
            }
        ]
    },
    day4: {
        name: "Day 4",
        totalCalories: 2320,
        totalProtein: 170,
        totalFat: 134,
        totalCarbs: 118,
        meals: [
            {
                name: "Meal 1 (Post-Workout Breakfast)",
                time: "Post-Workout",
                foods: [
                    "3 whole eggs + 3 egg whites",
                    "1 cup white rice",
                    "Spinach and mushrooms sautéed in butter"
                ],
                calories: 500,
                protein: 38,
                fat: 18,
                carbs: 48
            },
            {
                name: "Meal 2 (Lunch)",
                time: "Lunch",
                foods: [
                    "6 oz beef liver OR 8 oz ground beef",
                    "2 cups mixed vegetables in olive oil",
                    "1 avocado"
                ],
                calories: 660,
                protein: 48,
                fat: 46,
                carbs: 18
            },
            {
                name: "Meal 3 (Dinner)",
                time: "Dinner",
                foods: [
                    "8 oz salmon",
                    "1 cup jasmine rice",
                    "Broccoli with garlic and olive oil"
                ],
                calories: 640,
                protein: 52,
                fat: 28,
                carbs: 48
            },
            {
                name: "Meal 4 (Evening)",
                time: "Evening",
                foods: [
                    "4 hard-boiled eggs",
                    "1 oz macadamia nuts",
                    "2 oz sharp cheddar"
                ],
                calories: 520,
                protein: 32,
                fat: 42,
                carbs: 4
            }
        ]
    },
    day5: {
        name: "Day 5",
        totalCalories: 2340,
        totalProtein: 156,
        totalFat: 144,
        totalCarbs: 130,
        meals: [
            {
                name: "Meal 1 (Post-Workout Breakfast)",
                time: "Post-Workout",
                foods: [
                    "4 whole eggs scrambled with cheese",
                    "1 medium sweet potato",
                    "Sautéed peppers and onions"
                ],
                calories: 560,
                protein: 32,
                fat: 28,
                carbs: 42
            },
            {
                name: "Meal 2 (Lunch)",
                time: "Lunch",
                foods: [
                    "8 oz chicken thighs",
                    "1 cup white rice",
                    "Mixed vegetables in butter"
                ],
                calories: 580,
                protein: 46,
                fat: 26,
                carbs: 44
            },
            {
                name: "Meal 3 (Dinner)",
                time: "Dinner",
                foods: [
                    "8 oz ribeye",
                    "Asparagus and mushrooms roasted in olive oil",
                    "1 avocado"
                ],
                calories: 760,
                protein: 54,
                fat: 58,
                carbs: 16
            },
            {
                name: "Meal 4 (Evening)",
                time: "Evening",
                foods: [
                    "1 cup Greek yogurt",
                    "1 oz almonds",
                    "Small handful of berries",
                    "2 oz dark chocolate"
                ],
                calories: 440,
                protein: 24,
                fat: 32,
                carbs: 28
            }
        ]
    },
    day6: {
        name: "Day 6",
        totalCalories: 2340,
        totalProtein: 162,
        totalFat: 140,
        totalCarbs: 116,
        meals: [
            {
                name: "Meal 1 (Post-Workout Breakfast)",
                time: "Post-Workout",
                foods: [
                    "4 whole eggs cooked in butter",
                    "1 cup jasmine rice",
                    "Spinach and garlic"
                ],
                calories: 520,
                protein: 30,
                fat: 22,
                carbs: 50
            },
            {
                name: "Meal 2 (Lunch)",
                time: "Lunch",
                foods: [
                    "8 oz ground beef with taco seasoning",
                    "Bell peppers and onions",
                    "1/2 avocado",
                    "Side salad with olive oil"
                ],
                calories: 680,
                protein: 48,
                fat: 48,
                carbs: 16
            },
            {
                name: "Meal 3 (Dinner)",
                time: "Dinner",
                foods: [
                    "8 oz salmon",
                    "1 large sweet potato",
                    "Broccoli roasted in olive oil"
                ],
                calories: 640,
                protein: 52,
                fat: 28,
                carbs: 46
            },
            {
                name: "Meal 4 (Evening)",
                time: "Evening",
                foods: [
                    "1 can sardines",
                    "1 oz macadamia nuts",
                    "2 oz cheese",
                    "2-3 Brazil nuts"
                ],
                calories: 500,
                protein: 32,
                fat: 42,
                carbs: 4
            }
        ]
    },
    day7: {
        name: "Day 7",
        totalCalories: 2160,
        totalProtein: 162,
        totalFat: 110,
        totalCarbs: 146,
        meals: [
            {
                name: "Meal 1 (Post-Workout Breakfast)",
                time: "Post-Workout",
                foods: [
                    "4 whole eggs + 2 egg whites",
                    "1 cup white rice",
                    "Mixed vegetables"
                ],
                calories: 520,
                protein: 36,
                fat: 20,
                carbs: 50
            },
            {
                name: "Meal 2 (Lunch)",
                time: "Lunch",
                foods: [
                    "8 oz chicken thighs",
                    "2 cups roasted vegetables in olive oil",
                    "1/2 cup rice"
                ],
                calories: 580,
                protein: 44,
                fat: 32,
                carbs: 32
            },
            {
                name: "Meal 3 (Dinner)",
                time: "Dinner",
                foods: [
                    "8 oz NY strip steak",
                    "1 cup jasmine rice",
                    "Asparagus with butter"
                ],
                calories: 680,
                protein: 56,
                fat: 32,
                carbs: 48
            },
            {
                name: "Meal 4 (Evening)",
                time: "Evening",
                foods: [
                    "1 cup Greek yogurt",
                    "1 oz almonds",
                    "Remaining proteins/leftovers as needed"
                ],
                calories: 380,
                protein: 26,
                fat: 26,
                carbs: 16
            }
        ]
    }
};

// State Management
let currentDay = 1;
let currentMealIndex = 0;
let macroTracking = {
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    detectCurrentDay();
    detectCurrentMeal();
    renderTodaysMeals();
    renderWeekOverview();
    setupNavigation();
    setupMacroTracker();
    setupBMICalculator();
    setupShoppingList();
    updateDailySummary();
});

// Detect Current Day (cycles through 7 days)
function detectCurrentDay() {
    const startDate = new Date('2025-01-20'); // Starting date
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    currentDay = (diffDays % 7) + 1;

    updateCurrentDayDisplay();
}

// Update Current Day Display
function updateCurrentDayDisplay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = days[today.getDay()];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);

    document.getElementById('currentDayTitle').textContent = `Day ${currentDay} - ${dayName}`;
    document.getElementById('currentDate').textContent = dateString;
}

// Detect Current Meal based on time
function detectCurrentMeal() {
    const now = new Date();
    const hour = now.getHours();

    // Meal timing logic
    if (hour < 10) {
        currentMealIndex = 0; // Breakfast
    } else if (hour < 14) {
        currentMealIndex = 1; // Lunch
    } else if (hour < 18) {
        currentMealIndex = 2; // Dinner
    } else {
        currentMealIndex = 3; // Evening
    }
}

// Render Today's Meals
function renderTodaysMeals() {
    const dayData = mealPlan[`day${currentDay}`];
    const container = document.getElementById('mealsContainer');
    container.innerHTML = '';

    dayData.meals.forEach((meal, index) => {
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-card';

        if (index === currentMealIndex) {
            mealCard.classList.add('current');
        } else if (index < currentMealIndex) {
            mealCard.classList.add('completed');
        }

        const foodsList = meal.foods.map(food => `<li>${food}</li>`).join('');

        mealCard.innerHTML = `
            <div class="meal-header">
                <div>
                    <h3 class="meal-title">${meal.name}</h3>
                    ${index === currentMealIndex ? '<span class="current-indicator">Current Meal</span>' : ''}
                </div>
                <span class="meal-time">${meal.time}</span>
            </div>
            <ul class="meal-foods">
                ${foodsList}
            </ul>
            <div class="meal-macros">
                <div class="macro-item">
                    <div class="macro-label">Calories</div>
                    <div class="macro-value">${meal.calories}</div>
                </div>
                <div class="macro-item">
                    <div class="macro-label">Protein</div>
                    <div class="macro-value">${meal.protein}g</div>
                </div>
                <div class="macro-item">
                    <div class="macro-label">Fat</div>
                    <div class="macro-value">${meal.fat}g</div>
                </div>
                <div class="macro-item">
                    <div class="macro-label">Carbs</div>
                    <div class="macro-value">${meal.carbs}g</div>
                </div>
            </div>
        `;

        container.appendChild(mealCard);
    });
}

// Render Week Overview
function renderWeekOverview() {
    const container = document.getElementById('weekGrid');
    container.innerHTML = '';

    for (let i = 1; i <= 7; i++) {
        const dayData = mealPlan[`day${i}`];
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';

        if (i === currentDay) {
            dayCard.classList.add('current-day');
        }

        const mealsList = dayData.meals.map(meal =>
            `<li>${meal.name}: ${meal.calories} cal</li>`
        ).join('');

        dayCard.innerHTML = `
            <div class="day-header">
                <h3 class="day-number">Day ${i}</h3>
                ${i === currentDay ? '<span class="current-indicator">Today</span>' : ''}
            </div>
            <div class="meal-macros">
                <div class="macro-item">
                    <div class="macro-label">Calories</div>
                    <div class="macro-value">${dayData.totalCalories}</div>
                </div>
                <div class="macro-item">
                    <div class="macro-label">Protein</div>
                    <div class="macro-value">${dayData.totalProtein}g</div>
                </div>
                <div class="macro-item">
                    <div class="macro-label">Fat</div>
                    <div class="macro-value">${dayData.totalFat}g</div>
                </div>
                <div class="macro-item">
                    <div class="macro-label">Carbs</div>
                    <div class="macro-value">${dayData.totalCarbs}g</div>
                </div>
            </div>
            <ul class="day-meals-list">
                ${mealsList}
            </ul>
        `;

        container.appendChild(dayCard);
    }
}

// Update Daily Summary
function updateDailySummary() {
    const dayData = mealPlan[`day${currentDay}`];
    document.getElementById('dailyCalories').textContent = dayData.totalCalories.toLocaleString();
    document.getElementById('dailyProtein').textContent = `${dayData.totalProtein}g`;
    document.getElementById('dailyFat').textContent = `${dayData.totalFat}g`;
    document.getElementById('dailyCarbs').textContent = `${dayData.totalCarbs}g`;
}

// Navigation Setup
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Hide all views
            document.querySelectorAll('.view').forEach(view => {
                view.classList.remove('active');
            });

            // Show selected view
            const viewName = this.getAttribute('data-view');
            const viewId = viewName + 'View';
            document.getElementById(viewId).classList.add('active');
        });
    });
}

// Macro Tracker Setup
function setupMacroTracker() {
    const updateButton = document.getElementById('updateMacros');

    updateButton.addEventListener('click', function() {
        const calories = parseInt(document.getElementById('consumedCalories').value) || 0;
        const protein = parseInt(document.getElementById('consumedProtein').value) || 0;
        const fat = parseInt(document.getElementById('consumedFat').value) || 0;
        const carbs = parseInt(document.getElementById('consumedCarbs').value) || 0;

        macroTracking = { calories, protein, fat, carbs };
        updateMacroProgress();
    });
}

// Update Macro Progress
function updateMacroProgress() {
    const dayData = mealPlan[`day${currentDay}`];

    // Calories
    const caloriesPercent = Math.min((macroTracking.calories / dayData.totalCalories) * 100, 100);
    document.getElementById('caloriesBar').style.width = `${caloriesPercent}%`;
    document.getElementById('caloriesProgress').textContent =
        `${macroTracking.calories.toLocaleString()} / ${dayData.totalCalories.toLocaleString()}`;

    // Protein
    const proteinPercent = Math.min((macroTracking.protein / dayData.totalProtein) * 100, 100);
    document.getElementById('proteinBar').style.width = `${proteinPercent}%`;
    document.getElementById('proteinProgress').textContent =
        `${macroTracking.protein}g / ${dayData.totalProtein}g`;

    // Fat
    const fatPercent = Math.min((macroTracking.fat / dayData.totalFat) * 100, 100);
    document.getElementById('fatBar').style.width = `${fatPercent}%`;
    document.getElementById('fatProgress').textContent =
        `${macroTracking.fat}g / ${dayData.totalFat}g`;

    // Carbs
    const carbsPercent = Math.min((macroTracking.carbs / dayData.totalCarbs) * 100, 100);
    document.getElementById('carbsBar').style.width = `${carbsPercent}%`;
    document.getElementById('carbsProgress').textContent =
        `${macroTracking.carbs}g / ${dayData.totalCarbs}g`;
}

// BMI Calculator Setup
function setupBMICalculator() {
    const calculateButton = document.getElementById('calculateBMI');

    calculateButton.addEventListener('click', function() {
        const heightCm = parseFloat(document.getElementById('heightCm').value);
        const weightKg = parseFloat(document.getElementById('weightKg').value);

        if (heightCm && weightKg) {
            const heightM = heightCm / 100;
            const bmi = (weightKg / (heightM * heightM)).toFixed(1);

            document.getElementById('bmiValue').textContent = bmi;

            let category = '';
            let categoryClass = '';

            if (bmi < 18.5) {
                category = 'Underweight';
                categoryClass = 'underweight';
            } else if (bmi < 25) {
                category = 'Normal Weight';
                categoryClass = 'normal';
            } else if (bmi < 30) {
                category = 'Overweight';
                categoryClass = 'overweight';
            } else {
                category = 'Obese';
                categoryClass = 'obese';
            }

            document.getElementById('bmiCategory').textContent = category;
            document.getElementById('bmiCategory').className = `bmi-category ${categoryClass}`;

            // Save to localStorage for tracking
            const weightData = JSON.parse(localStorage.getItem('weightTracking') || '[]');
            weightData.push({
                date: new Date().toLocaleDateString(),
                weight: weightKg,
                bmi: bmi
            });
            localStorage.setItem('weightTracking', JSON.stringify(weightData));
            updateWeightLog();
        }
    });

    // Load saved weight data
    updateWeightLog();
}

// Update Weight Log
function updateWeightLog() {
    const weightData = JSON.parse(localStorage.getItem('weightTracking') || '[]');
    const container = document.getElementById('weightLog');

    if (weightData.length === 0) {
        container.innerHTML = '<p class="placeholder">Start logging your weight to see progress</p>';
        return;
    }

    const recentData = weightData.slice(-5).reverse();
    const html = recentData.map(entry => `
        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span>${entry.date}</span>
            <span>${entry.weight} kg</span>
            <span>BMI: ${entry.bmi}</span>
        </div>
    `).join('');

    container.innerHTML = html;
}

// Shopping List Setup
function setupShoppingList() {
    const checkboxes = document.querySelectorAll('.shopping-items input[type="checkbox"]');

    // Load saved state
    const savedState = JSON.parse(localStorage.getItem('shoppingList') || '{}');
    checkboxes.forEach(checkbox => {
        if (savedState[checkbox.id]) {
            checkbox.checked = true;
        }
    });

    // Save state on change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const savedState = JSON.parse(localStorage.getItem('shoppingList') || '{}');
            savedState[this.id] = this.checked;
            localStorage.setItem('shoppingList', JSON.stringify(savedState));
        });
    });
}
