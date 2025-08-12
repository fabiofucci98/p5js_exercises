import Sketch from "../Sketch";

const text = "aaa";
const sketch = (p) =>{
    p.setup = () => {
        p.createCanvas(400, 400);
    }

    p.draw = () => {
        if (p.mouseIsPressed) {
            p.fill(0);
        } else {
            p.fill(255);
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
    }
};

const Circles = new Sketch(sketch,text);



export default Circles


