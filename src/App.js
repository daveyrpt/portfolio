import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import ScrollUp from './components/scrollup/ScrollUp'
import Work from './components/work/Work'

function App() {
	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
				<Work />
				<Skills />
				<Qualification />
				<Contact />
			</main>

			<ScrollUp />
		</>
		/*     <div className="App">
			  <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				  Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				  className="App-link"
				  href="https://reactjs.org"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  Learn React
				</a>
			  </header>
			</div> */
	);
}

export default App;
