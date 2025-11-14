let advert = document.createElement('img');
 

// Gets a random number between 1 and 3 
// Change 3 to however many images in assets folder that
// you want to randomly pick between

// Need to add this into interval function

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

setInterval(() => {
  advert.src='./assets/image_' + getRandomNumber() + '.jpg';
  document.getElementById('advert').innerHTML = ''
  document.getElementById('advert').appendChild(advert)
},2000)


setTimeout(() => {
  alert('PURCHASE SOMETHING!!!!!!')
},30000)


// Need to add products to all image areas. 
// Can also swithc products at intervals. 

let product_1 = document.createElement('img');
product_1.src='./assets/product_1.jpg'
document.getElementById('container_1').appendChild(product_1);

let product_2 = document.createElement('img');
product_2.src='./assets/product_2.jpg'
document.getElementById('container_2').appendChild(product_2);

let product_3 = document.createElement('img');
product_3.src='./assets/product_3.jpg'
document.getElementById('container_3').appendChild(product_3);

let product_4 = document.createElement('img');
product_4.src='./assets/product_4.jpg'
document.getElementById('container_4').appendChild(product_4);

let product_5 = document.createElement('img');
product_5.src='./assets/product_5.jpg'
document.getElementById('container_5').appendChild(product_5);

let product_6 = document.createElement('img');
product_6.src='./assets/product_6.jpg'
document.getElementById('container_6').appendChild(product_6);



const sound = new Audio('./assets/sound_1.mp3')
const sound_2 = new Audio('./assets/sound_2.mp3')
const sound_3 = new Audio('./assets/sound_3.mp3')
const sound_4 = new Audio('./assets/sound_4.mp3')
const sound_5 = new Audio('./assets/sound_5.mp3')
const sound_6 = new Audio('./assets/sound_6.mp3')

document.addEventListener('keydown', (e) => { 

    if (e.key === 'q')
    sound.play(); 

}) 

document.addEventListener('keydown', (e) => { 

    if (e.key === 'w') 
    sound_2.play(); 

})

document.addEventListener('keydown', (e) => { 

    if (e.key === 'e') 
    sound_3.play(); 

})

document.addEventListener('keydown', (e) => { 

    if (e.key === 'r') 
    sound_4.play(); 

})

document.addEventListener('keydown', (e) => { 

    if (e.key === 't') 
    sound_5.play(); 

})

document.addEventListener('keydown', (e) => { 

    if (e.key === 'y') 
    sound_6.play();
})


// Minimal: attach submit listener to contact form that alerts and clears the form
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us! Your message has been submitted.');
      contactForm.reset();
    });
  }
});

