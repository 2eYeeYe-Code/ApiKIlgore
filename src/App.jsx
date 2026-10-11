import { useEffect, useState } from 'react';

const pokemonNames = [
  'ditto',
  'pikachu',
  'bulbasaur',
  'charizard',
  'mew',
  'squirtle',
  'charmander',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'pidgey',
  'rattata',
  'spearow',
  'ekans',
  'arbok',
  'raichu',
  'sandshrew',
  'nidoran-f',
  'nidoran-m',
  'clefairy',
  'vulpix',
  'jigglypuff',
  'zubat',
  'oddish',
  'paras',
  'venonat',
  'diglett',
  'meowth',
  'psyduck',
  'mankey',
  'growlithe',
  'poliwag',
  'abra',
  'machop',
  'bellsprout',
  'tentacool',
  'geodude',
  'ponyta',
  'slowpoke',
  'magnemite',
  'farfetchd',
  'doduo',
  'seel',
  'grimer',
  'shellder',
   'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'krabby',
  'voltorb',
  'exeggcute',
  'cubone',
  'hitmonlee',
  'hitmonchan',
  'lickitung',
  'koffing',
  'rhyhorn',
  'chansey',
  'tangela',
  'kangaskhan',
  'horsea',
  'goldeen',
  'staryu',
  'mr-mime',
  'scyther',
  'jynx',
  'electabuzz',
  'magmar',
  'pinsir',
  'tauros',
  'magikarp',
  'gyarados',
  'lapras',
  'ditto',
  'eevee',
  'vaporeon',
  'jolteon',
  'flareon',
  'porygon',
  'omanyte',
  'kabuto',
  'aerodactyl',
  'snorlax',
  'articuno',
  'zapdos',
  'moltres',
  'dratini',
  'dragonair',
  'dragonite',
  'mewtwo'
];

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    Promise.all(
      pokemonNames.map((name) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json())
      )
    )
      .then((data) => setPokemonData(data))
      .catch((error) => console.error('Failed to fetch Pokemon:', error));
  }, []);

  if (pokemonData.length === 0) {
    return <p aria-live="polite">Loading Pokemon...</p>;
  }

  return (
    <div className="pokemon-page">
      <h1>Pokemon Collection</h1>
      <h2> Orginal Game:Red and Blue</h6>
      <div className="pokemon-grid">
        {pokemonData.map((pokemon) => (
          <div className="pokemon-card" key={pokemon.name}>
            <img
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} sprite`}
            />
            <h2>{pokemon.name}</h2>
            <p>Id: {pokemon.id}</p>
            <p>Base XP: {pokemon.base_experience}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Order: {pokemon.order}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;