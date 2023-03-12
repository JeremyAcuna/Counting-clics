import { useState } from 'react';
import './App.css';
import Button from './Components/button.jsx';
import Counter from './Components/Counter.jsx';
import countingLogo from './Images/counting-logo.png';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manageClic = () => {
    setNumClics(numClics + 1);
  }

  const RestartCount = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='counting-logo-box'>
        <img className='counting-logo'
        src={countingLogo}
        alt='counting logo' />
      </div>
      <div className='principal-box'>
        <Counter
        numClics={numClics} />
        <Button 
        text='Clic'
        verify={true}
        manageClic={manageClic} />
        <Button 
        text='Restart'
        verify={false}
        manageClic={RestartCount} />
      </div>
    </div>
  );
}

export default App;
