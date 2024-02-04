import React, { useState } from 'react';
import SelectComponent from './components/SelectComponent';
import sketches from './sketchesMap';
import SketchComponent from './components/SketchComponent';

const App = () => {
  const [selectedSketch, setSelectedSketch] = useState('None');

  const handleSelectChange = (e) => {
    const selectedSketch = e.target.value;
    setSelectedSketch(selectedSketch);
  };

  return (
    <>
      <SelectComponent  selectedSketch={selectedSketch} onSketchChange={handleSelectChange} sketches={sketches} />
      <SketchComponent selectedSketch={sketches[selectedSketch]} />
    </>
  );
};

export default App;
