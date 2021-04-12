var canvas;
var music;
var surface1,surface2,surface3,surface4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,595,350,20);
    surface1.shapeColor=("pink");
    surface2=createSprite(280,595,200,20);
    surface2.shapeColor=("yellow");
    surface3=createSprite(480,595,180,20);
    surface3.shapeColor=("green");
    surface4=createSprite(720,595,235,20);
    surface4.shapeColor=("blue");
   //create box sprite and give velocity
   ball = createSprite(random(20,750),100, 40,40);
   ball.shapeColor=("black");
   ball.velocityX=5;
   ball.velocityY=2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges=createEdgeSprites();
     ball.bounceOff(edges);
    if(surface1.isTouching(ball)&&ball.bounceOff(surface1)){
        ball.shapeColor=("pink");
        music.play();
    }
    if(surface2.isTouching(ball)){
        ball.shapeColor=("yellow");
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }
    if(surface3.isTouching(ball)&&ball.bounceOff(surface3)){
        ball.shapeColor=("green");
    }
    if(surface4.isTouching(ball)&&ball.bounceOff(surface4)){
        ball.shapeColor=("blue");
    }

    
    drawSprites();
}
