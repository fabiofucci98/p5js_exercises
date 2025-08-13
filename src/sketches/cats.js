import Sketch from "../Sketch";

const text = "Miao";

const sketch = (p) => {
    let img;
    let pixelsToDraw = [];
    let imgLoaded = false;

    p.setup = () => {
        // Detect mobile device
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        // Use higher scale for mobile (smaller canvas)
        const scale = isMobile ? 4 : 2;
        p.loadImage(`${import.meta.env.BASE_URL}assets/cats.jpg`, (loadedImg) => {
            img = loadedImg;
            p.createCanvas(Math.floor(img.width / scale), Math.floor(img.height / scale));
            img.loadPixels();
            // Store all pixel coordinates
            for (let y = 0; y < img.height; y++) {
                for (let x = 0; x < img.width; x++) {
                    pixelsToDraw.push({ x, y });
                }
            }
            // Shuffle for random reveal
            p.shuffle(pixelsToDraw, true);
            imgLoaded = true;
            // Store scale for use in draw
            p._catScale = scale;
        });
    };

    p.draw = () => {
        if (!imgLoaded) return; // wait until image is ready

        p.noStroke();
        const scale = p._catScale || 2;
        // Lower batch size for mobile
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const batchSize = isMobile ? 1000 : 5000;

        // Reveal a batch of pixels
        for (let i = 0; i < batchSize && pixelsToDraw.length > 0; i++) {
            let { x, y } = pixelsToDraw.pop();
            let c = img.get(x, y);
            p.fill(c);
            // Draw at scaled coordinates
            p.rect(Math.floor(x / scale), Math.floor(y / scale), 1, 1);
        }

        if (pixelsToDraw.length === 0) {
            p.noLoop();
        }
    };
};

const Cats = new Sketch(sketch, text);

export default Cats;
