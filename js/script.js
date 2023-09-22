// carousel image
const carouselImg = document.querySelector(".items-wrapper");
const btnUp = document.querySelector(".bt-top") 
const btnDown = document.querySelector(".bt-bottom")

// Tutti gli array iniziano da 0
const images = [
  "/img/01.webp", // 0
  "/img/02.webp", // 1
  "/img/03.webp", // 2
  "/img/04.webp", // 3
  "/img/05.webp" // 4
];
 // la lunghezza dell'elemento html nel nostro caso sono 5
for (let i = 0; i < images.length; i++) {
  carouselImg.innerHTML += `<img src="${images[i]}" class="img-car hiden" />`;
}

// Non puoi inserire 1 come posizione iniziale altrimenti andresti a prendere la seconda immagine dell'array
let carouselIndex = 0;

let carouselImages = document.getElementsByClassName('img-car');

// Prendo la prima immagine (in posizione 0 nell'array) e la mostro
carouselImages[carouselIndex].classList.remove('hiden')

console.log("Indice carosello: " + carouselIndex);
console.log("Lunghezza array: " + carouselImages.length)

btnUp.addEventListener('click', function() {
  // Rimuovo l'immagine attuale prima di cambiare il valore del contatore
  carouselImages[carouselIndex].classList.add('hiden')

  carouselIndex--;

  if (carouselIndex < 0)  {
    carouselIndex = carouselImages.length -1;
  }

  // Dopo aver cambiato il valore del contatore, mostro la nuova immagine
  carouselImages[carouselIndex].classList.remove('hiden')

  console.log("Indice carosello: " + carouselIndex);
  console.log("Lunghezza array: " + carouselImages.length)
});

// Tasto per andare avanti
btnDown.addEventListener('click', function() {
  carouselImages[carouselIndex].classList.add('hiden')

  carouselIndex++;

  if (carouselIndex >= images.length) {
    carouselIndex = 0;
  }

  carouselImages[carouselIndex].classList.remove('hiden')

  console.log("Indice carosello: " + carouselIndex);
  console.log("Lunghezza array: " + carouselImages.length)
});