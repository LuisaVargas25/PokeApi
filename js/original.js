function Original(){


 <button onClick="toggleFavorito(${data.id}, '${data.name}')">
        <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
      </button>

      
    // Leer favoritos actuales desde localStorage
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let existe = false

    // Verificar si ya está guardado
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].name === paramname) {
            existe = true;
            break;
        }
            
    if (existe == true) {
        favoritos = favoritos.filter(poke => poke.name !== paramname);
        esFavorito = false;
    } else {
        // Si no está, agregarlo
        favoritos.push({
            name: paramname,
            url: `https://pokeapi.co/api/v2/pokemon/${paramid}/`
        });
        esFavorito = true;
    }

        localStorage.setItem("favoritos", JSON.stringify(favoritos));

         const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";


        }

        // Revisar si este Pokémon ya está en favoritos
    favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(poke => poke.name === data.name);

    
}