//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontEl = document.getElementById("text");
document
  .getElementById("font-size-control")
  .addEventListener(
    "change",
    () => (fontEl.style.fontSize = event.currentTarget.value + "px")
  );
