
const characters = document.querySelector('#characters')


const HP = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json'

window.addEventListener('DOMContentLoaded', fecthCharacters)

async function fecthCharacters() {
    try {
        const res = await fetch(HP);
        if(res === null) {
            return "Loading...."
        }
        const chars = await res.json()
        console.log(chars)
        displayCharacters(chars);


    } catch (error) {
        alert(error)
    }
}

function displayCharacters(chars){
    if(!chars) return null
    chars.forEach(char => {
        const card = document.createElement('div')
        card.className = 'card'
        const img = document.createElement('img')
        img.src = fixImageUrl(char.image)
        img.alt = char.name
        const name = document.createElement('div')
        name.textContent = char.name || 'Ismeretlen'
        name.className = 'Name'

        const house = document.createElement('div')
        house.textContent = `Haz; ${char.house || 'Ismeretlen'}`

        const year = document.createElement('div')
        year.textContent = `Szuletesi ev: ${char.yearOfBirth || 'Ismeretlen'}`

        const actor = document.createElement('div')
        actor.textContent = `Szinesz: ${char.actor || 'Ismeretlen'}`
        

        


        card.append(img, name, house, year, actor)        
        characters.append(card)

        
    });
}

function fixImageUrl(url){
    if(!url) return null

    return url
        .replace('http://hp-api.herokuapp.com', 'http://hp-api.onrender.com')
        .replace('http://', 'https://')

}