import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomHeader, { addNumber } from './components/CustomHeader';
import Counter from './components/Counter';




const App = () => {
  const addedNumber = addNumber(1, 2);
  const [changedNumber, setChangedNumber] = React.useState(0)
  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber); 
  }

  const NumberService = (liczba: number) => {

    if(liczba < -10)
    {
      return (<div>Liczba jest mniejsza od -10</div>)
    }

    if(liczba > 15)
    {
      return (<div>Liczba przekroczona</div>)
    }

    if(liczba > 10 && liczba < 16)
    {
      return (<div>Liczba jest wieksza od 10</div>)
    }
  }

  return (
    <div className="App">
      <CustomHeader>
        
        <Counter onNumberChange={handleNumberChange}/>
        {NumberService(changedNumber)}
        </CustomHeader>
    </div>
  );
}

export default App;
