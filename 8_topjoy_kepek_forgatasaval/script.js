const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo')
const kupak = document.querySelector('#kupak');
const messages = [];

let nyitva = false;

window.addEventListener('DOMContentLoaded', async ()=>{
    

    try {
        const uzik = await fetch('./uzik.csv');
        console.log(uzik);   
        const uziktest= (await uzik.text())        
                        .split('\n')
                        .map(sor => sor.trim());

        uziktest.forEach(uzi => {
            messages.unshift(uzi);
        })
       


       
    } catch (error) {


        console.log(error);
        
    }
})

kupak.addEventListener('click', async () =>{

    let uzi =  messages[Math.floor(Math.random() * messages.length)];

    if(!nyitva){
       
    for (let index = 0; index < 11; ) {
        setTimeout(() => {
            console.log(kupak.src)
            index++
        }, 5000)
        
    }

      
    nyitva = true;

    console.log(nyitva)


    }
})