const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');

window.addEventListener('DOMContentLoaded', async ()=>{
    try {
        const uzik = await fetch('./uzik.csv');
        console.log(uzik);   
    } catch (error) {
        console.log(error);
        
    }
})