var background, background_img;
var states = "1";

function preload(){
background_img = loadImage("imgs/battle test.png");
}

function setup(){

}

function draw(){
    createCanvas(displayWidth, displayHeight);
    if (state == "1"){
        background(background_img);
    }
    if (keyIsDown ("49")){
        state = "2";
    }
    if (state = "2"){
        s2()
    }
}

function s2(){
background("white");
}