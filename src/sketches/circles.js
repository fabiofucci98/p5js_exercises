const Circles = (p) => {

    p.text = "test text";
    p.versions = ['red','blue'];

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
}

export default Circles