// import react
import React from 'react';
// import error boundary
import ErrorBoundary from '../ ErrorBoundary/index.jsx';

// import dynamic of pokemon detail
const PokemonDetail = React.lazy(() => import('../PokemonDetail/index.jsx'));

export default function App() {
	return (
		<>
			<h1>Pokedex</h1>
			<ErrorBoundary>
				<React.Suspense fallback='Loading pokemon'>
					<PokemonDetail />
				</React.Suspense>
			</ErrorBoundary>
		</>
	);
}
