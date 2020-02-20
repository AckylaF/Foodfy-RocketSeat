var button = document.querySelector('.show-link');
var ingredient = document.querySelector('#ingredient');
var prep = document.querySelector('#preparation');
var info = document.querySelector('#info');



button.addEventListener('click', function(){
    
    ingredient.innerHTML = "{{card.ingredients}}";
    prep.innerHTML = "{{card.preparation}}";
    info.innerHTML = "{{card.information}}";
    button.innerHTML = "esconder"
})
