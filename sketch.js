var canvas,backgroundImage,bandit,knight,bandit2,bandit3,boss;
var banditImg,bandit2Img,bandit3Img,bossImg,knightImg,bgImg;
var ground,score=0
function preload(){
    banditImg = loadImage("Images/bandit.png");
    bandit2Img = loadImage("Images/bandit2.png");
    bandit3Img = loadImage("Images/bandit3.png");
    bossImg = loadImage("Images/boss.png");
    knightImg = loadImage("Images/knight.png");
    bgImg = loadImage("Images/bg.png");

}

function setup(){
    createCanvas(1200,800);
    var knight = createSprite(900,590,10,10);
    knight.addAnimation("knight",knightImg);
    knight.scale = 0.4
    var bandit = createSprite(150,600,50,50);
    bandit.addImage(banditImg);
    var bandit2 = createSprite(400,600,50,50);
    bandit2.addImage(bandit2Img);
    var bandit3 = createSprite(600,600,50,50);
    bandit3.addImage(bandit3Img);
    knight.setCollider("circle",0,0,200);
    knight.debug = false
    knight.velocityX = -1;
    if(knight.isTouching(bandit)){
        bandit.destroy();
    }
    ground = createSprite(600,700,1200,20);
    ground.shapeColor = "green";
}

function draw(){
    background(bgImg);
    fill("black");
    text("Score: "+ score,100,100);
    /*if(knight.isTouching(bandit)){
        bandit.destroy();
        score = score+10;
    }
    if(knight.isTouching(bandit2)){
        bandit2.destroy();
        score = score+20;
    }
    if(knight.isTouching(bandit3)){
        bandit3.destroy();
        score = score+30;
    }*/

    drawSprites();
}