let food = document.querySelector(".food");
let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let british = document.querySelector("#british");
let russian = document.querySelector("#russian");

let recipe;
const fetchData = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();
  recipe = data.meals;
  showData(recipe);
};

const searchRecipe = () => {
  let input = document.querySelector("#search");

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputValue = input.value;
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      const data = await api.json();
      recipe = data.meals;
      showData(recipe);
    }
  });
};
searchRecipe();

let showData = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meal) => `
     <div class = "mealContainer">
      <div>
        <img src="${meal.strMealThumb}" class = "mealImg" />
      </div>
      <h5>${meal.strMeal}</h5>
    </div>
    
    `
    )
    .join(" ");
};

fetchData("indian");
indian.addEventListener("click", () => {
  fetchData("indian");
});
canadian.addEventListener("click", () => {
  fetchData("canadian");
});
american.addEventListener("click", () => {
  fetchData("american");
});
thai.addEventListener("click", () => {
  fetchData("thai");
});
british.addEventListener("click", () => {
  fetchData("british");
});
russian.addEventListener("click", () => {
  fetchData("russian");
});
