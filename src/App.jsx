import '../src/scss/styles.scss';
import Cart from './components/cart/Cart';
import ItemDetail from './components/itemDetail/ItemDetail';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route exact path='/itemdetail' element={<ItemDetail />} />
				<Route exact path='/' element={<ItemListContainer />} />
				<Route exact path='/cart' element={<Cart />} />
				<Route exact path='/product/:id' element={<ItemDetailContainer />} />
				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
