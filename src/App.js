import React from 'react';
import p5 from 'p5';
import Circles from './sketches/circles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.sketches = {
      Circles,
      None: null, 
    };

    this.state = {
      selectedSketch: 'None', 
    };
  }

  componentDidMount() {
    this.updateSketch(this.state.selectedSketch);
  }

  updateSketch = (selectedSketch) => {
    if (this.myP5) {
      this.myP5.remove();
    }

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
        <select onChange={this.handleSelectChange} value={this.state.selectedSketch}>
          {Object.keys(this.sketches).map((sketchName) => (
            <option key={sketchName} value={sketchName}>
              {sketchName}
            </option>
          ))}
        </select>
        <div ref={this.myRef}></div>
      </>
    );
  }
}

export default App;
