cards_container = document.querySelector('.cards')
page = 1;
botonSiguiente = document.querySelector('.botonSiguiente')
botonAnterior = document.querySelector('.botonAnterior')
character_container = document.querySelector('.character')
checkbox = document.getElementById('toggleDiv')

botonSiguiente.addEventListener('click', () => {
    page += 1;
    cards_container.innerHTML = ''
    dragonball()    
})

botonAnterior.addEventListener('click', () => {
    if (page > 1) {
        page -= 1;
        cards_container.innerHTML = ''
        dragonball()
    }
})

async function dragonball() {
    const response = await fetch (`https://dragonball-api.com/api/characters/?page=${page}&limit=5`)
    data = await response.json()

    data.items.forEach(result => {
        cards_container.innerHTML += `
        <div class="character">
            <div class="image">
                <div class="status">                
                   <img src="${result.image}" alt="">
                   <h3>${result.affiliation}</h3>
                </div>
                <div class="card">
                    <h1>${result.name}</h1>
                    <h6>Specie</h6><h2>${result.race}</h2>
                    <h6>Gender</h6><h2>${result.gender}</h2>
                </div>
            </div>
            <div class="content">
                <h1>${result.name}</h1>
                <div class="parra">
                    <p>${result.description}</p>
                </div>
            </div>
            <input type="checkbox" id="toggleDiv">
            
        </div>
        `
    });
}

dragonball()