var gameState = "start";
var bg_img, lvl1_img, lvl1_animation, character_img, character_backImg, character, character_walkForward, character_walkBackward, character_shootBackward, enemy_img, enemy_backImg, enemy_walkForward, enemy_walkBackward, storyImg, storyPg
var play, story, bg, character, enemy
var enemyGroup

function preload() {
  bg_img = loadImage("Backgrounds/Title Screen/Title Screen.png");
  lvl1_img = loadAnimation("Backgrounds/Lvl 1/1.png","Backgrounds/Lvl 1/2.png", "Backgrounds/Lvl 1/3.png", "Backgrounds/Lvl 1/4.png", "Backgrounds/Lvl 1/5.png", "Backgrounds/Lvl 1/6.png", "Backgrounds/Lvl 1/7.png", "Backgrounds/Lvl 1/8.png")
  storyPg = loadImage("Backgrounds/Story/StoryPage.png")
  character_img = loadAnimation("Animations/Character Walking Forward/0.png")
  character_backImg = loadAnimation("Animations/Character Walking Backward/0.png")
  character_walkForward = loadAnimation("Animations/Character Walking Forward/0.png", "Animations/Character Walking Forward/1.png", "Animations/Character Walking Forward/2.png", "Animations/Character Walking Forward/3.png", "Animations/Character Walking Forward/4.png", "Animations/Character Walking Forward/5.png", "Animations/Character Walking Forward/6.png", "Animations/Character Walking Forward/7.png", "Animations/Character Walking Forward/8.png")
  character_walkBackward = loadAnimation("Animations/Character Walking Backward/0.png", "Animations/Character Walking Backward/1.png","Animations/Character Walking Backward/2.png", "Animations/Character Walking Backward/3.png", "Animations/Character Walking Backward/4.png", "Animations/Character Walking Backward/5.png", "Animations/Character Walking Backward/6.png", "Animations/Character Walking Backward/7.png", "Animations/Character Walking Backward/8.png", )
  character_shootForward = loadAnimation("Animations/Character Forward Shooting/1-0.png", "Animations/Character Forward Shooting/1-1.png", "Animations/Character Forward Shooting/1-2.png", "Animations/Character Forward Shooting/1-3.png", "Animations/Character Forward Shooting/1-4.png", "Animations/Character Forward Shooting/1-5.png","Animations/Character Forward Shooting/1-6.png","Animations/Character Forward Shooting/1-7.png","Animations/Character Forward Shooting/1-8.png","Animations/Character Forward Shooting/1-9.png","Animations/Character Forward Shooting/1-10.png","Animations/Character Forward Shooting/1-11.png","Animations/Character Forward Shooting/1-12.png","Animations/Character Forward Shooting/1-13.png","Animations/Character Forward Shooting/1-14.png","Animations/Character Forward Shooting/1-15.png","Animations/Character Forward Shooting/1-16.png","Animations/Character Forward Shooting/1-17.png","Animations/Character Forward Shooting/1-18.png","Animations/Character Forward Shooting/1-19.png","Animations/Character Forward Shooting/1-20.png","Animations/Character Forward Shooting/1-21.png","Animations/Character Forward Shooting/1-22.png","Animations/Character Forward Shooting/1-23.png","Animations/Character Forward Shooting/1-24.png","Animations/Character Forward Shooting/1-25.png","Animations/Character Forward Shooting/1-26.png","Animations/Character Forward Shooting/1-27.png","Animations/Character Forward Shooting/1-28.png", "Animations/Character Forward Shooting/1-29.png", "Animations/Character Forward Shooting/1-30.png", "Animations/Character Forward Shooting/1-31.png", "Animations/Character Forward Shooting/1-32.png", "Animations/Character Forward Shooting/1-33.png","Animations/Character Forward Shooting/1-34.png","Animations/Character Forward Shooting/1-35.png","Animations/Character Forward Shooting/1-36.png","Animations/Character Forward Shooting/1-37.png","Animations/Character Forward Shooting/1-38.png","Animations/Character Forward Shooting/1-39.png","Animations/Character Forward Shooting/1-40.png","Animations/Character Forward Shooting/1-41.png","Animations/Character Forward Shooting/1-42.png","Animations/Character Forward Shooting/1-43.png","Animations/Character Forward Shooting/1-44.png","Animations/Character Forward Shooting/1-45.png","Animations/Character Forward Shooting/1-46.png","Animations/Character Forward Shooting/1-47.png","Animations/Character Forward Shooting/1-48.png","Animations/Character Forward Shooting/1-49.png","Animations/Character Forward Shooting/1-50.png","Animations/Character Forward Shooting/1-51.png","Animations/Character Forward Shooting/1-52.png","Animations/Character Forward Shooting/1-53.png","Animations/Character Forward Shooting/1-54.png","Animations/Character Forward Shooting/1-55.png","Animations/Character Forward Shooting/1-56.png","Animations/Character Forward Shooting/1-57.png","Animations/Character Forward Shooting/1-58.png","Animations/Character Forward Shooting/1-59.png","Animations/Character Forward Shooting/1-60.png","Animations/Character Forward Shooting/1-61.png","Animations/Character Forward Shooting/1-62.png","Animations/Character Forward Shooting/1-63.png","Animations/Character Forward Shooting/1-64.png","Animations/Character Forward Shooting/1-65.png","Animations/Character Forward Shooting/1-66.png","Animations/Character Forward Shooting/1-67.png", "Animations/Character Forward Shooting/1-68.png", "Animations/Character Forward Shooting/1-69.png", "Animations/Character Forward Shooting/1-70.png", "Animations/Character Forward Shooting/1-71.png", "Animations/Character Forward Shooting/1-72.png","Animations/Character Forward Shooting/1-73.png","Animations/Character Forward Shooting/1-74.png","Animations/Character Forward Shooting/1-75.png","Animations/Character Forward Shooting/1-76.png","Animations/Character Forward Shooting/1-77.png","Animations/Character Forward Shooting/1-78.png","Animations/Character Forward Shooting/1-79.png","Animations/Character Forward Shooting/1-80.png","Animations/Character Forward Shooting/1-81.png","Animations/Character Forward Shooting/1-82.png","Animations/Character Forward Shooting/1-83.png","Animations/Character Forward Shooting/1-84.png","Animations/Character Forward Shooting/1-85.png","Animations/Character Forward Shooting/1-86.png","Animations/Character Forward Shooting/1-87.png","Animations/Character Forward Shooting/1-88.png","Animations/Character Forward Shooting/1-89.png","Animations/Character Forward Shooting/1-90.png","Animations/Character Forward Shooting/1-91.png",)
  character_shootBackward = loadAnimation("Animations/Character Backward Shooting/1-0.png", "Animations/Character Backward Shooting/1-1.png", "Animations/Character Backward Shooting/1-2.png", "Animations/Character Backward Shooting/1-3.png", "Animations/Character Backward Shooting/1-4.png", "Animations/Character Backward Shooting/1-5.png","Animations/Character Backward Shooting/1-6.png","Animations/Character Backward Shooting/1-7.png","Animations/Character Backward Shooting/1-8.png","Animations/Character Backward Shooting/1-9.png","Animations/Character Backward Shooting/1-10.png","Animations/Character Backward Shooting/1-11.png","Animations/Character Backward Shooting/1-12.png","Animations/Character Backward Shooting/1-13.png","Animations/Character Backward Shooting/1-14.png","Animations/Character Backward Shooting/1-15.png","Animations/Character Backward Shooting/1-16.png","Animations/Character Backward Shooting/1-17.png","Animations/Character Backward Shooting/1-18.png","Animations/Character Backward Shooting/1-19.png","Animations/Character Backward Shooting/1-20.png","Animations/Character Backward Shooting/1-21.png","Animations/Character Backward Shooting/1-22.png","Animations/Character Backward Shooting/1-23.png","Animations/Character Backward Shooting/1-24.png","Animations/Character Backward Shooting/1-25.png","Animations/Character Backward Shooting/1-26.png","Animations/Character Backward Shooting/1-27.png","Animations/Character Backward Shooting/1-28.png", "Animations/Character Backward Shooting/1-29.png", "Animations/Character Backward Shooting/1-30.png", "Animations/Character Backward Shooting/1-31.png", "Animations/Character Backward Shooting/1-32.png", "Animations/Character Backward Shooting/1-33.png","Animations/Character Backward Shooting/1-34.png","Animations/Character Backward Shooting/1-35.png","Animations/Character Backward Shooting/1-36.png","Animations/Character Backward Shooting/1-37.png","Animations/Character Backward Shooting/1-38.png","Animations/Character Backward Shooting/1-39.png","Animations/Character Backward Shooting/1-40.png","Animations/Character Backward Shooting/1-41.png","Animations/Character Backward Shooting/1-42.png","Animations/Character Backward Shooting/1-43.png","Animations/Character Backward Shooting/1-44.png","Animations/Character Backward Shooting/1-45.png","Animations/Character Backward Shooting/1-46.png","Animations/Character Backward Shooting/1-47.png","Animations/Character Backward Shooting/1-48.png","Animations/Character Backward Shooting/1-49.png","Animations/Character Backward Shooting/1-50.png","Animations/Character Backward Shooting/1-51.png","Animations/Character Backward Shooting/1-52.png","Animations/Character Backward Shooting/1-53.png","Animations/Character Backward Shooting/1-54.png","Animations/Character Backward Shooting/1-55.png","Animations/Character Backward Shooting/1-56.png","Animations/Character Backward Shooting/1-57.png","Animations/Character Backward Shooting/1-58.png","Animations/Character Backward Shooting/1-59.png","Animations/Character Backward Shooting/1-60.png","Animations/Character Backward Shooting/1-61.png","Animations/Character Backward Shooting/1-62.png","Animations/Character Backward Shooting/1-63.png","Animations/Character Backward Shooting/1-64.png","Animations/Character Backward Shooting/1-65.png","Animations/Character Backward Shooting/1-66.png","Animations/Character Backward Shooting/1-67.png", "Animations/Character Backward Shooting/1-68.png", "Animations/Character Backward Shooting/1-69.png", "Animations/Character Backward Shooting/1-70.png", "Animations/Character Backward Shooting/1-71.png", "Animations/Character Backward Shooting/1-72.png","Animations/Character Backward Shooting/1-73.png","Animations/Character Backward Shooting/1-74.png","Animations/Character Backward Shooting/1-75.png","Animations/Character Backward Shooting/1-76.png","Animations/Character Backward Shooting/1-77.png","Animations/Character Backward Shooting/1-78.png","Animations/Character Backward Shooting/1-79.png","Animations/Character Backward Shooting/1-80.png","Animations/Character Backward Shooting/1-81.png","Animations/Character Backward Shooting/1-82.png","Animations/Character Backward Shooting/1-83.png","Animations/Character Backward Shooting/1-84.png","Animations/Character Backward Shooting/1-85.png","Animations/Character Backward Shooting/1-86.png","Animations/Character Backward Shooting/1-87.png","Animations/Character Backward Shooting/1-88.png","Animations/Character Backward Shooting/1-89.png","Animations/Character Backward Shooting/1-90.png","Animations/Character Backward Shooting/1-91.png",)
  enemy_img = loadAnimation("Animations/NPC Walking Forward/1.png")
  enemy_backImg = loadAnimation("Animations/NPC Walking Backward/1.png")
  enemy_walkForward = loadAnimation("Animations/NPC Walking Forward/1.png","Animations/NPC Walking Forward/2.png","Animations/NPC Walking Forward/3.png")
  
}


