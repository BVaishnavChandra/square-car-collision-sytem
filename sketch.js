var car , wall ;
var speed , weight , deformation ; 

function setup() {
  createCanvas(1600,400);
  

  car = createSprite(110, 200, 50, 50);
  car.shapeColor = "green" ;

  wall = createSprite(1500 , 200 , 60 , height/2) ;
  wall.shapeColor = "turquoise" ;
  wall.tint = "white" ;
  
  speed = random(55 , 90) ;
  weight = random(400 , 1500) ; 

}

function draw() {
  background("lightblue");    
  
  car.velocityX = speed ; 

  fill("gold") ;
  stroke("white") ;
  textSize(26) ;
  text("CAR COLLISION SYSTEM" , 300 , 30) ;

  fill("black") ;
  stroke("black") ;
  textSize(20) ;
  text("Made by:" , 950 , 30) ;
  text("B.Vaishnav Chandra" , 1070 , 30) ;

  fill("white") ;
  stroke("white") ;
  textSize(20) ;
  text("IF DEFORMATION IS:" , 50 , 325) ;

  fill("green") ;
  stroke("green") ;
  textSize(20) ;
  text("BELOW 100 = CAR COLOR IS GREEN" , 350 , 300) ; 

  fill("yellow") ;
  stroke("yellow") ;
  textSize(20) ;
  text("BELOW 180 AND ABOVE 100 = CAR COLOR IS YELLOW" , 530 , 350) ; 
 
  fill("red") ;
  stroke("red") ;
  textSize(20) ;
  text("ABOVE 180 = CAR COLOR IS RED" , 900 , 300) ; 

 if(wall.x - car.x < (car.width + wall.width)/2 ){
    car.velocityX = 0 ;

    var deformation = 0.5 * weight * speed * speed/22500 ;

    if(deformation > 180)
    {
    car.shapeColor = "red" ;
    fill("red") ;
    stroke("red") ;
    textSize(24) ;    
    text("Don't drive rashly , Your family is waiting for you" , 500 , 170) ;
    }
    if(deformation < 180  &&  deformation > 100)
    {
    car.shapeColor = "yellow" ; 
    fill("yellow") ;
    stroke("yellow") ;
    textSize(24) ; 
    text("Be careful while driving , take care of your family " , 500 , 170) ;
    }
    if(deformation < 100)
    {
      car.shapeColor = "green" ; 
    fill("green") ;
    stroke("green") ;
    textSize(24) ; 
    text("Your deformation is good , Keep it up" , 550 , 170) ;
    }

 }
  

  drawSprites();
}