const container = document.querySelector('#container')

let isImageDisplayed = false;

container.addEventListener('mouseover', (e)=>{
    console.log(e)
    if(!isImageDisplayed && e.target ===container){
        const img = document.createElement('img')
        img.src = './img/kep.jpg'
        img.alt = 'kep'
        container.replaceChildren(img)
        isImageDisplayed = true;
    }
})

container.addEventListener('mouseout', (e)=>{
    if(isImageDisplayed && e.target === container){
        const p = document.createElement('p');
        p.textContent = "Hanyasra ertekellek?"
        container.replaceChildren(p)
        isImageDisplayed = false;
    }
})