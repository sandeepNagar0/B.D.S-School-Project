let scrollbtn=document.querySelector('#scrollbtn')

scrollbtn.addEventListener('click', () => {
   window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
   })
})


let hemburgerIconBtn=document.querySelector('.humberger-icon')
let closeBtn=document.querySelector('.close-icon')
let moblileNavbar=document.querySelector('.mobile-navbar')

hemburgerIconBtn.addEventListener('click', ()=>{
    moblileNavbar.style.left='0px'
})

closeBtn.addEventListener("click", () => {
   moblileNavbar.style.left='-500px'
})