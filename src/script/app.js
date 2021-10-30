const meals = document.querySelector('#meals');
const search = document.querySelector('#search');
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

function getMealsBySearch(meal) {
  try {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + meal)
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
      });
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
      <button type="button">Press</button>
    </div>
    `;

  const favBtn = meal.querySelector('.meal__body button');
  favBtn.addEventListener('click', () => {
    favBtn.classList.toggle('active');
  });

  meals.appendChild(meal);
}

// ========================================
getRandomMeal();
getMealsBySearch();

searchBtn.addEventListener('click', () => {
  let searchValue = search.value;
  const meals = getMealsBySearch(searchValue);
  // search.value = '';
  meals.forEach((elem) => {
    addMeal(elem);
  });
});
