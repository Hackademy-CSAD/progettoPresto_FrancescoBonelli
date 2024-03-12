let navbar = document.querySelector('#navbar')
document.addEventListener('scroll',()=>{
    let scrolled = window.scrollY
    if(scrolled > 500){
    navbar.classList.add('navbarScroll')
    }else{
    navbar.classList.remove('navbarScroll')
    }
})


fetch("./annunci.json").then((response)=> response.json()).then((data)=>{ 
    
    data.sort((a, b)=> a.price - b.price) 
    
    let containerCard = document.querySelector('#containerCard') 
    let containerCategories = document.querySelector('#containerCategories')    
  

    function showCards(array){
    array.forEach(annuncio => { 
        let div = document.createElement('div') 
        div.classList.add('col-6', 'col-md-3', 'mb-3','mt-5')
        div.innerHTML = `<div class="card cardCustom" >
        <img src="${annuncio.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title titleCard playfair-display">${annuncio.name}</h5>
          <p class="card-text roboto-light">${annuncio.category}</p>
          <a href="#" class="btn buttonCustom">${annuncio.price} $</a>
        </div>
      </div>`
      containerCard.appendChild(div) 
    });
}

function radioCreate(array){
let categorie = array.map(annuncio => annuncio.category)                     
let uniquecategories = Array.from(new Set(categorie))                                      
uniquecategories.forEach(categoria=>{
    let div = document.createElement('div')
    div.innerHTML = `<input class="form-check-input" type="radio" name="categoria" id="${categoria}"                 
    <label class="form-check-label" for="${categoria}">                                                                  
    ${categoria}
    </label>`                           
    containerCategories.appendChild(div)
})
}
radioCreate(data) 

let radioBtn = document.querySelectorAll('.form-check-input')

function filterByCategories(array){                      
let btnChecked = Array.from(radioBtn).find(btn => btn.checked) 
console.log(btnChecked);              
if(btnChecked.id != 'All'){
    let filtered = array.filter(annuncio => annuncio.category == btnChecked.id)
    containerCard.innerHTML = ''
return filtered
}else{
    return array
}
}


showCards(data)
radioBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        globalFilter()
        
    })
})

let priceValue = document.querySelector('#priceValue')
let priceInput = document.querySelector('#priceInput')
function setPriceInput(array){
    let prices= array.map(annuncio=>Number(annuncio.price))
    prices.sort((a,b)=>a - b)
    let maxPrice = prices.pop()
    priceInput.Max = maxPrice
    priceInput.value = maxPrice
    priceValue.innerHTML = `${maxPrice}$`
    
}

setPriceInput(data)

function filteredByPrice(array) {
    let filtered = array.filter(annuncio=>annuncio.price<=Number(priceInput.value))
    containerCard.innerHTML = ''
   return filtered
}

priceInput.addEventListener('input', () => {
    priceValue.innerHTML = `${priceInput.value}$`
   globalFilter()
})



let inputWord = document.querySelector('#inputWord')

function filterByWord(array) {
    let filtered = array.filter(annuncio=>annuncio.name.includes(inputWord.value))
    containerCard.innerHTML = ''
    return filtered
}

inputWord.addEventListener('input', ()=>{
   globalFilter()
})

function globalFilter(){
    let filtratiPerCategoria = filterByCategories(data)
    let filtratiperPrezzo = filteredByPrice(filtratiPerCategoria)
    let filtratiperParola = filterByWord(filtratiperPrezzo)
    showCards(filtratiperParola)
}












     });

    


