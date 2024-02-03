import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const SketchComponent = ({ selectedSketch }) => {
  const myRef = useRef(1);

  useEffect(() => {
    const myP5 = new p5(selectedSketch, myRef.current);
    return () => {
      myP5.remove();
    };
  }, [selectedSketch]);

  return <div ref={myRef}></div>;
};

export default SketchComponent;
