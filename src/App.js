

import Menu from './blocks/menu'
import Yellow from './blocks/yellow'
import Black from './blocks/black'
import Map from './blocks/map'
import Contacts from './blocks/contacts'
import Footer from './blocks/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <main>
        <Yellow />
        <Black />
        <Map />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
