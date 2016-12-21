//a hex object
function hex() {

};

hex.radius = 30;
hex.h_dist_to_next_hex = 2 * hex_radius * Math.cos(30);
hex.v_dist_to_next_hex = hex_radius + hex_radius * Math.sin(30);

//methods available to all hexes
hex.draw_hex = function(context, center_x, center_y){
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