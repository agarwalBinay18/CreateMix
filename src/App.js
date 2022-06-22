
import React from 'react';
import './App.css';
import CreateMix from './components';
import CustomizedDialogs from './components/dialog';

function App() {
  return (
    <div className="App">
      <CustomizedDialogs title="Create Chargemix">
      <CreateMix />
        </CustomizedDialogs>
      
    </div>
  ); 
}

export default App;
