let score = 0;
let currentOrder = {};

function addIngredient(ingredientElement) {
    const ingredientName = ingredientElement.getAttribute('data-ingredient');
    const topping = document.createElement('div');
    topping.textContent = ingredientName;
    topping.className = 'topping';
    topping.style.margin = '5px'; // Espaciado entre ingredientes
    document.getElementById('toppings').appendChild(topping);
}

function startGame() {
    const ingredients = ["Queso", "Pepperoni", "Champiñones", "Pimientos", "Cebolla", "Olivas"];
    const randomIngredients = [];
    const numberOfIngredients = Math.floor(Math.random() * 3) + 2; // Entre 2 y 4 ingredientes

    for (let i = 0; i < numberOfIngredients; i++) {
        const randomIndex = Math.floor(Math.random() * ingredients.length);
        randomIngredients.push(ingredients[randomIndex]);
    }

    currentOrder = {
        ingredients: randomIngredients,
        id: Math.random().toString(36).substr(2, 9) // Generar un ID único
    };

    document.getElementById('currentOrder').textContent = `Pedido: ${currentOrder.ingredients.join(', ')}`;
}

function submitPizza() {
    const toppings = Array.from(document.getElementsByClassName('topping')).map(t => t.textContent.trim());
    
    if (toppings.length === currentOrder.ingredients.length && toppings.every(item => currentOrder.ingredients.includes(item))) {
        score++;
        alert('¡Pizza entregada correctamente! +1 punto');
    } else {
        score--;
        alert('Pizza incorrecta. -1 punto');
    }

    document.getElementById('score').textContent = `Puntos: ${score}`;
    resetPizza();
}

function resetPizza() {
    const toppings = document.getElementById('toppings');
    toppings.innerHTML = ''; // Limpiar los ingredientes
    document.getElementById('currentOrder').textContent = ''; // Limpiar el pedido
}

