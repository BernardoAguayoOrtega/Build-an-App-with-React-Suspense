import React from 'react';

import { suspensify, fetchPokemon} from '../../utils/api'

let pokemon = suspensify(fetchPokemon(50));

export default function PokemonDetail() {
  return <div>{pokemon.read().name}</div>;
}
