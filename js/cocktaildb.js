// search field
const searchFieldValue = () => {
    const searchField = document.getElementById('search-field').value;
    document.getElementById('search-field').value = '';
    loadCocktail(searchField);
    // return searchField;

}
// load cocktail data
const loadCocktail = searchField => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchField}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.drinks));
}
// loadCocktail();

const displayResult = drinks => {
    // console.log(drinks);
    const drinksDiv = document.getElementById('display-drink');
    drinksDiv.textContent = '';
    drinks.forEach(drink => {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">${drink.strInstructions.slice(0,150)}</p>
        </div>
      </div>
        `;
        drinksDiv.appendChild(div);
    })
}