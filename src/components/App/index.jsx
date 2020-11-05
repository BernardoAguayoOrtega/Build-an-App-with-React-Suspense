// import react
import React from "react";
// import pokemon detail
// import PokemonDetail from "../PokemonDetail/index.jsx";

// import dynamic of pokemon detail
const PokemonDetail = React.lazy(() => import("../PokemonDetail/index.jsx"))

export default function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <React.Suspense fallback='Loading pokemon'>
        <PokemonDetail />
      </React.Suspense>
    </>
  );
}