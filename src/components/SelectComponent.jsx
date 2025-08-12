const SelectComponent = ({ selectedSketch = "", onSketchChange, sketches = {} }) => {
  const sketchNames = Object.keys(sketches);

  return (
    <select
      className="w-full px-4 py-3 text-gray-800 bg-white/80 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors cursor-pointer"
      onChange={onSketchChange}
      value={selectedSketch}
    >
      {sketchNames.map((name) => (
        <option
          key={name}
          value={name}
          className="bg-white text-gray-800"
        >
          {name}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
