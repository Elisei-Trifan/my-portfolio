const slides = document.querySelectorAll('.slide')

slides.forEach((item) =>
  item.addEventListener('click', () => {
    clearClasses()

    item.classList.add('active')
  })
)

function clearClasses() {
  slides.forEach((item) => item.classList.remove('active'))
}
