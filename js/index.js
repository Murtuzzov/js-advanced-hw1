//ЗАДАЧА №1
// Генерация карточки товара:
// Напишите функцию createProductCard, которая принимает следующие параметры:
// ● productName: строка, название товара.
// ● price: строка, цена товара.
// ● imageUrl: строка, URL изображения товара.
// Функция должна создать карточку товара, содержащую изображение товара, название
// и цену, и возвратить эту карточку в виде DOM-элемента

// function createProductCard(productName, price, imageUrl) {
//   const myContainer = document.querySelector(".container");

//   const myHeading = document.createElement("h1");
//   myHeading.textContent = productName;

//   const mySpan = document.createElement("span");
//   mySpan.textContent = price;

//   const myImage = document.createElement("img");
//   myImage.src = imageUrl;
//   myImage.width = "200";
//   myImage.height = "200";

//   myContainer.prepend(myHeading, mySpan, myImage);
//   return myContainer;
// }
// const myCard = createProductCard("Book", "12$", "./images/book.jpg");

//____________________________________________________________________________________________________

//ЗАДАЧА №2
// Создание сообщения комментария:
// Напишите функцию createCommentMessage, которая принимает следующие
// параметры:
// ● author: строка, имя автора комментария.
// ● message: строка, текст комментария.
// ● timestamp: строка, временная метка комментария.
// Функция должна создать сообщение комментария, содержащее имя автора, текст
// комментария и временную метку, и возвратить это сообщение в виде DOM-элемента.

// function createCommentMessage(author, message, timestamp) {
//   const myContainer = document.querySelector(".container");

//   const newAuthor = document.createElement("h4");
//   newAuthor.textContent = author;

//   const newMessage = document.createElement("p");
//   newMessage.textContent = message;

//   const newTimestamp = document.createElement("p");
//   newTimestamp.textContent = timestamp;

//   myContainer.prepend(newAuthor, newMessage, newTimestamp);
//   return myContainer;
// }
// const comment = createCommentMessage(
//   "Иван Иванов",
//   "Спасибо за урок!",
//   "19:36"
// );

//____________________________________________________________________________________________________

//ЗАДАЧА №3
// Генерация элемента меню:
// Напишите функцию createMenuItem, которая принимает следующие параметры:
// ● name: строка, название блюда в меню.
// ● price: строка, цена блюда.
// ● description: строка, описание блюда.
// Функция должна создать элемент меню, содержащий название блюда, цену и
// описание, и возвратить этот элемент в виде DOM-элемента.

// function createMenuItem(name, price, description) {
//   const myContainer = document.querySelector(".container");

//   const newName = document.createElement("h4");
//   newName.textContent = name;

//   const newPrice = document.createElement("span");
//   newPrice.textContent = price;

//   const newDescription = document.createElement("p");
//   newDescription.textContent = description;

//   myContainer.prepend(newName, newPrice, newDescription);

//   return myContainer;
// }

// const dish = createMenuItem(
//   "Рататуй",
//   "18$",
//   "Изысканное французское блюдо, состоящее из тонко нарезанных овощей, таких как баклажаны, кабачки, помидоры, лук и перец, обжаренных в оливковом масле и запеченных в духовке. Подается с ароматным базиликовым соусом. Порция для истинных гурманов!"
// );
