import '../src/scss/styles.scss';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting={'Bienvenido a mi E-commerce'}/>
		</>
	);
}

export default App;