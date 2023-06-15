// Отримуємо елементи з HTML
const number = document.querySelector("h1.number");
const minus = document.querySelector("button.minus");
const plus = document.querySelector("button.plus");
const reset = document.querySelector("button.reset");
const plusTen = document.querySelector(".plus10");
const plusFifty = document.querySelector(".plus50");
const plusHundred = document.querySelector(".plus100");
const minusTen = document.querySelector(".minus10");
const minusFifty = document.querySelector(".minus50");
const minusHundred = document.querySelector(".minus100");
// створюємо поки пусту змінну
let numbValue;
// Створюємо змінну яка повертає значення з localStorage під ключем "numb"
let value = localStorage.getItem("numb");
// If else допомагає нам зберигати значення піся перезавантаження сторінки
if (value == null) {
  //      якщо значення ще не було то буде показувати 0
  numbValue = 0;
} else {
  // якщо ж вже було то буде показувати значення з localStorage
  // під ключем "numb" та конвертувати його у число
  numbValue = Number(value);
}
// Робимо значення видимим у h1
number.textContent = numbValue;
// функція яка допомагає нам кожний раз при зміннюванні numbValue
// зміннювати значення у localStorage
function change() {
  localStorage.setItem("numb", String(numbValue));
}
// функція кнопки плюс яка збільшує numbValue на 1 та записує це значення на єкран
function p() {
  numbValue++;
  number.textContent = numbValue;
  change();
}
// функція кнопки мінус яка зменшує numbValue на 1 та записує це значення на єкран
function m() {
  numbValue--;
  number.textContent = numbValue;
  change();
}
// функція кнопки яка скидає значення numbValue та localStorage
function r() {
  let r = localStorage.clear();
  numbValue = 0;
  number.textContent = numbValue;
}
// події для кнопок
plus.addEventListener("click", p);
minus.addEventListener("click", m);
reset.addEventListener("click", r);
plusTen.addEventListener("click", () => {
  // функція кнопки плюс яка збільшує numbValue на 10 та записує це значення на єкран
  numbValue += 10;
  number.textContent = numbValue;
  change();
});
plusFifty.addEventListener("click", () => {
  // / функція кнопки плюс яка збільшує numbValue на 50 та записує це значення на єкран
  numbValue += 50;
  number.textContent = numbValue;
  change();
});
plusHundred.addEventListener("click", () => {
  /// функція кнопки плюс яка збільшує numbValue на 100 та записує це значення на єкран
  numbValue += 100;
  number.textContent = numbValue;
  change();
});
minusTen.addEventListener("click", () => {
  // функція кнопки мінус яка зменшує numbValue на 10 та записує це значення на єкран
  numbValue -= 10;
  number.textContent = numbValue;
  change();
});
minusFifty.addEventListener("click", () => {
  // функція кнопки мінус яка зменшує numbValue на 50 та записує це значення на єкран
  numbValue -= 50;
  number.textContent = numbValue;
  change();
});
minusHundred.addEventListener("click", () => {
  // функція кнопки мінус яка зменшує numbValue на 100 та записує це значення на єкран
  numbValue -= 100;
  number.textContent = numbValue;
  change();
});
