import './App.scss';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<Header />} />
					<Route path="/logement/:id" element={<Header />} />
					<Route path="*" element={<Header />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
