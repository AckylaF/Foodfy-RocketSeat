const showIngredients = document.querySelector('#show-ingredient')
const showPreparation = document.querySelector('#show-preparation')
const showInfo = document.querySelector('#show-info')
const ingredient = document.querySelector('#ingredient');
const prep = document.querySelector('#preparation');
const info = document.querySelector('#info');


showIngredients.addEventListener('click', ()=> {
    
    ingredient.classList.toggle("hide-show")
    
    if(showIngredients.textContent == "Mostrar"){
        
        showIngredients.textContent = "Esconder"
    }else{
        showIngredients.textContent = "Mostrar"
    }
})

showPreparation.addEventListener('click', ()=> {
    
    prep.classList.toggle("hide-show")
    
    if(showPreparation.textContent == "Mostrar"){
        
        showPreparation.textContent = "Esconder"
    }else{
        showPreparation.textContent = "Mostrar"
    }
})

showInfo.addEventListener('click', ()=> {
    
    info.classList.toggle("hide-show")
    
    if(showInfo.textContent == "Mostrar"){
        
        showInfo.textContent = "Esconder"
    }else{
        showInfo.textContent = "Mostrar"
    }
})
