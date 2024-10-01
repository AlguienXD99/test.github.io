let score = 0;
let currentOrder = {};

function startGame() {
    // Generar un pedido aleatorio
    const ingredients = ["Queso", "Pepperoni", "Champiñones", "Pimientos", "Cebolla", "Olivas", "Salsa de Tomate"];
    const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];
    const quantity = Math.floor(Math.random() * 3) + 1; // Cantidad entre 1 y 3
    currentOrder = { ingredient: randomIngredient, quantity: quantity };
    document.getElementById("currentOrder").innerText = `Pedido: ${quantity} ${randomIngredient}(s)`;
}

function addIngredient(ingredientElement) {
    const ingredientName = ingredientElement.getAttribute('data-ingredient');
    const topping = document.createElement('div');
    topping.className = 'topping';
    topping.innerText = ingredientName;

    // Calcular una posición aleatoria dentro de la pizza
    const pizzaBase = document.getElementById('pizzaBase');
    const pizzaSize = pizzaBase.offsetWidth; // Tamaño de la pizza
    const radius = pizzaSize / 2 - 15; // Radio de la pizza, restando un margen para los ingredientes

    // Generar un ángulo aleatorio y una distancia aleatoria dentro del radio
    const angle = Math.random() * 2 * Math.PI; // Ángulo aleatorio en radianes
    const distance = Math.random() * radius; // Distancia aleatoria dentro del radio

    // Calcular la posición x e y en base a la distancia y el ángulo
    const randomX = (pizzaSize / 2) + (Math.cos(angle) * distance) - 15; // Centrar la pizza
    const randomY = (pizzaSize / 2) + (Math.sin(angle) * distance) - 15; // Centrar la pizza

    topping.style.left = randomX + 'px';
    topping.style.top = randomY + 'px';

    document.getElementById('toppings').appendChild(topping);
}

function submitPizza() {
    const currentToppings = document.querySelectorAll('.topping');
    const toppingCounts = {};

    currentToppings.forEach(topping => {
        const ingredient = topping.innerText;
        toppingCounts[ingredient] = (toppingCounts[ingredient] || 0) + 1;
    });

    if (toppingCounts[currentOrder.ingredient] === currentOrder.quantity) {
        score += 1;
        alert("¡Pedido correcto!");
    } else {
        score -= 1;
        alert("Pedido incorrecto.");
    }

    document.getElementById("score").innerText = `Puntos: ${score}`;
    document.getElementById("toppings").innerHTML = ''; // Reiniciar la pizza
    document.getElementById("currentOrder").innerText = ''; // Reiniciar pedido
}
