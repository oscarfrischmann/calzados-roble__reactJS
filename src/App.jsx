import '../src/scss/styles.scss';
import Item from './components/item/item';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemList from './components/itemList/ItemList';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				{/* <Route exact path="/item" element={<Item />} /> */}
				<Route exact path="/itemlist" element={<ItemList/>} />
				<Route exact path='/itemlistcontainer' element={<ItemListContainer/>}/>
			</Routes>
			<ItemListContainer />
		</BrowserRouter>
	);
}

export default App;
