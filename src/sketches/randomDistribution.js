import Sketch from "../Sketch";

const sketch = (p) => {
    
    const total = 20;
    const randomCounts = Array.from({length: total},()=>0);
    let index;


    p.setup = () => {
        p.createCanvas(640, 240);
        p.background(255);
    }

    p.draw = () => {

        index = p.floor(p.random(randomCounts.length));
        randomCounts[index]++;

        p.stroke(0);
        p.fill(127);
        let w = p.width / randomCounts.length;

        for (let x = 0; x < randomCounts.length; x++) {
            p.rect(x * w, p.height - randomCounts[x], w - 1, randomCounts[x]);
        }


    }
}

const text = "Example of a random distribution";

const RandomDistribution = new Sketch(sketch,text);

export default RandomDistribution