import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'


const App = () => {
  return (
    <div className='appButtonClass'>
      <CalculatorDisplay />
      <ActionButton action='Clear' styleName='grow3'/>
      <ActionButton action='/' styleName='nogrow action'/>
      <NumberButton number='7' styleName='nogrow'/>
      <NumberButton number='8' styleName='nogrow'/>
      <NumberButton number='9' styleName='nogrow'/>
      <ActionButton action='x' styleName='nogrow action'/>
      <NumberButton number='4' styleName='nogrow'/>
      <NumberButton number='5' styleName='nogrow'/>
      <NumberButton number='6' styleName='nogrow'/>
      <ActionButton action='-' styleName='nogrow action'/>
      <NumberButton number='1' styleName='nogrow'/>
      <NumberButton number='2' styleName='nogrow'/>
      <NumberButton number='3' styleName='nogrow'/>
      <ActionButton action='+' styleName='nogrow action'/>
      <NumberButton number='0' styleName='grow4'/>
      <ActionButton action='=' styleName='nogrow action'/>
    </div>
  );
};

export default App;


