const tarolo = document.querySelector('.tarolo')
const kupak = document.querySelector('#kupak')
const szoveg = document.querySelector('#szoveg')

const uzik = [];
let zarvaVanE = true

window.addEventListener('DOMContentLoaded', async ()=>{
  try {
    const response = await fetch('./uzik.csv');

    const text = await response.text();

    const sorok = text.split('\n').map(sor => sor.trim()).filter(sor => sor !== '')

    sorok.forEach(sor => uzik.push(sor))

  } catch (error) {
    console.log(error);
    
  }

})

tarolo.addEventListener('click', () => {
  if(zarvaVanE){
    szoveg.textContent = '';
    tarolo.classList.remove('zaras')
    tarolo.classList.add('nyit')
    zarvaVanE = false;
    
    setTimeout(() =>{

      if(!zarvaVanE && uzik.length > 0){
      szoveg.textContent = uzik[Math.floor(Math.random()* uzik.length)]
      }
    },300)


  } else{
    szoveg.textContent = '';
    tarolo.classList.remove('nyit')
    tarolo.classList.add('zaras')
    zarvaVanE = true;
  }
})