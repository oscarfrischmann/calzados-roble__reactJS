import '../src/scss/styles.scss';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
	const greeting = 'E-commerce de Calzados Roble';

	return (
		<>
			<NavBar />
			<ItemListContainer greeting={greeting} />
		</>
	);
}

export default App;
