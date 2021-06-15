export function output(...args) {
  let el = document.querySelector('#output')
  let current = el.innerHTML
  let argsArray = Array.from(args)
  
  el.innerHTML = `${current}<div>${argsArray.join(' ')}</div>`

  el.scrollTo(0, el.scrollHeight)
}