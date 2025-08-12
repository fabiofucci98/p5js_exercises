const SelectComponent = ({ selectedSketch, onSketchChange, sketches }) => {
  return (
    <select onChange={onSketchChange} value={selectedSketch}>
      {Object.keys(sketches).map((sketchName) => (
        <option key={sketchName} value={sketchName}>
          {sketchName}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
