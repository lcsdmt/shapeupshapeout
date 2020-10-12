let body = document.getElementsByTagName("body")[0];
let rectangleBtn = document.getElementById("rectangleBtn");
let squareBtn = document.getElementById("squareBtn");
let circleBtn = document.getElementById("circleBtn");
let triangleBtn = document.getElementById("triangleBtn");
let shapesContainer = document.getElementById("shapesContainer");
let radiusCir = document.getElementById("radiusCir"); //get radius
let triBase = document.getElementById("triHeight"); //get triBase
let recHeight = document.getElementById("recHeight"); // get recHeight
let recWidth = document.getElementById("recWidth"); // get recWidth
let sideLength = document.getElementById("sideLength"); // get sideLength
let shapeName = document.getElementById("shapeNameSP")

class Shape {
    constructor() {

    }
};

class Circle extends Shape {
    constructor(radiusCir) {
        super();
        this.radiusCir = radiusCir.value;
        this.circle = document.createElement("div");
        this.circle.className = "circle";
        this.circle.style.position = "absolute";
        this.circle.style.top = `${Math.floor(Math.random() * 575) + 1}px`;
        this.circle.style.left = `${Math.floor(Math.random() * 575) + 1}px`;
        this.circle.style.width = `${(this.radiusCir) * 2}px`;
        this.circle.style.height = `${(this.radiusCir) * 2}px`;
        this.circle.style.radiusCir = radiusCir.value;
        shapesContainer.appendChild(this.circle);
        this.circle.addEventListener("click", () => {
            this.describe();
        })
        this.circle.addEventListener("dblclick", () => {
            document.getElementById("shapesContainer").removeChild(this.circle);
        })
    }
    describe() {
        //push info to side bar
        let radius = document.getElementById("stat1");
        let diameter = document.getElementById("stat2");
        let area = document.getElementById("stat3");
        let circumference = document.getElementById("stat4");
        let mathPi = Math.PI;
        let areaMath = mathPi * this.radiusCir * this.radiusCir;
        let circumferenceMath = 2 * mathPi * this.radiusCir;
        shapeName.innerText = "Circle";
        radius.innerText = `Radius = ${this.radiusCir}px`;
        diameter.innerText = `Diameter = ${this.radiusCir * 2}px`;
        area.innerText = `Area = ${+areaMath.toFixed(2)}px`;
        circumference.innerText = `Circumference = ${+circumferenceMath.toFixed(2)}px`;
    }
};

class Triangle extends Shape {
    constructor(triBase) {
        super();
        this.triBase = triBase.value;
        this.triangle = document.createElement("div");
        this.triangle.className = "triangle";
        this.triangle.style.position = "absolute";
        this.triangle.style.top = `${Math.floor(Math.random() * 575) + 1}px`;
        this.triangle.style.left = `${Math.floor(Math.random() * 575) + 1}px`;
        this.triangle.style.borderBottomWidth = `${this.triBase}px`;
        this.triangle.style.borderLeftWidth = `${this.triBase / 2}px`;
        this.triangle.style.borderRightWidth = `${this.triBase / 2}px`;
        shapesContainer.appendChild(this.triangle);
        this.triangle.addEventListener("click", () => {
            this.describe();
        })
        this.triangle.addEventListener("dblclick", () => {
            document.getElementById("shapesContainer").removeChild(this.triangle);
        })
    }
    describe() {
        //push info to side bar
        // i think i have some formula errors
        let height = document.getElementById("stat1")
        let base = document.getElementById("stat2")
        let area = document.getElementById("stat3")
        let perimeterObj = document.getElementById("stat4")
        let aANDb = Math.sqrt((this.triBase * this.triBase) / 2);
        let triHeight = Math.sqrt((aANDb * aANDb) - ((this.triBase / 2) * (this.triBase / 2)));
        let triArea = .5 * this.triBase * triHeight;
        let triPerimeter = 2 * triHeight + (Math.sqrt(2)) * triHeight; //covalence...but bad math?
        // aANDb.toFixed(2) + aANDb.toFixed(2) + this.triBase;
        shapeName.innerText = "Triangle";
        height.innerText = `Height = ${+triHeight.toFixed(2)}px`;
        base.innerText = `Base = ${this.triBase}px`;
        area.innerText = `Area = ${+triArea.toFixed(2)}px`;
        perimeterObj.innerText = `Perimeter = ${+triPerimeter.toFixed(2)}px`;
    }
};

