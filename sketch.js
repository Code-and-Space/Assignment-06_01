const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;

const drawBody = Helpers.drawBody;

let engine;

let ground;
let leftWall;
let rightWall;


// JavaScript Objects for 1 honeycomb module

// Triangle01: Bottom Big Triangle
let bigTriangleBottom01 = {
  colorR: 245,
  colorG: 238,
  colorB: 128,
  x1: 60,
  y1: 440,
  x2: 300,
  y2: 580,
  x3: 300,
  y3: 300
}

// Triangle01: Bottom Big Triangle
let bigTriangleBottom02 = {
  colorR: 245,
  colorG: 238,
  colorB: 128,
  x1: 300,
  y1: 580,
  x2: 540,
  y2: 440,
  x3: 300,
  y3: 300
}

// Triangle02: Right big triangle
let rightBigTriangle01 = {
  colorR: 221,
  colorG: 167,
  colorB: 79,
  x1: 540,
  y1: 440,
  x2: 540,
  y2: 160,
  x3: 300,
  y3: 300
}

// Triangle02: Right big triangle
let rightBigTriangle02 = {
  colorR: 221,
  colorG: 167,
  colorB: 79,
  x1: 540,
  y1: 160,
  x2: 300,
  y2: 20,
  x3: 300,
  y3: 300
}



let bigTriangleBottom01_matter;
let bigTriangleBottom02_matter;
let rightBigTriangle01_matter;
let rightBigTriangle02_matter;



function setup() {
  createCanvas(800, 800);

  // create an engine
  engine = Engine.create();

  /////////////////////////////////////////////////////////////////////
  // This is bigTriangleBottom01
  let bigTriangleBottom01_vertices = [
    {x: bigTriangleBottom01.x1, y: bigTriangleBottom01.y1},
    {x: bigTriangleBottom01.x2, y: bigTriangleBottom01.y2},
    {x: bigTriangleBottom01.x3, y: bigTriangleBottom01.y3}
  ];

  // create triangles
  bigTriangleBottom01_matter = Bodies.fromVertices(100, 200, bigTriangleBottom01_vertices);
  /////////////////////////////////////////////////////////////////////

  // This is bigTriangleBottom01
  let bigTriangleBottom02_vertices = [
    {x: bigTriangleBottom02.x1, y: bigTriangleBottom02.y1},
    {x: bigTriangleBottom02.x2, y: bigTriangleBottom02.y2},
    {x: bigTriangleBottom02.x3, y: bigTriangleBottom02.y3}
  ];

  // create triangles
  bigTriangleBottom02_matter = Bodies.fromVertices(100, 200, bigTriangleBottom02_vertices);
  /////////////////////////////////////////////////////////////////////

  // This is bigTriangleBottom01
  let rightBigTriangle01_vertices = [
    {x: rightBigTriangle01.x1, y: rightBigTriangle01.y1},
    {x: rightBigTriangle01.x2, y: rightBigTriangle01.y2},
    {x: rightBigTriangle01.x3, y: rightBigTriangle01.y3}
  ];

  // create triangles
  rightBigTriangle01_matter = Bodies.fromVertices(100, 200, rightBigTriangle01_vertices);
  /////////////////////////////////////////////////////////////////////

  // This is bigTriangleBottom01
  let rightBigTriangle02_vertices = [
    {x: rightBigTriangle02.x1, y: rightBigTriangle02.y1},
    {x: rightBigTriangle02.x2, y: rightBigTriangle02.y2},
    {x: rightBigTriangle02.x3, y: rightBigTriangle02.y3}
  ];

  // create triangles
  rightBigTriangle02_matter = Bodies.fromVertices(100, 200, rightBigTriangle02_vertices);
  /////////////////////////////////////////////////////////////////////






  World.add(engine.world, [bigTriangleBottom01_matter, bigTriangleBottom02_matter, rightBigTriangle01_matter, rightBigTriangle02_matter]);


  ground = Bodies.rectangle(400, 800, 810, 10, {
    isStatic: true, angle: Math.PI * 0.00
  });
  leftWall = Bodies.rectangle(-50, 800, 100, 2000, {
    isStatic: true, angle: Math.PI * 0.00
  });
  rightWall = Bodies.rectangle(850, 800, 100, 2000, {
    isStatic: true, angle: Math.PI * 0.00
  });

  // add all of the bodies to the world
  World.add(engine.world, [ground, leftWall, rightWall]);

  // run the engine
  Engine.run(engine);
}

function draw() {
  background(0);

  fill(221,167,79);
  drawBody(bigTriangleBottom01_matter);
  drawBody(bigTriangleBottom02_matter);
  drawBody(rightBigTriangle01_matter);
  drawBody(rightBigTriangle02_matter);


  fill(200);
  drawBody(ground);
  drawBody(leftWall);
  drawBody(rightWall);


}
