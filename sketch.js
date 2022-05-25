var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();


}


function draw(){
  background("pink");

}
