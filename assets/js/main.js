/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('nav-toggle')
const nav = document.getElementById('nav-menu')
const burger = document.getElementById('nav-burger')
const navClose = document.getElementById('nav-close')

/*=============== MENU SHOW CLICK ===============*/
if (navToggle) {
    navToggle.addEventListener('click',() => {
        nav.classList.toggle('show-menu')      
        burger.classList.toggle('rotate-unclockwise')
    })
}

/*=============== MENU HIDE ===============*/
if (navClose) {
    navClose.addEventListener('click',() => {
        nav.classList.remove('show-menu')
        burger.classList.remove('rotate-unclockwise')
    })
}

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true //Animations repeat
})
 
sr.reveal('.home__content,.footer')
sr.reveal('.home__img',{origin:'bottom'})// đổi hướng di chuyển từ dưới lên, mặc định là top
sr.reveal('.features__container',{origin:'bottom'})
sr.reveal('.recipes__container',{origin:'bottom'},{interval:100})
sr.reveal('.about__data,.app__data,.testimonial__img',{origin:'right'})
sr.reveal('.aboutus__img,.app__img,.testimonial__data',{origin:'left'})