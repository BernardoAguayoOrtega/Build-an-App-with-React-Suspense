import React from 'react';

import { suspensify, fetchPokemon } from '../../utils/api';

let initialPokemon = suspensify(fetchPokemon(1));

export default function PokemonDetail() {
  const [pokemonResource, setPokemonResource] = React.useState(initialPokemon);

  const pokemon = pokemonResource.read();

  return (
    <>
      <p>{pokemon.name}</p>
      <button
        onClick={() =>
          setPokemonResource(suspensify(fetchPokemon(pokemon?.id + 1)))
        }
      >
        Next xd
      </button>
    </>
  );
}
