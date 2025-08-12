import { useEffect, useRef } from 'react';
import p5 from 'p5';


const SketchComponent = ({ selectedSketch }) => {
  const myRef = useRef(null);

  useEffect(() => {
    const myP5 = new p5(selectedSketch?.sketch, myRef.current);
    return () => {
      myP5.remove();
    };
  }, [selectedSketch]);

  let text = '';
  if(selectedSketch && selectedSketch.text) text = selectedSketch.text;
  return (
    <>
      <div ref={myRef}></div>
      <p>{text}</p>
    </>

  );
};

export default SketchComponent;
