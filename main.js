canvas=new fabric.Canvas('myCanvas');

block_width=30;
block_height=30;

player_x=10;
player_y=10;

player_object="";

function player_update(){

fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    
    });
canvas.add(player_object);
});

}

function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
       block_img_object.scaleToWidth(block_width);
       block_img_object.scaleToHeight(block_height);
        block_img_object.set({
        top:player_y,
        left:player_x
        
        });
    canvas.add(block_img_object);
    });
    
    }
window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
console.log(e);
key_pressed=e.keyCode;
console.log(key_pressed);

if(key_pressed=='70'){
    new_image("ironman_face.png");
    console.log('f');
}

if(key_pressed=='66'){
    new_image("spiderman_body.png");
    console.log('b');
}

if(key_pressed=='76'){
    new_image("hulk_legs.png");
    console.log('l');
}

if(key_pressed=='82'){
    new_image("thor_right_hand.png");
    console.log('r');
}

if(key_pressed=='72'){
    new_image("captain_america_left_hand.png");
    console.log('h');
}



if(e.shiftKey==true && key_pressed=='80'){

    block_width= block_width +10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
   
}

if(e.shiftKey==true && key_pressed=='77'){

    block_width= block_width -10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
   
}

if(key_pressed=='38'){

    up();
    console.log("up");
}

if(key_pressed=='40'){

    down();
    console.log("down");
}

if(key_pressed=='37'){

    left();
    console.log("left");
}

if(key_pressed=='39'){

    right();
    console.log("right");
}
}

function up(){

    if(player_y>=0){

    player_y=player_y-block_height;
    console.log("Block height"+block_height);
    console.log("player_x"+player_x+"player_y"+player_y);
    canvas.remove(player_object);
    player_update();

    }
}

function down(){

    if(player_y<=500){

    player_y=player_y+block_height;
    console.log("Block height"+block_height);
    console.log("player_x"+player_x+"player_y"+player_y);
    canvas.remove(player_object);
    player_update();

    }
}

function left(){

    if(player_x>=0){

    player_x=player_x-block_width;
    console.log("Block width"+block_width);
    console.log("player_x"+player_x+"player_y"+player_y);
    canvas.remove(player_object);
    player_update();

    }
}

function right(){

    if(player_x<=850){

    player_x=player_x+block_width;
    console.log("Block width"+block_width);
    console.log("player_x"+player_x+"player_y"+player_y);
    canvas.remove(player_object);
    player_update();

    }
}