function setup() {
  createCanvas(1400,800);
  bg = createSprite(700,400,1400,800);
  bg.addImage(bg_img);
  bg.scale = 0.3
  lvl1_animation = createSprite(700, 400, 1200, 800);
  storyImg = createSprite(700, 400, 1200, 800);
  storyImg.scale = 0.7
  play = createSprite(685, 550, 220, 50);
  story = createSprite(685, 710, 220, 50);
  play.visible = false
  story.visible = false
  lvl1_animation.visible = false
  lvl1_animation.addAnimation("lvl1", lvl1_img)
  character = createSprite(700, 660, 50, 50);
  character.setCollider("rectangle", 0,0,40,50);
  //character.debug = true//
  character.addAnimation("characterB", character_backImg);
  character.addAnimation("character", character_img);
  character.addAnimation("character_forward", character_walkForward);
  character.addAnimation("character_backward", character_walkBackward);
  character.addAnimation("character_forwardShoot", character_shootForward);
  character.addAnimation("character_backwardShoot", character_shootBackward);
  character.scale = 2.3
  character.visible = false
  storyImg.addImage("story", storyPg)
  storyImg.visible = false

  enemyGroup = new Group() 

}

function draw() {
  background("white");
 
  
  if(mousePressedOver(play)){
    gameState = "level1"
    bg.visible = false
    lvl1_animation.visible = true
    lvl1_animation.scale = 2.5
    character.visible = true
    console.log("Level 1");
  }

  if(mousePressedOver(story)){
    gameState = "story"
    bg.visible = false
    lvl1_animation.visible = false
    storyImg.visible = true
    lvl1_animation.scale = 2.5
    character.visible = false
    enemyGroup.visible = false
    console.log("Story");
  }

  if(gameState = "level1"){

  }
  
  

  if(keyDown(RIGHT_ARROW)){
    character.changeAnimation("character_forward", character_walkForward);
    character.velocityX = 6
  }

  if(keyWentUp(RIGHT_ARROW)){
    character.changeAnimation("character", character_img)
    character.velocityX = 0
  }

  
  if(keyDown(LEFT_ARROW)){
    character.changeAnimation("character_backward", character_walkBackward);
    character.velocityX = -6
  }

  if(keyWentUp(LEFT_ARROW)){
    character.changeAnimation("characterB", character_backImg)
    character.velocityX = 0
  }


  if(keyDown(90)){
    character.changeAnimation("character_forwardShoot", character_shootForward)
    character.velocityX = 0
    character.scale = 0.5
    character.setCollider("rectangle", 100,0,590,60);
    
  }


  if(keyWentUp(90)){
    character.changeAnimation("character", character_img)
    character.velocityX = 0
    character.scale = 2.3
    character.setCollider("rectangle", 0,0,40,50);
  }

  
  
  if(keyDown(88)){
    character.changeAnimation("character_backwardShoot", character_shootBackward)
    character.velocityX = 0
    character.scale = 0.5
    character.setCollider("rectangle", -50,0,590,60);
    
  }

  if(keyWentUp(88)){
    character.changeAnimation("characterB", character_backImg)
    character.velocityX = 0
    character.scale = 2.3
    character.setCollider("rectangle", 0,0,40,50);
    
  }

  
  drawSprites();
  createEdgeSprites();
}
/*
function spawnEnemies() {
  //write code here to spawn the enemies
  if (frameCount % 10 === 0) {
    enemy = createSprite(600,660,40,10);
    enemy.x = Math.round(random(80,120));
    enemy.addAnimation("enemy", enemy_img);
    enemy.addAnimation("enemyB", enemy_backImg);
    enemy.scale = 0.5;
    
    //add each cloud to the group
    enemyGroup.add(enemy);
  }
*/
