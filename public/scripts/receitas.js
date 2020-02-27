const modal = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cards');

for( let card of cards){
    const imageId = card.getAttribute('id');
    card.addEventListener('click', function(){
    modal.classList.add('active');
    document.querySelector('.overlay-image').setAttribute('src', `layouts/assets/${imageId}.png`)
    document.querySelector('.dish').textContent = card.querySelector('.food-name').textContent; 
    document.querySelector('.chef').textContent = card.querySelector('.cook').textContent;  
    });
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modal.classList.remove('active');
    document.querySelector('.overlay-image').setAttribute('src', "")
})

