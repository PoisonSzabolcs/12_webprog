const slider = document.querySelector('#slader');

window.addEventListener('DOMContentLoaded', ()=>{
    const e = document.querySelector('#moodImg');
   
    e.src = `./img/${parseInt(slider.value)+1}.png`;
})

slider.addEventListener('input', () => {
  
 
    const e = document.querySelector('#moodImg');
   
    e.src = `./img/${parseInt(slider.value)+1}.png`;
})
