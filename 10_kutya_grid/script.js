    //   <!-- #1 kártya -->
    //         <div class="card">
    //             <img src="./img/dog-1.jpg" alt="dog1">
    //             <div class="content">
    //                 <h3>Kártya #1</h3>
    //                 <p>dog-1.jpg</p>
    //             </div>
    //         </div>

    const section = document.querySelector('#cards');
    console.log(section)

    const LISTA_URL = 'src/kepek.txt'
    const IMG_MAPPA = 'img/'
    window.addEventListener('DOMContentLoaded', loadCards)

    async function loadCards(){
        try {
            const res = await fetch(LISTA_URL)
             
            if(!res.ok){
                return alert('Nem sikerult betolteni a fajlt')
            }

            const text = await res.text();

            const files = text.split('\n').map(sor => sor.trim()).filter(sor => sor.length !== 0)

            if(files.length === 0){
                return alert('A lista')
            }

            section.innerHTML = ''

            files.forEach( (fileName, index) => {
                   section.appendChild(createCard(fileName, index)) 
            })



        } catch (error) {
            alert(`Hiba: ${error}`);
        }

    }

    function createCard(fileName, index){

        const card = document.createElement('div');
        card.className = "card"

        const img = document.createElement('img')
            img.src = `${IMG_MAPPA}${fileName}`
            img.alt= `dog${index+1}`

        const content = document.createElement('div')
        content.className = 'content'

        const h3 = document.createElement('h3')
        h3.textContent = `Kartya #${index+1}`

        const p = document.createElement('p')
        p.textContent = `${fileName}`

        content.append(h3, p);
        card.append(img, content)
        return card

    }

