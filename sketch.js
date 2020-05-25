var trex, t_r, t_c;

var ground, invi, g_img;

var cloudsGroup, cl_img;

var obstacle, ob1_img, ob2_img, ob3_img, ob4_img, ob5_img, ob6_img;

var score;

function preload(){
      
      t_r = loadAnimation("trex1.png","trex3.png","trex4.png");
  
  t_c = loadImage("trex_collided.png");
  
  g_img = loadImage("ground2.png");
  
  cl_img = loadImage("cloud.png");
  
  ob1_img = loadImage("obstacle1.png");
  ob2_img = loadImage("obstacle2.png");
  ob3_img = loadImage("obstacle3.png");
  ob4_img = loadImage("obstacle4.png");
  ob5_img = loadImage("obstacle5.png");
  ob6_img = loadImage("obstacle6.png");

}

function setup(){
    createCanvas(400,400);
  
    
  trex = createSprite(40,380,20,60);
  trex.addAnimation("running", t_r); 
  trex.scale = 0.5;
  
  ground = createSprite(200,380,400,10);
  
  ground.addAnimation("grnd", g_img);
  
  ground.velocityX = -3;
  
  ground.x = ground.width/2;
  
  invi = createSprite(200,385,400,5);
  
  invi.visible = false;
  

}


function draw(){

 background("white");
  
  if(keyDown("UP_ARROW")){
  
  trex.velocityY = -40;
  }
  
  
  trex.velocityY = trex.velocityY+0.6;
  
  
  if(ground.x<0){
     
    ground.x = ground.width/2;
  }
  
  spawnClouds();
  spawnObstacles();
  drawSprites();
  
  trex.collide(invi);
  
  

}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
      cloud.y = Math.round(random(280,320));
      cloud.addImage(cl_img);
       cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
      cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //CloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - 4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
           
           case 1: obstacle.addImage(ob1_img); 
                   break;
                   
           case 2: obstacle.addImage(ob2_img); 
                   break;
                   
           case 3: obstacle.addImage(ob3_img); 
                   break;
                   
           case 4: obstacle.addImage(ob4_img); 
                   break;
                   
           case 5: obstacle.addImage(ob5_img); 
                   break;
                   
           case 6: obstacle.addImage(ob6_img); 
                   break;
                   
                   default: break;         
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 90;
    //add each obstacle to the group
    //ObstaclesGroup.add(obstacle);
  }
}



