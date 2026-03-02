window.addEventListener('DOMContentLoaded', fetchData)



async function fetchData() {
    try {
        let Images = [];
        const URL = 'https://picsum.photos/v2/list'

        const res = await fetch(URL)
        Images = await res.json();
       
        loadAuthors(Images);
        DisplayImages(Images);

    } catch (error) {
        console.log(error);
    }

}


function DisplayImages(Images){
    const tarolo = document.querySelector('#tarolo')
    tarolo.innerHTML = ''

    Images.forEach((image) => {
        console.log(image)
        const card = document.createElement('div')
        card.classList.add('card')
        const cardInner = document.createElement('div')
        cardInner.classList.add('card-inner')
        const img = document.createElement('img')
        img.classList.add('img')
        img.alt = image.author
        img.src= `https://picsum.photos/id/${image.id}/600/400`

        cardInner.append(img)
        card.append(cardInner)
        tarolo.append(card)

    })
}



function loadAuthors(Images){ 
    const szerzok = document.querySelector('#szerzok')
    szerzok.innerHTML = ''
    const firstOption = document.createElement('option')
    firstOption.value= ''
    firstOption.textContent= 'Összes'
    szerzok.append(firstOption)

    const authors = Images.map(x => x.author)

    const unique= new Set(authors)
    unique.forEach((author)=>{
        const option = document.createElement('option')
        option.value = author
        option.text = author

        szerzok.append(option)
    })
    szerzok.addEventListener('change', ()=> {authorFilter(Images, szerzok)})

}

function authorFilter(Images, szerzok){

    const value = szerzok.value
    console.log(value);
    
    if(!value) return DisplayImages(Images)

    const filteredList = Images.filter(x=> x.author === value)
    console.log(filteredList);
    
    DisplayImages(filteredList)
}
    