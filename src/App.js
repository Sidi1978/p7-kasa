import './App.scss';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
