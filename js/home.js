function GenerarLista(pokemonoes){

    var listapokes;
    for(var i=0; i < 9;i++){
        id = i + 1;
        nombre = pokemones [i].name 
        listapokes.innerHTML +=
        document.getElementById ("root").innerHTML +=

        `<div class="un-pokemon" onclick="Detalle(${id})">
                <p>${id} ${nombre}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${nombre}">
            </div>
            `
    }

    return listapokes
}
function buscadorfuncion(asa){
    if(asa.length >= 3){
        alert (asa)
                
}
}
function FiltroConexion(filtroelegido){
        if(asa.length >= 3){

       const filtrados = [];
        for (let i = 0; i < pokemones.length; i++) {
            const nombre = pokemones[i].name.toLowerCase();
            if (nombre.includes(sza.toLowerCase())) {
                filtrados.push(pokemones[i]);
            }
        }
        let listaHTML = generarLista(filtrados)
        document.getElementById("la-lista").innerHTML = listaHTML;
}
}

function Home () {
 const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });
    //filtro
     const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy", "stellar", "unknown"
    ];

    const filtro = document.createElement("div");

    
    for (let i = 0; i < tipos.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = tipos[i];
        
        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(tipos[i]); 
        });

        // Agregar el botón al contenedor
        filtro.appendChild(btn);
    }


    //Listas

     var contenedorLista = document.createElement("div");
     contenedorLista.classList.add("c-lista");
     contenedorLista.innerHTML(GenerarLista(pokemones))
     contenedorLista.innerHTML(GenerarLista(pokemones))


    //Agregar

    document.getElementById("root").appendChild(buscador)
        document.getElementById("root").appendChild(filtro)
                document.getElementById("root").appendChild(contenedorLista)
console.log(GenerarLista(pokemones))

document.getElementById("root").HTML=" "


}