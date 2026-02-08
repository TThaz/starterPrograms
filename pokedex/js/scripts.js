const pokemonName = document.querySelector('.pokemonName')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonImage = document.querySelector('.pokemonImage')
// Arrow Function o nome disso, animal

const fetchPokemon = async (pokemon) => {
//     Template strings: Colocar entre crases, e pode variar o texto inserido entre `${}`. No caso, a variável pokemon, que é o nome do Pokémon que queremos buscar na API.

// Fetch é uma função nativa do JavaScript para fazer requisições HTTP. Ela retorna uma Promise, que é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. A função fetch é usada para buscar recursos, como dados de uma API, arquivos, etc. Ela aceita um argumento obrigatório, que é a URL do recurso que você deseja buscar, e pode aceitar um segundo argumento opcional, que é um objeto de configuração para personalizar a requisição (como método HTTP, cabeçalhos, corpo da requisição, etc.).

    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

// Tem de pegar o resultado da requisição, e transformar em um formato que o JavaScript consiga ler, que é o JSON. O método .json() é usado para isso, e ele também retorna uma Promise, porque a conversão pode levar algum tempo. Por isso, usamos await para esperar a conclusão dessa operação antes de continuar com o código. 
    const pokemonData = await apiResponse.json()

    return pokemonData
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

}
renderPokemon('7')