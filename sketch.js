var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createOrange()
{
  OrangeLeaf = createSprite(random (50, 350), 40, 10, 10);
  OrangeLeaf.addImage(orangeImg);
  OrangeLeaf.scale=0.08;
  OrangeLeaf.velocityY=3;
  OrangeLeaf.lifetime=150;
}

function createApple()
{
  Apple = createSprite(random (50, 350), 40, 10, 10);
  Apple.addImage(appleImg);
  Apple.scale=0.08;
  Apple.velocityY=3;
  Apple.lifetime=150;
}

function createRedLeaf()
{
  RedLeaf = createSprite(random (50, 350), 40, 10, 10);
  RedLeaf.addImage(redImg);
  RedLeaf.scale=0.08;
  RedLeaf.velocityY=3;
  RedLeaf.lifetime=150;
}

function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  


  var selecionarSprite = Math.round(random(1, 3));
  if(frameCount % 80 == 0)
  {
    if(selecionarSprite == 1)
    {
      createApple();
      
    } else if (selecionarSprite == 2)
    {
      createOrange();
    } else
    {
      createRedLeaf();
    }
  }

  drawSprites();
  //createOrange();
  //createRedLeaf();
  //createApple();
  
}
