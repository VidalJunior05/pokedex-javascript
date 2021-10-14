var inputQuantidade = document.getElementById('quantidade');
inputQuantidade.addEventListener('keyup', ()=>{
    selectPokemons(inputQuantidade.value);
})

selectPokemons(1);
function selectPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade).then(response => response.json())
        .then(allpokemon => {
            
            var pokemons = [];

            allpokemon.results.map((val)=>{
                

                fetch(val.url).then(response => response.json())
                .then(pokemonSingle => {
                   console.log(pokemonSingle); 
                    
                    pokemons.push({
                        nome: val.name, 
                        imagem: pokemonSingle.sprites.front_default
                    });

                    if(pokemons.length == quantidade){
                        //Finalizamos as requisições

                        var pokemonWrapper = document.querySelector('.pokemon-wrapper');
                        pokemonWrapper.innerHTML = "";

                        pokemons.map((val)=>{
                        /*
                            <div class="pokemom-single">
                                <p>NamePokemon</p>
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="">
                            </div>
                        */  
                        pokemonWrapper.innerHTML += `
                        <div class="pokemom-single">
                             <p>`+val.nome+`</p>
                            <img src="`+val.imagem+`">
                        </div>
                        
                        `;


                        })

                        //console.log(pokemons)
                    }
                })  

            })

            pokemons.map((val)=>{
                console.log(val.nome);
            })
        })
}


