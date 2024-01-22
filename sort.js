function sortAll(){
  
  let cardsContainers = document.querySelectorAll(".row.g-3")
  
  cardsContainers.forEach(cardsContainer => {

    //Expand the chapter list
    cardsContainer.lastChild.firstChild.click()
  
    let data = Array.from(cardsContainer.children).sort((a, b) => {
      // Calculate sum of unattempted and mistakes
      let valueb = Array.from(b.querySelectorAll(".sc-gKXOVf.leoCAQ")).reduce((sum, elem) => sum + Number(elem.innerText.match(/\d/g).join("")), 0)
      let valuea = Array.from(a.querySelectorAll(".sc-gKXOVf.leoCAQ")).reduce((sum, elem) => sum + Number(elem.innerText.match(/\d/g).join("")), 0)
  
      return valuea < valueb
    })
    

    cardsContainer.innerHTML = ''
    
    data.forEach(elem => {
      cardsContainer.appendChild(elem)
    })
  
  })

  console.log("Executed!")
}

browser.runtime.onMessage.addListener((message) => {
  console.log("Starting...")
  sortAll()
})