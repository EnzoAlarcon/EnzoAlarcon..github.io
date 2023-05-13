
document.addEventListener("DOMContentLoaded", () => {
  /*tema de color*/

  const modoclaro = document.querySelector('#modoclaro')
  const body = document.querySelector('body');

  modoclaro.addEventListener('click', function() {
    body.classList.toggle('modo-claro')
  })

  /*Slider*/

  const ant = document.querySelector('.ant')
  const post = document.querySelector('.post')
  const slider = document.querySelector('.slider')

  ant.addEventListener('click', function () {
    slider.scrollLeft -= 500
  })

  post.addEventListener('click', function () {
    slider.scrollLeft += 500
  })

  
});