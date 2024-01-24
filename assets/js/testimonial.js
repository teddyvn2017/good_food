console.clear();
const slider = document.querySelectorAll('.testimonial__slide');
const container = document.querySelectorAll('testimonial__client');
const btn_next = document.getElementById('btn_next');
const btn_prev = document.getElementById('btn_prev');


// Slider: hiển thị theo Slide
// let index = 0;

// gsap.set(slider,{xPercent:100});
// gsap.set(slider[0],{xPercent:0});

// function next() {
//     // console.log('index',index);
//     gsap.fromTo(slider[index],{xPercent:0,zIndex:0},{delay:0.2, duration:1.2, xPercent:0,zIndex:-10});
//     index = index <slider.length -1 ? ++index : 0;
//     gsap.fromTo(slider[index],{xPercent:100, zIndex:10},{duration:1.2, xPercent:0, zIndex:0});
// }

// btn_next.addEventListener('click',function() { 
//     next();
// });

// function prev() {
//     if (index == 0)
//         return;
//     gsap.fromTo(slider[index],{xPercent:0, zIndex:10},{xPercent:0,zIndex:0});
//     gsap.fromTo(slider[index],{xPercent:0, zIndex:0},{delay:0,duration:1.2,xPercent:100,zIndex:-10});
//     index = index < slider.length ? --index : 0;    
// }

// btn_prev.addEventListener('click',function() { 
//     prev();
// });


// Opacity: hiển thị theo Opacity

let index = 0;

gsap.set(slider[index],{opacity:1});
for (let i= 1; i < slider.length; i++) {
    gsap.set(slider[i],{opacity:0});
}

function opacity_next() {
     
    gsap.fromTo(slider[index], { opacity: 1 }, { opacity: 0, duration: 2 }); //slide hiện tại phải mờ đi
    if (index ==  slider.length - 1)
        index = 0;
    else index++; 
    gsap.fromTo(slider[index], { opacity: 0 }, { opacity: 1, duration: 3 });    //slide kế tiếp được hiển thị
}

btn_next.addEventListener('click',function() { 
    opacity_next();
});

function opacity_prev() {
    
    gsap.fromTo(slider[index], { opacity: 1 }, { opacity: 0, duration: 2 }); //slide hiện tại phải mờ đi
    if (index == 0)
        index = slider.length-1;
    else index--;

    gsap.fromTo(slider[index], { opacity: 0 }, { opacity: 1, duration: 3 });//slide trước đó được hiển thị
}

btn_prev.addEventListener('click',function() { 
    opacity_prev();
});