// carousel image
const carouselImg = document.querySelector(".items-wrapper");
const btnUp = document.querySelector(".bt-top") 
const btnDown = document.querySelector(".bt-bottom")

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


 // la lunghezza dell'elemento html nel nostro caso sono 5
images.forEach((element) => {
  carouselImg.innerHTML += `<img src="${element.image}" class="img-car hiden" />
                            <div class="text hiden">
                              <h2>${element.title}</h2>
                              <p>${element.text}</p>
                            </div>
                            
  
  `;
});

// Non puoi inserire 1 come posizione iniziale altrimenti andresti a prendere la seconda immagine dell'array
let carouselIndex = 0;

let carouselImages = document.getElementsByClassName('img-car');

let carouselText = document.getElementsByClassName('text');

carouselText[carouselIndex].classList.remove('hiden');
carouselImages[carouselIndex].classList.remove('hiden');

console.log("Indice carosello: " + carouselIndex);
console.log("Lunghezza array: " + carouselImages.length)

btnUp.addEventListener('click', function() {
  // Rimuovo l'immagine attuale prima di cambiare il valore del contatore
  carouselImages[carouselIndex].classList.add('hiden')
  carouselText[carouselIndex].classList.add('hiden')

  carouselIndex--;

  if (carouselIndex < 0)  {
    carouselIndex = carouselImages.length -1;
  }

  // Dopo aver cambiato il valore del contatore, mostro la nuova immagine
  carouselImages[carouselIndex].classList.remove('hiden')
  carouselText[carouselIndex].classList.remove('hiden');

  console.log("Indice carosello: " + carouselIndex);
  console.log("Lunghezza array: " + carouselImages.length)
});

// Tasto per andare avanti
btnDown.addEventListener('click', function() {
  carouselImages[carouselIndex].classList.add('hiden')
  carouselText[carouselIndex].classList.add('hiden')

  carouselIndex++;

  if (carouselIndex >= images.length) {
    carouselIndex = 0;
  }

  carouselImages[carouselIndex].classList.remove('hiden');
  carouselText[carouselIndex].classList.remove('hiden');

  console.log("Indice carosello: " + carouselIndex);
  console.log("Lunghezza array: " + carouselImages.length)
});