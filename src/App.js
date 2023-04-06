import { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Countdowns from './components/Countdowns/Countdowns';
import "./App.css"

function App() {
  const [background, setBackground] = useState("rgb(186, 73, 73)")
  const handlerBackground = (color) => {
    setBackground(color)
  }

  return (
    <div>
      <div className='container' style={{ background }}>
        <Header />
        <main>
          <Countdowns setBackgroundColor={handlerBackground} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
