
import React from 'react';
import { CardComponent } from "../components/CardComponent"

// Componente que obtiene y renderiza la lista de Pokémon
const PokemonList = async () => {
  // Función para obtener los Pokémon desde la PokeAPI
  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await response.json();


    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        const detailData = await detailResponse.json();
        return {
          name: detailData.name,
          image: detailData.sprites.front_default,
          type: detailData.types
        };
      })
    );

    return detailedPokemons;
  };

  const pokemons = await fetchPokemons();

  return (
    <div className="my-4">
      <h1 className="font-extrabold	 text-asafe text-center text-4xl">Lista de Pokémon</h1>
      <ul >
        <div className='flex justify-center items-center flex-wrap w-full'>
          {pokemons.map((pokemon, key) => (
            <CardComponent name={pokemon.name} img={pokemon.image} type={pokemon.type} key={key} />

          ))}
        </div>
      </ul>
    </div>
  );
};



export default PokemonList; 
