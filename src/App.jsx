import '../src/scss/styles.scss';
import Cart from './components/cart/Cart.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponenteA from './components/CompanenteA';
import CartProvider from './context/CartContext.jsx';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route exact path='/' element={<ItemListContainer />} />
					<Route exact path='/cart' element={<Cart />} />
					<Route exact path='/product/:id' element={<ItemDetailContainer />} />
					<Route exact path='/category/:category' element={<ItemListContainer />} />
				</Routes>
				<ComponenteA />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
