import '../src/scss/styles.scss';
import Cart from './components/cart/Cart';
import ItemDetail from './components/itemDetail/ItemDetail';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route exact path='/' element={<ItemListContainer />} />
				<Route exact path='/cart' element={<Cart />} />
				<Route exact path='/product/:id' element={<ItemDetailContainer />} />
				<Route exact path='/category/:category' element={<ItemListContainer />} />

				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
