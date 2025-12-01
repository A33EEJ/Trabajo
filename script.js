// Crear lista de números del 1 al 100
let numbers = [];

// Llenar la lista de números
function fillNumbers(){
  numbers = [];
  for(let i = 1; i <= 100; i++){
    numbers.push(i);
  }
  updateRemaining();
}
fillNumbers();

// Elementos HTML
const numberDiv = document.getElementById("number");
const drawBtn = document.getElementById("drawBtn");
const resetBtn = document.getElementById("resetBtn");
const remainingDiv = document.getElementById("remaining");

// Mostrar cuántos números quedan
function updateRemaining(){
  remainingDiv.textContent = "Numbers remaining: " + numbers.length;
}

// Función para sacar un número
drawBtn.addEventListener("click", () => {
  if(numbers.length === 0){
    alert("All numbers have been drawn. Press RESET to start again.");
    return;
  }

  const index = Math.floor(Math.random() * numbers.length);
  const selected = numbers[index];

  // Quitar número para que no se repita
  numbers.splice(index, 1);

  // Mostrar número con animación
  numberDiv.textContent = selected;
  numberDiv.classList.add("animate");
  setTimeout(() => {
    numberDiv.classList.remove("animate");
  }, 400);

  updateRemaining();
});

// Reiniciar juego
resetBtn.addEventListener("click", () => {
  fillNumbers();
  numberDiv.textContent = "?";
  drawBtn.disabled = false;
});
