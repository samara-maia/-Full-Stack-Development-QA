function rodar() {
  setTimeout(function () {
    document.querySelector('.demo').innerHTML = 'Rdou!'
  }, 2000)
}

function para() {
  clearTimeout(timer)
}
