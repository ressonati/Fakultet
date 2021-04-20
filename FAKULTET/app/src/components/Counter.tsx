import React from 'react';

interface CounterProps{
    initialNumber?: number;
    onNumberChange?: (someNumber: number) => void;
    
}

const Counter : React.FC<CounterProps> = ({initialNumber, onNumberChange})=> {
    const [counterNumber, setCounterNumber] =React.useState(initialNumber || 0); //zdefiniowanie wartosci poczatkowej domyslna wartosc jesli zmienna undefined to bierze 0
    
   

    const addNumber = () =>{
        const number = counterNumber+1;
        setCounterNumber(number);
        //if (onnumberChange){
            //onNumberChange(number);
        //is equal to:
        
        onNumberChange&&onNumberChange(number);
    }
    
    const decreaseNumber=()=>{
        const number = counterNumber-1;
        setCounterNumber(number);
        onNumberChange&&onNumberChange(number);
    }
    return(
        <div>
            <button onClick={addNumber} >+</button> 
            {counterNumber}
            <button onClick={decreaseNumber} >-</button> 

        </div>
    );
}

export default Counter;
