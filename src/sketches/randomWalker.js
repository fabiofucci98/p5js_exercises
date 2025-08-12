import Sketch from "../Sketch";

class Walker{
    constructor(p){
        this.p = p;
        this.x = p.width/2;
        this.y = p.height/2;
    }
    show(){
        const p = this.p;
        p.stroke(0);
        p.point(this.x,this.y);
    };

    step(){
        const p = this.p;
        if(p.random(1)<0.05){
            if(p.mouseX>this.x) this.x++;
            if(p.mouseX<this.x) this.x--;
            if(p.mouseY>this.y) this.y++;
            if(p.mouseY<this.y) this.y--;
        
        }
        else{
            this.x += p.random(-1,1);
            this.y += p.random(-1,1);
        }

        
        
    }
}

const sketch = (p)=>{
    let walker;
    p.setup = ()=>{
        p.createCanvas(1000,1000);
        walker = new Walker(p);
    }

    p.draw = ()=>{
        walker.show();
        walker.step();
    }
};

const text = "Random walker with a 5% probability of moving towards the mouse"
const RandomWalker = new Sketch(sketch,text);
    



export default RandomWalker;