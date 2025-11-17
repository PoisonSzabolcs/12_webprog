const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');

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
        console.log(messages)


        messageBox.textContent = messages[Math.floor(Math.random() * messages.length)]
    } catch (error) {


        console.log(error);
        
    }
})

messageButton.addEventListener('click', ()=>{
    messageBox.textContent = messages[Math.floor(Math.random() * messages.length)]
} )