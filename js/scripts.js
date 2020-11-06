// database
var breadType = null;
var ingredient = [];
var topping = [];
var additional = null;
var orderedTypes = [breadType, ingredient, additional];

var breadTypes = ["ingichka", "o'rtacha", "qalin", "bo'lka non"];
var ingredientTypes = ["mol go'shti", "tovuq go'shti", "kurka go'shti", "halol kolbasa", "qo'ziqorin", "ko'katlar", "pomidor", "bodring", "zaytun", "2 hissa pishloq"];
var toppingTypes = ["achchiq", "sosiskali"];

// HTML elements
var elPizzaForm = document.querySelector('.pizza-form');
var elPizzaBread = elPizzaForm.querySelector('.pizza-bread');
var elOrderAlert = document.querySelector('#orderAlert');
var elOrder = document.querySelector('#order');
var elOrderIngredient = document.querySelector('#orderIngredient');
var elOrderTopping = document.querySelector('#orderTopping');
var elIngredientWrapper = elPizzaForm.querySelector('.ingredient-wrapper');
var elIngredientAllWrapper = elPizzaForm.querySelector('.ingredient-all-wrapper');
var elTopping = elPizzaForm.querySelector('.topping');

elPizzaForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  alert("Buyurtma yuborildi!");
});

elPizzaBread.addEventListener('change', function() {
  elOrderAlert.classList.remove('d-none');
  elIngredientAllWrapper.classList.remove('d-none');
  breadType = this.value;
  elOrder.textContent = '';
  elOrder.append(breadType);
});

// generate bread types
for(var i = 0; i < breadTypes.length; i++) {
  var elBreadOption = document.createElement('option');
  elBreadOption.setAttribute('value', breadTypes[i]);
  elBreadOption.textContent = capitalizeFirstLetter(breadTypes[i]);
  
  elPizzaBread.appendChild(elBreadOption);
}

// generate ingredient of pizza
for(var i = 0; i < ingredientTypes.length; i++) {
  var elIngredientLabel = document.createElement('label');
  elIngredientLabel.setAttribute('class', 'form-check-label mr-5');

  var elIngredientCheckbox = document.createElement('input');
  elIngredientCheckbox.setAttribute('class', 'form-check-input');
  elIngredientCheckbox.setAttribute('type', 'checkbox');
  elIngredientCheckbox.setAttribute('name', 'ingredient');
  elIngredientCheckbox.setAttribute('value', ingredientTypes[i]);

  elIngredientCheckbox.addEventListener('change', function() {
    if(ingredient.indexOf(this.value) > -1) {
      ingredient.splice(ingredient.indexOf(this.value), 1);
    } else {
      ingredient.push(this.value);
    }
    elOrderIngredient.textContent = '';
    elOrderIngredient.append(ingredient.join(', '));
    elTopping.classList.remove('d-none');
  });

  elIngredientLabel.appendChild(elIngredientCheckbox);
  elIngredientLabel.append(capitalizeFirstLetter(ingredientTypes[i]));
  elIngredientWrapper.appendChild(elIngredientLabel);
}

//generate topping types
for(var i = 0; i < toppingTypes.length; i++) {
  var elToppingLabel = document.createElement('label');
  elToppingLabel.setAttribute('class', 'form-check-label mr-5');

  var elToppingCheckbox = document.createElement('input');
  elToppingCheckbox.setAttribute('class', 'form-check-input');
  elToppingCheckbox.setAttribute('type', 'checkbox');
  elToppingCheckbox.setAttribute('name', 'topping');
  elToppingCheckbox.setAttribute('value', toppingTypes[i]);

  elToppingCheckbox.addEventListener('change', function() {
    if(topping.indexOf(this.value) > -1) {
      topping.splice(topping.indexOf(this.value), 1);
    } else {
      topping.push(this.value);
    }
    elOrderTopping.textContent = '';
    elOrderTopping.append(topping.join(', '));
  });

  elToppingLabel.appendChild(elToppingCheckbox);
  elToppingLabel.append(capitalizeFirstLetter(toppingTypes[i]));
  elTopping.appendChild(elToppingLabel); 
}

// functions
function capitalizeFirstLetter(string) {
  var makeStringArray = string.split('');
  var firstLetter = makeStringArray[0].toUpperCase();
  makeStringArray.splice(0, 1, firstLetter);

  return makeStringArray.join('');
}

