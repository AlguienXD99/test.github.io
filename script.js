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
    const topping = document.createElement('img');
    topping.className = 'topping';
    topping.setAttribute('data-ingredient', ingredientName); // Mantener el nombre del ingrediente

    // Definir la imagen según el ingrediente
    switch (ingredientName) {
        case "Queso":
            topping.src = "queso.png";
            break;
        case "Pepperoni":
            topping.src = "pepperoni.png";
            break;
        case "Champiñones":
            topping.src = "champiñones.png";
            break;
        case "Pimientos":
            topping.src = "pimientos.png";
            break;
        case "Cebolla":
            topping.src = "cebolla.png";
            break;
        case "Olivas":
            topping.src = "olivas.png";
            break;
        case "Salsa de Tomate":
            topping.src = "salsa_tomate.png";
            break;
    }

    // Calcular una posición aleatoria dentro de la pizza
    const pizzaBase = document.getElementById('pizzaBase');
    const pizzaSize = pizzaBase.offsetWidth; // Tamaño de la pizza
    const maxX = pizzaSize - 30; // 30 es el ancho aproximado de los ingredientes
    const maxY = pizzaSize - 30; // 30 es la altura aproximada de los ingredientes

    // Posiciones aleatorias dentro de la pizza
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    topping.style.left = randomX + 'px';
    topping.style.top = randomY + 'px';

    document.getElementById('toppings').appendChild(topping);
}

function submitPizza() {
    const currentToppings = document.querySelectorAll('.topping');
    const toppingCounts = {};

    currentToppings.forEach(topping => {
        const ingredient = topping.getAttribute('data-ingredient');
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