class Rectangle extends Shape {
    constructor(recHeight, recWidth) {
        super();
        this.recHeight = recHeight.value;
        this.recWidth = recWidth.value;
        this.rectangle = document.createElement("div");
        this.rectangle.className = "rectangle";
        this.rectangle.style.position = "absolute";
        this.rectangle.style.top = `${Math.floor(Math.random() * 575) + 1}px`;
        this.rectangle.style.left = `${Math.floor(Math.random() * 575) + 1}px`;
        this.rectangle.style.width = `${this.recWidth}px`;
        this.rectangle.style.height = `${this.recHeight}px`;
        shapesContainer.appendChild(this.rectangle);
        this.rectangle.addEventListener("click", () => {
            this.describe();
        })
        this.rectangle.addEventListener("dblclick", () => {
            document.getElementById("shapesContainer").removeChild(this.rectangle);
        })

    }
    describe() {
        //push info to side bar
        let height = document.getElementById("stat1")
        let width = document.getElementById("stat2")
        let area = document.getElementById("stat3")
        let perimeter = document.getElementById("stat4")
        shapeName.innerText = "Rectangle";
        height.innerText = `Height = ${this.recHeight}px`;
        width.innerText = `Width = ${this.recWidth}px`;
        area.innerText = `Area = ${this.recHeight * this.recWidth}px`;
        perimeter.innerText = `Perimeter = ${(this.recHeight * 2) + (this.recWidth * 2)}px`;
    }
};

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength.value;
        this.square = document.createElement("div");
        this.square.className = "square";
        this.square.style.position = "absolute";
        this.square.style.top = `${Math.floor(Math.random() * 575) + 1}px`;
        this.square.style.left = `${Math.floor(Math.random() * 575) + 1}px`;
        this.square.style.width = `${this.sideLength}px`;
        this.square.style.height = `${this.sideLength}px`;
        shapesContainer.appendChild(this.square);
        this.square.addEventListener("click", () => {
            this.describe();
        })
        this.square.addEventListener("dblclick", () => {
            document.getElementById("shapesContainer").removeChild(this.square);
        })
    }
    describe() {
        //push info to side bar
        let height = document.getElementById("stat1")
        let width = document.getElementById("stat2")
        let area = document.getElementById("stat3")
        let perimeter = document.getElementById("stat4")
        shapeName.innerText = "Square";
        height.innerText = `Height = ${this.sideLength}px`;
        width.innerText = `Width = ${this.sideLength}px`;
        area.innerText = `Area = ${this.sideLength * this.sideLength}px`;
        perimeter.innerText = `Perimeter = ${this.sideLength * 4}px`;
    }
};

rectangleBtn.addEventListener("click", () => new Rectangle(recHeight, recWidth));
squareBtn.addEventListener("click", () => new Square(sideLength));
circleBtn.addEventListener("click", () => new Circle(radiusCir));
triangleBtn.addEventListener("click", () => new Triangle(triBase));

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    let stat1 = document.getElementById("stat1")
    let stat2 = document.getElementById("stat2")
    let stat3 = document.getElementById("stat3")
    let stat4 = document.getElementById("stat4")
    shapeName.innerText = "Shape";
    stat1.innerText = "Stat: 1";
    stat2.innerText = "Stat: 2";
    stat3.innerText = "Stat: 3";
    stat4.innerText = "Stat: 4";
    shapesContainer.innerHTML = "";
    radiusCir.value = "";
    triBase.value = "";
    recHeight.value = "";
    recWidth.value = "";
    sideLength.value = "";
});











var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext('2d'),

    minDist = 10,
    maxDist = 30,
    initialWidth = 10,
    maxLines = 100,
    initialLines = 4,
    speed = 5,

    lines = [],
    frame = 0,
    timeSinceLast = 0,

    dirs = [
        // straight x, y velocity
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
        // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
        [.7, .7],
        [.7, -.7],
        [-.7, .7],
        [-.7, -.7]
    ],
    starter = { // starting parent line, just a pseudo line

        x: w / 2,
        y: h / 2,
        vx: 0,
        vy: 0,
        width: initialWidth
    };

function init() {

    lines.length = 0;

    for (var i = 0; i < initialLines; ++i)
        lines.push(new Line(starter));

    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, w, h);

    // if you want a cookie ;)
    // ctx.lineCap = 'round';
}
function getColor(x) {

    return 'hsl( hue, 80%, 50% )'.replace(
        'hue', x / w * 360 + frame
    );
}
function anim() {

    window.requestAnimationFrame(anim);

    ++frame;

    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,.02)';
    ctx.fillRect(0, 0, w, h);
    ctx.shadowBlur = .5;

    for (var i = 0; i < lines.length; ++i)

        if (lines[i].step()) { // if true it's dead

            lines.splice(i, 1);
            --i;

        }

    // spawn new

    ++timeSinceLast

    if (lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5) {

        timeSinceLast = 0;

        lines.push(new Line(starter));

        // cover the middle;
        ctx.fillStyle = ctx.shadowColor = getColor(starter.x);
        ctx.beginPath();
        ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2);
        ctx.fill();
    }
}

function Line(parent) {

    this.x = parent.x | 0;
    this.y = parent.y | 0;
    this.width = parent.width / 1.25;

    do {

        var dir = dirs[(Math.random() * dirs.length) | 0];
        this.vx = dir[0];
        this.vy = dir[1];

    } while (
        (this.vx === -parent.vx && this.vy === -parent.vy) || (this.vx === parent.vx && this.vy === parent.vy));

    this.vx *= speed;
    this.vy *= speed;

    this.dist = (Math.random() * (maxDist - minDist) + minDist);

}
Line.prototype.step = function () {

    var dead = false;

    var prevX = this.x,
        prevY = this.y;

    this.x += this.vx;
    this.y += this.vy;

    --this.dist;

    // kill if out of screen
    if (this.x < 0 || this.x > w || this.y < 0 || this.y > h)
        dead = true;

    // make children :D
    if (this.dist <= 0 && this.width > 1) {

        // keep yo self, sometimes
        this.dist = Math.random() * (maxDist - minDist) + minDist;

        // add 2 children
        if (lines.length < maxLines) lines.push(new Line(this));
        if (lines.length < maxLines && Math.random() < .5) lines.push(new Line(this));

        // kill the poor thing
        if (Math.random() < .2) dead = true;
    }

    ctx.strokeStyle = ctx.shadowColor = getColor(this.x);
    ctx.beginPath();
    ctx.lineWidth = this.width;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(prevX, prevY);
    ctx.stroke();

    if (dead) return true
}

init();
anim();

window.addEventListener('resize', function () {

    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    starter.x = w / 2;
    starter.y = h / 2;

    init();
})