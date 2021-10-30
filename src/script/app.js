const mealsElem = document.querySelector('#meals');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');

async function getRandomMeal() {
  try {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);
    addMeal(randomMeal, true);
  } catch (err) {
    console.error(err);
  }
}

async function getMealsBySearch(meal) {
  try {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + meal);
    const respData = await resp.json();
    const meals = await respData.meals;
    return meals;
  } catch (error) {
    console.error(error);
  }
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
    </div>
    `;

  meals.appendChild(meal);
}

// ========================================
getRandomMeal();
getMealsBySearch();

searchBtn.addEventListener('click', async () => {
  mealsElem.innerHTML = '';
  const search = searchInput.value;
  const meals = await getMealsBySearch(search);
  searchInput.value = '';

  if (meals) {
    meals.forEach((elem) => {
      addMeal(elem);
    });
  }
});
