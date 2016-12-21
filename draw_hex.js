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

    // var gameArea = $('#game_body');
    var g = $('#game_body');
    // var g = gameArea.getContext("2d");

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

//will draw one row of hexes
draw_row(1);