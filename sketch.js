const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, Base, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
 var options = {
   isStatic: true
 };
  //criar corpo do jogador
 base = Bodies.rectangle(200,350,180,150, options);
 World.add(world, base);

 player = Bodies.rectangle(250, base.position.y - 160, 50, 180, options);
 World.add(world, player);

}

function draw() {
  background(backgroundImg);
  

  image(baseimage, base.position.x, base.position.y, 180, 150);
  image(playerimage, player.position.x, player.position.y, 50, 180);
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
 
}
