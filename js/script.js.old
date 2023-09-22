

// carousel image
const carouselImg = document.querySelector(".items-wrapper");

// button
const btnUp = document.querySelector(".bt-top") 
const btnDown = document.querySelector(".bt-bottom")

// Array di img
const imgArray = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

// -----------------------------------------------
//  CARICO il div "carousel-img"
// -----------------------------------------------
for(let i=0; i<imgArray.length; i++){
  carouselImg.innerHTML += `<img src="${imgArray[i]}" class="hiden img-car">`
}

const carouselArray = document.getElementsByClassName("img-car");
console.log(carouselArray); 

let contatore = 0;

carouselArray[contatore].classList.remove('hiden');

btnDown.addEventListener('click' , function(){

  carouselArray[contatore].classList.add('hiden');
  if(contatore < carouselArray.length -1){
    
    contatore++

  }else{

    contatore = 0;
  }

  carouselArray[contatore].classList.remove('hiden');
})



btnUp.addEventListener('click', function(){

    carouselArray[contatore].classList.add('hiden');
  if(contatore === 0 ){

    contatore = carouselArray.length -1;
    
  }else{

    contatore--
  }
   console.log(contatore);
  carouselArray[contatore].classList.remove('hiden');

})


