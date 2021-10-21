const meals = document.querySelector('#meals');

function getRandomMeal() {
    try {
        const resp = fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((responce) =>
            responce.json().then((data) => {
                const randomMeal = data.meals[0];
                console.log(randomMeal);
                addMeal(randomMeal, true);
            })
        );
    } catch (err) {
        console.error(err);
    }
}

function getMealById(id) {
    const meal = fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
}

function getMealsBySearch(term) {
    const meals = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('article');
    meal.classList = 'meal';
    meal.innerHTML = `
      <div class="meal__header" id="put-pic-four">
        ${random ? `<span class="random">Random Recipe</span>` : ''}
        <img src='${mealData.strMealThumb}' alt='${mealData.Meal}'
      </div>
      <div class="meal__body">
        <h5>${mealData.strMeal}</h5>
        <button type="button">Press</button>
      </div>
    `;

    meals.appendChild(meal);
}

// ========================================
getRandomMeal();
