import React from 'react';

// Wrap Fetch Requests to Communicate Pending, Error and Success Status to React Suspense

function suspensify(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (response) => {
      status = 'success';
      result = response;
    },
    (error) => {
      status = 'error';
      result = error;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      }
      if (status === 'error') {
        throw result;
      }
      if (status === 'success') {
        return result;
      }
    },
  };
}

const fetchPokemon = (id) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());

let pokemon = suspensify(fetchPokemon(50));

export default function PokemonDetail() {
  return <div>{pokemon.read().name}</div>;
}
