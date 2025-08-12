import { useEffect, useRef } from "react";
import p5 from "p5";

const SketchComponent = ({ selectedSketch }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!selectedSketch?.sketch) return;

    const sketchInstance = new p5(selectedSketch.sketch, containerRef.current);

    return () => {
      sketchInstance.remove();
    };
  }, [selectedSketch]);

  return (
    <>
      <div ref={containerRef}></div>
      {selectedSketch?.text && <p>{selectedSketch.text}</p>}
    </>
  );
};

export default SketchComponent;
