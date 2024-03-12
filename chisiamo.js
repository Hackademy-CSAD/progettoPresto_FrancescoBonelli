let navbar = document.querySelector('#navbar')
document.addEventListener('scroll',()=>{
    let scrolled = window.scrollY
    if(scrolled > 500){
    navbar.classList.add('navbarScroll')
    }else{
    navbar.classList.remove('navbarScroll')
    }
})

let chiSiamo = [
    {
        name:'Giorgia Rossi',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'CEO',
        img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name:'Luca Bianchi',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'CTO',
        img:'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {   
        name:'Sophia Neri',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'Student',
        img:'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {   
        name:'Francesco Bonelli',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'Intern',
        img: './media/ciao.jpeg'
    },
]










let containerCard = document.querySelector('#containerCard')
chiSiamo.forEach(card=>{
    let div = document.createElement('div')
    div.classList.add('col-8','col-md-3')
    div.innerHTML = `<div class="card cardCustom">
    <img src=${card.img} class="card-img-top imgCustom" alt="...">
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text"">${card.description}</p>
      <a href="#" class="btn buttonCustom">${card.job}</a>
    </div>
  </div>`
  containerCard.appendChild(div)
})

