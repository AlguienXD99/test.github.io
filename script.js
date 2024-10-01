function addIngredient(ingredientElement) {
    const ingredientName = ingredientElement.getAttribute('data-ingredient');
    const topping = document.createElement('div');
    topping.textContent = ingredientName;
    topping.className = 'topping';
    topping.style.position = 'absolute';
    topping.style.left = Math.random() * 100 + 'px'; // Posición aleatoria
    topping.style.top = Math.random() * 100 + 'px'; // Posición aleatoria
    document.getElementById('toppings').appendChild(topping);
}

function resetPizza() {
    const toppings = document.getElementById('toppings');
    toppings.innerHTML = ''; // Limpiar los ingredientes
}
