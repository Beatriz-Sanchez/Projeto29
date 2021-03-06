/*
stands: são as prateleiras
blocks: são os blocos que temos que derrubar no jogo
Objetivo: complete o jogo de lançar uma pedra para derrubar os objetos
*/

//crie uma classe de Estilingue (não precisa das imagens, só o mecanismo de arrastar e lançar), como vimos na aula 28

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //crie outra prateleira com blocos aqui
  stand2 = new Stand(700,200,200,10);


  /*crie um corpo Matter para ser a pedra.
  não esqueça de adicioná-lo ao mundo*/
  

  //crie um objeto da classe estilingue, use-o para ligar o corpo da pedra e um pontoB

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  //faça o display da sua segunda prateleira com blocos
  stand2.display();

  //use o image() para adicionar a imagem polygon_img (já carregada) ao seu corpo de pedra
  //lembre-se de ajustar o imageMode() para center

  //faça o display do estilingue


}

//adicione o evento de mouseDragged() para puxar a pedra com o mouse

//adicione o evento de mouseReleased() para lançar a pedra nas pirâmides de blocos, usando o método voar()
//lembre-se de criar o método voar() na sua classe (definindo bodyA como null)

//adicione opções aos blocos, teste e se certifique de que os blocos caem quando são atingidos