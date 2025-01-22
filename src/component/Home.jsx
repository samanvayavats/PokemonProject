import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import Cards from './cards';
import './Home.css';

const Home = () => {
     const [pokemonData, setPokemonData] = useState([]);
      const [search, setSearch] = useState('');
    
      useEffect(() => {
        async function fetchData() {
          const pokemonApi = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=124`);
          const data = await pokemonApi.json();
    
          const detailedData = await Promise.all(
            data.results.map(async (pokemon) => {
              const res = await fetch(pokemon.url);
              const details = await res.json();
              return {
                name: pokemon.name,
                abilities: details.abilities,
                base_experience: details.base_experience,
                height: details.height,
                weight: details.weight,
                image: details.sprites.front_default,
                speed: details.stats[5].base_stat, 
                attack: details.stats[1].base_stat, 
              };
            })
          );
    
          setPokemonData(detailedData);
        }
    
        fetchData();
      }, []);
    
      const filteredPokemon = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div>
       
        {/* <Header /> */}
        {/* Pass search and setSearch as props */}
        <SearchBox search={search} setSearch={setSearch} />
        <div className='cards-div'>
          {filteredPokemon.map((element, index) => (
            <Cards
              key={index}
              name={element.name.toUpperCase()}
              ability={element.abilities[0]?.ability.name || 'N/A'}
              base_experience={element.base_experience}
              height={element.height}
              weight={element.weight}
              image={element.image}
              speed={element.speed}
              attack={element.attack}
            />
          ))}
        </div>
      </div>
    
  )
}

export default Home
