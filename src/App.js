

import Menu from './blocks/menu'
import Yellow from './blocks/yellow'
import Black from './blocks/black'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <main>
        <Yellow />
        <Black />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
