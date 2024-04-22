import gsap from "gsap"
export default function menuopen(){
    let active  =document.querySelector('#navbar')
    let imgw = document.querySelector('.imagepng')
    imgw.classList.toggle('rotates')
    active.classList.toggle('active')
    active.classList.toggle('nonactivee')
      let hf =gsap.matchMedia()
      hf.add("(max-width:640px)",()=>{
         gsap.to('.active',{
            y:0,
            duration:2,
            ease:"expo.out"
         })
         gsap.to('.nonactivee',{
            y:-750,
            duration:4,
            ease: "expo.out",
         })
      })
     
      hf.add('(min-width:641px)',()=>{
      gsap.to('.active',{

            y:0,
            duration:2,
            ease:"expo.out"
         })
         gsap.to('.nonactivee',{
            y:-650,
            duration:4,
            ease: "expo.out",
         })
      })
         let first = document.querySelector('#fre') 
    let second = document.querySelector('#se')
    let burger = document.querySelector('#hamburger')
    burger.classList.toggle('nonactive')
    
    second.classList.toggle('top-1/2') 
    first.classList.toggle('top-2/4') 
    second.classList.toggle('rotate-45') 
    first.classList.toggle('-rotate-45') 
    let nav =document.querySelector('#navcontent')
    nav.classList.toggle('.Cnav_active')
    nav.classList.toggle('.Cnav_non')
   

    
}