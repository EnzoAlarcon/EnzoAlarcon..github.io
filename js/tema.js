document.addEventListener("DOMContentLoaded", () => {
    /*tema de color*/

  const modoclaro = document.querySelector('#modoclaro')
  const body = document.querySelector('body');

  modoclaro.addEventListener('click', function() {
    body.classList.toggle('modo-claro')
  });
})