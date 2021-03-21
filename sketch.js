var  wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
 
  speed=random(223, 321);
 weight=random(30, 52);
 thickness=random(22, 83);

 bullet=createSprite(50, 200, 70, 20);
 bullet.shapeColor=("white");
 wall=createSprite(1200, 200, thickness , height/2);
 wall.shapeColor =color(80, 80, 80);
}
 
function draw() {
  background("black");  
 bullet.velocityX = speed;

    if(wall.x - bullet.x < bullet.width/2+bullet.width/2){
      bullet.velocityX = 0;
      var damage =(0.5  *   weight   *   speed *   speed/ thickness  *  thickness  * thickness);

          if(damage<4){
            bullet.shapeColor="green";
          }

         if(damage>10){
            bullet.shapeColor="red";  
        }
    }
   drawSprites();
  }
  

