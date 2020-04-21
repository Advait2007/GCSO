var zenia,taurus,cyclap;
var wall;
var zeniaWeight,zeniaSpeed;
var taurusWeight,taurusSpeed;
var cyclapWeight,cyclapSpeed;

function setup() { 
    createCanvas(1600,800); 

    zenia=createSprite(100, 200, 50, 50);
    taurus=createSprite(100, 400, 50, 50);
    cyclap=createSprite(100, 600, 50, 50);

    zeniaWeight = 2260;
    zeniaSpeed = 60;

    taurusWeight = 1522;
    taurusSpeed = 50;

    cyclapWeight = 3000;
    cyclapSpeed = 45;
    
    wall=createSprite(1550, 1600, 10, 5000);
    zenia.shapeColor="white";
    taurus.shapeColor="white";
    cyclap.shapeColor="white";

    wall.shapeColor="black";
   } 
  
   function getDeformation(weight,speed) {
    return (0.5*weight*speed*speed)/22500;
   }

   function getDeformedColor(weight,speed){
    var deformation = getDeformation(weight,speed);
    if(deformation<100){
     return color(0,255,0);
    }else if(deformation>=100 && deformation<180){
     return color(230,230,0);
    }else{
     return color(255,0,0);
    } 
}

  function setZeniaColor(){
    zenia.position.x=100;
    zenia.shapeColor =  getDeformedColor(zeniaWeight,zeniaSpeed);
  }   

  function setTaurasColor(){
    taurus.position.x=100;
    taurus.shapeColor =  getDeformedColor(taurusWeight,taurusSpeed);
  } 

  function setCyclapColor(){
    cyclap.position.x=100;
    cyclap.shapeColor =  getDeformedColor(cyclapWeight,cyclapSpeed);
  } 

   function draw() {
    background(80,80,80);
   
     zenia.velocity.x= zeniaSpeed;
     zenia.collide ( wall, setZeniaColor);

     taurus.velocity.x= zeniaSpeed;
     taurus.collide ( wall, setTaurasColor);
     
    cyclap.velocity.x= zeniaSpeed;
     cyclap.collide ( wall, setCyclapColor);
     
     zenia.velocity.x = zeniaSpeed;
     taurus.velocity.x = taurusSpeed;
     cyclap.velocity.x = cyclapSpeed;

     drawSprites(); 
 }
