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


const RandomWalker = (p)=>{
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

export default RandomWalker;