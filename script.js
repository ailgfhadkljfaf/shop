let advert = document.createElement('img');
 

// Gets a random number between 1 and 3 
// Change 3 to however many images in assets folder that
// you want to randomly pick between

// Need to add this into interval function

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

advert.src='./assets/image_' + getRandomNumber() + '.jpg';
document.getElementById('advert').innerHTML = ''
document.getElementById('advert').appendChild(advert)



// Need to add products to all image areas. 
// Can also swithc products at intervals. 

let product_1 = document.createElement('img');
product_1.src='./assets/product_1.jpg'
document.getElementById('container_1').appendChild(product_1);