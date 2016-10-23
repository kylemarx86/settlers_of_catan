$(document).ready(function(){
    initializeBoard();
});

var tileSet = {
    deserts : null,
    forests: null,
    pastures: null,
    fields: null,
    hills: null,
    mountains: null
//   deserts : 1,
//   forests: 4,
//   pastures: 4,
//   fields: 4,
//   hills: 3,
//   mountains: 3
}

tileSet.initializeTiles = function(){
    this.deserts = 1;
    this.forests = 4;
    this.pastures = 4;
    this.fields = 4;
    this.hills = 3;
    this.mountains = 3;
}

tileSet.tilesLeft = function(){
    var tilesLeft = this.deserts
        + this.forests
        + this.pastures
        + this.fields
        + this.hills
        + this.mountains;
    return tilesLeft;
}



function randomizeBoard(){
    var tileArray = [];
    var randomTileArray = [];
    tileSet.initializeTiles();
//   console.log(tileSet.tilesLeft());

//   fill tileArray with
    while(tileSet.deserts > 0){
        tileArray.push('desert');
        tileSet.deserts--;
    }
    while(tileSet.forests > 0){
        tileArray.push('forest');
        tileSet.forests--;
    }
    while(tileSet.pastures > 0){
        tileArray.push('pasture');
        tileSet.pastures--;
    }
    while(tileSet.fields > 0){
        tileArray.push('field');
        tileSet.fields--;
    }
    while(tileSet.hills > 0){
        tileArray.push('hill');
        tileSet.hills--;
    }
    while(tileSet.mountains > 0){
        tileArray.push('mountain');
        tileSet.mountains--;
    }

    while(tileArray.length > 0){
        var tileIndex = Math.floor(Math.random() * tileArray.length);
        randomTileArray.push(tileArray[tileIndex]);
        tileArray.splice(tileIndex, 1);
    }


//   console.log(tileSet.tilesLeft());
    console.log(tileArray);
    console.log(randomTileArray);
}

// console.log(tileSet.tilesLeft());

randomizeBoard();



//function headers
// var make_hex;
// var draw_row;
//var draw;

var hex_radius = 30;

var orig_x = 142;
var orig_y = hex_radius * Math.sin(60) + 64;

var hexes_in_row;
var h_dist_to_next_hex = 2 * hex_radius * Math.cos(30);
var v_dist_to_next_hex = hex_radius + hex_radius * Math.sin(30);


//this function draws a single perfect hexagon at a location given the center
function make_hex(center_x, center_y) {
    //
    // beginShape();
    // for(var i = 0; i <= 6; i++){
    //
    //     vertex(hex_radius*Math.cos(60*i + 30) + center_x,
    //         hex_radius*Math.sin(60*i + 30) + center_y);
    // }
    // endShape();

    var gameArea = $('#game_body');
    // var g = $('#game_body');
    var g = gameArea.getContext("2d");

    g.beginPath();
    g.strokeStyle = 'black';
    g.lineWidth = '1';

    for(var i = 0; i <= 6; i++){
        g.moveto(hex_radius*Math.cos(60*i + 30) + center_x,
            hex_radius*Math.sin(60*i + 30) + center_y);
        g.lineTo(hex_radius*Math.cos(60*(i+1) + 30) + center_x,
            hex_radius*Math.sin(60*(i+1) + 30) + center_y);
        g.stroke();
    }

}



//draws a row of hexes based on the number of hexes to be drawn
function draw_row(hexes_in_row){
    for(var j = 0; j < hexes_in_row; j++){
        make_hex(orig_x + h_dist_to_next_hex * j, orig_y);
    }
}


function initializeBoard(){
    draw_row(1);
}

