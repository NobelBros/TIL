const labels = document.querySelectorAll('.form-controllabel');

labels.forEach(label => {
  label.innerHTML = lable.innerText
        .split('')
        .map((letter, index)=> `<span>${letter}</span>`)
        .join('')
})