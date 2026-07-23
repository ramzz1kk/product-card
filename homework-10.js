import {productCards} from "./product-cards.js";

const productCardTemplate = document.getElementById("product-card-template");
const productsList = document.querySelector(".products");

function getCardCount() {
  const count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));
  if (count >= 1 && count <= 5) {
    return count
  }
  alert("Введите число от 1 до 5");
  return 0;
}

function renderCards(cards) {
  cards.forEach((card) => {
    const cardClone = productCardTemplate.content.cloneNode(true);

    cardClone.querySelector(".card__image").src =`img/${card.cardImage}`;
    cardClone.querySelector(".card__image").alt = card.imageAlt;
    cardClone.querySelector(".card__category").textContent = card.cardCategory;
    cardClone.querySelector(".card__name").textContent = card.cardName;
    cardClone.querySelector(".card__description p").textContent = card.cardDescription;
    const compoundItems = cardClone.querySelectorAll(".compound__list li");

    compoundItems.forEach((item, index) => {
      item.textContent = card.compoundList[index];
    });
    
    cardClone.querySelector(".card__price span").textContent = `${card.price} ₽`;
    productsList.append(cardClone);
  });
}
const count = getCardCount();

const cards = productCards.slice(0, count);

const productsDescription = productCards.reduce((acc, product) => [
  ...acc,
  {
    [product.cardName]: product.cardDescription
  }
], []);

renderCards(cards);