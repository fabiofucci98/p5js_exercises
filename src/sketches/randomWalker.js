class Walker{
    constructor(p){
        this.p = p;
        this.x = p.width/2;
        this.y = p.height/2;
        console.log(this.x,this.y)
    }
    show(){
        const p = this.p;
        p.stroke(0);
        p.point(this.x,this.y);
    };

    step(){
        const p = this.p;
        this.x += p.floor(p.random(3))-1;
        this.y += p.floor(p.random(3))-1;
    }
    
}


const RandomWalker = (p)=>{
    let walker;
    p.setup = ()=>{
        p.createCanvas(640,240);
        walker = new Walker(p);
    }

    p.draw = ()=>{
        walker.show();
        walker.step();
    }
};

export default RandomWalker;