

const bars = document.querySelector('.right-section i');

document.querySelector('.fa-bars').addEventListener('click', () => {

  document.querySelectorAll('.pop-ul ul li')
    .forEach(elem => {
      elem.classList.toggle('transform')
    })

    if (bars.classList.contains('fa-bars')) {
      bars.classList.replace('fa-bars', 'fa-times')
    } else {
      bars.classList.replace('fa-times', 'fa-bars')
    }

  // document.querySelector('.contact')
  //   .classList.toggle('contact-border')
})

document.querySelector('.body-section')
  .addEventListener('click',() => {
    document.querySelectorAll('.pop-ul ul li')
    .forEach(elem => {
      elem.classList.remove('transform')
    })

    bars.classList.replace('fa-times', 'fa-bars')
  })

window.addEventListener('scroll', () => {
  document.querySelectorAll('.pop-ul ul li')
    .forEach(elem => {
      elem.classList.remove('transform')
    })

  bars.classList.replace('fa-times', 'fa-bars')
})


