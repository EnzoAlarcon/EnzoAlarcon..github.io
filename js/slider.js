
document.addEventListener("DOMContentLoaded", () => {

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