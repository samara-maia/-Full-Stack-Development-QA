function comecar() {
  timer = setInterval(showTime, 1000)
}
function parar() {
  clearInterval(timer)
}

const { setInterval } = require('timers/promises')

function showTime() {
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  let txt = h + ':' + m + ':' + s

  document.querySelector('.demo').innerHTML = txt
}
