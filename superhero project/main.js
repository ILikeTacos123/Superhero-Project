var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var block_image_width = 30;
var block_image_height = 30;
var player_object;
var block_object;
var key_pressed;
var heads_array = ["construnction-head.png", "doctor-head.png", "firefighter-head.png", "police-head.png"];
var bodies_array = ["construnction-body.png", "doctor-body.png", "firefighter-body.png", "police-body.png"];
var legs_array = ["construnction-leg.png", "doctor-legs.png", "firefighter-leg.png", "police-leg.png"];
var random_no_1 = Math.floor(Math.random() * 4);
var random_no_2 = Math.floor(Math.random() * 4);
var random_no_3 = Math.floor(Math.random() * 4);

function player_update() {
    fabric.Image.fromURL("stick.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function block_update(get_Image) {
    fabric.Image.fromURL(get_Image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (e.shiftKey == true && key_pressed == "80") {
        console.log("shift and p are pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && key_pressed == "77") {
        console.log("shift and m are pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if (key_pressed == "37") {
        left();
        console.log("left key is pressed");
    }

    if (key_pressed == "38") {
        up();
        console.log("up key is pressed");
    }

    if (key_pressed == "39") {
        right();
        console.log("right key is pressed");
    }

    if (key_pressed == "40") {
        down();
        console.log("down key is pressed");
    }

    if (key_pressed == "70") {
        block_update(heads_array[random_no_1]);
        console.log("f key is pressed");
    }

    if (key_pressed == "66") {
        block_update(bodies_array[random_no_2]);
        console.log("b key is pressed");
    }

    if (key_pressed == "76") {
        block_update(legs_array[random_no_3]);
        console.log("l key is pressed");
    }

}

function up() {

    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {

    if (player_y <= 700) {
        player_y = player_y + block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When down arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {

    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When left arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {

    if (player_x <= 900) {
        player_x = player_x + block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When right arrow is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}