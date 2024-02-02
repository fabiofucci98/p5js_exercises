import React from 'react';
import p5 from 'p5';
import SelectComponent from './components/SelectComponent';
import Circles from './sketches/circles';
import RandomWalker from './sketches/randomWalker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    // Define your available sketches
    this.sketches = {
      Circles,
      RandomWalker,
      None: null, // Placeholder for "None" option
    };

    this.state = {
      selectedSketch: 'None', // Default selected sketch
    };
  }

  componentDidMount() {
    this.updateSketch(this.state.selectedSketch);
  }

  updateSketch = (selectedSketch) => {
    if (this.myP5) {
      this.myP5.remove();
    }

    // Get the corresponding sketch from the sketches object
    const Sketch = this.sketches[selectedSketch];

    if (Sketch) {
      this.myP5 = new p5(Sketch, this.myRef.current);
    }
  };

  handleSelectChange = (e) => {
    const selectedSketch = e.target.value;
    this.setState({ selectedSketch }, () => {
      this.updateSketch(selectedSketch);
    });
  };

  render() {
    return (
      <>
        <SelectComponent
          selectedSketch={this.state.selectedSketch}
          onSketchChange={this.handleSelectChange}
          sketches={this.sketches}
        />
        <div ref={this.myRef}></div>
      </>
    );
  }
}

export default App;
