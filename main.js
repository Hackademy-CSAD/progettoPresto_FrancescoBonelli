let navbar = document.querySelector('#navbar')
document.addEventListener('scroll',()=>{
    let scrolled = window.scrollY
    if(scrolled > 500){
    navbar.classList.add('navbarScroll')
    }else{
    navbar.classList.remove('navbarScroll')
    }
})



let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

function createInterval(n,element,time){
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < n){
            counter ++
            element.innerHTML = counter
        }else{
            clearInterval(interval)
        }
    }, time)
}


let osservatore = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            createInterval(100, firstNumber, 20)
            createInterval(150, secondNumber, 10)
            createInterval(180, thirdNumber, 5)
            check = false
        }
    })
})
osservatore.observe(thirdNumber)


let check = true
function createInterval(n,element, time){
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < n){
            counter ++
            element.innerHTML = counter
        }else{
            clearInterval(interval)
            
        }
    }, time)
    
    setTimeout(() => {
       check = true
      }, "5000");
    
    
}

