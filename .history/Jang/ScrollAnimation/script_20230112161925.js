const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  console.log(window.innerHeight)
  const triggerBottom = window.innerHeight / 5 

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop.top < triggerBottom){
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}