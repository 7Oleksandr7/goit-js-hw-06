//Напиши скрипт, який:
//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categories = document.querySelectorAll(".item");
console.log(`Number of categories:`, categories.length);

categories.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const elementsNumber = item.lastElementChild.children.length;
  console.log(`Category:`, title);
  console.log(`Elements:`, elementsNumber);
});
