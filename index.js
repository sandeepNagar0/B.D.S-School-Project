let scrollbtn=document.querySelector('#scrollbtn')

scrollbtn.addEventListener('click', ()=>{
   window.scrollTo({
      top:document.body.scrollHeight,
      behavior:"smooth"
   })
})