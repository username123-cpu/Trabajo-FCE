var canvas;
var block1,block2,block3,block4;
var ball, edges;


function preload(){
  
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
  
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "green";
  
    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "pink";
    //crea dos bloques más aquí, tales como block3 y block4

    ball = createSprite(50,100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    text("si te sientes libre toca el color naranja",40,40);
    text("si no es el caso, toca el azul",40,200)
    text("usa w a s d para moverte",200,100);
  
    //escribe el código para rebotar la pelota del block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        text("No te sientes libre y aún así pudiste tomar una decisión, pero es tú decisión o la de alguien más?",100,400)
        
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        text("Te sientes libre, pero lo eres ? Después de todo, hiciste lo que te ordené",100,400)     
        
    }
if(block3.isTouching(ball)){
        ball.shapeColor = "green"
        text("Crees que eres libre y por lo mismo debes puedes ejercer tu libertad, pero así no es como funciona",200,400);
    }
    //escribe el código para rebotar la pelota del block3

if(block4.isTouching(ball)){
        ball.shapeColor = "pink"
        text("si tocaste todos los cuadros buscando una respuesta, este cuadro puede que te la de, ya que, es tan simple como decir que hay que vivir una buena vidad, preocuparnos por nuestra decisiones pero también disfrutandolas y sabiendo que son nuestras decisiones y no culpar a alguien más por nuestra decisión",300,400,200);
    }
    //escribe el código para rebotar la pelota del block4
  if(keyDown("w")){
    ball.y = ball.y -5
  }
  
  if(keyDown("s")){
    ball.y = ball.y +5
  }
  
  if(keyDown("d")){
    ball.x = ball.x +5
  }
  
 if(keyDown("a")){
    ball.x = ball.x -5
  }
    drawSprites();
}
