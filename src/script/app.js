function getRandomMeal() {
    try {
        const resp = fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((responce) =>
            responce.json().then((data) => {
                const randomMeal = data.meals[0];
                console.log(randomMeal);
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

// ========================================
getRandomMeal();
