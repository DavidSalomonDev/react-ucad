import './App.css'
import getHeroesByIdAsync from './sessions/4. Promesas';

function App() {
  return (
    <div className="App">
		{getHeroesByIdAsync(5)
	.then(heroe => console.log('Heroe', heroe))
	.catch(err => console.warn(err))}
    </div>
  );
}

export default App;
