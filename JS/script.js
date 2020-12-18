alert('The mobile version for the site is currently not available. Please open it in desktop or pc.')

const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const pyBar = document.querySelector('.bar-python')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, 1, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
    .fromTo(cssBar, 1, {width: `calc(0% - 6px)`}, {width: `calc(65% - 6px)`, ease: Power4.easeOut})
    .fromTo(jsBar, 1, {width: `calc(0% - 6px)`}, {width: `calc(45% - 6px)`, ease: Power4.easeOut})
    .fromTo(pyBar, 1, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0    
})
.setTween(t1)
.addTo(controller)

const showRequiredCategory = event =>{
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for(i=0; i<categories.length; i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }
    
    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}