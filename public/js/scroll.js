const setupScrooling= () =>{
    const container = [ ...document.querySelectorAll(".movie-container")]
  
    const nextbtn = [ ...document.querySelectorAll(".next-btn")]
    const prevbtn = [ ...document.querySelectorAll(".prev-btn")]

container.forEach((iten, i)=>{
    let containerdimensions = item.getboundingclientrect()
    let containerwidth = containerdimensions.containerwidth

    nextbtn[i].addEventListener('click', ()=>{
        iten.scrollLeft += containerwidth
    })
   prevbtn[i].addEventListener('click', ()=>{
        iten.scrollLeft -= containerwidth
    })
})
}