

// http://dtoal.net/code/test-div-z-index.js


// is there anything else you can take out of the html file?




var intervals = {};
var counter = {};
var z = {};


function init_page() {

  var screen_width = $(window).width();
  var screen_height = $(window).height();

  var ipd = 430;
  var convergence_angle = 0.055;

  $('body').append('test div z index, IPD 430px, convergence 0.055');


  var offset = screen_width / 2 - ( ipd / 2 );

  var midleft = offset;
  var midright = offset + ipd;

  add_ball('ball_tl', midleft,  100, 0, 100, 100);
  add_ball('ball_tr', midright, 100, 0, 100, 100);

  add_ball('ball_bl', midleft,  screen_height - 100, 0, 100, 100);
  add_ball('ball_br', midright, screen_height - 100, 0, 100, 100);


  for (var i = -60; i < 120; i += 30) {

    var px = i * 2;
    var py = 400;
    var pz = i * 3;

    var p_id_left  = 'ball_' + i + 'l';
    var p_id_right = 'ball_' + i + 'r';

    var px_left  = midleft  + ( px - ( pz * convergence_angle ) );
    var px_right = midright + ( px + ( pz * convergence_angle ) );

    add_ball(p_id_left,  px_left,  py, pz, 200, 200, '#aaffaa');
    add_ball(p_id_right, px_right, py, pz, 200, 200, '#aaffaa');

    start_ball(p_id_left);
    start_ball(p_id_right);

  }

 
}



function add_ball(div_id, px, py, pz, width, height, color) {

  z[div_id] = pz;

  if (color == null) { color = '#2020ff'; }


  var z_distance = Math.abs( -1000 - z[div_id] );

  var z_distance_effect;

  if (z_distance == 0) {
    z_distance_effect = 1;
  } else {
    z_distance_effect = 1 / ( z_distance / 200 );
  }

  var width_at_z  = width * z_distance_effect;
  var height_at_z = height * z_distance_effect;

  var border_at_z = 50 * z_distance_effect;


  $('body').append('<div id="' + div_id + '"></div>');

  var b = $('#' + div_id);

  b.css( { 'position': 'absolute',
           'left': px,
           'top': py,
           'z-index': pz * -1,
           'width': width_at_z,
           'height': height_at_z,
           'border-radius': width,
           'background-color': color,
           'border-color': '#ff0000',
           'border-top': '#6060ff',
           'border': border_at_z + 'px solid #222222' } );

}



function start_ball(div_id) {

  intervals[div_id] = setInterval(function() { move_ball(div_id); }, 50);

  counter[div_id] = 0;

}



function stop_ball(div_id) {

  clearInterval(intervals[div_id]);

  console.log(div_id + ', stopped');

}



function move_ball(div_id) {

  if (counter[div_id] == 1000) {
    stop_ball(div_id);
    $('#' + div_id).remove();
    return;
  }

  counter[div_id]++;


  var y_velocity = 30;

  var z_distance = -1 * ( -1000 - z[div_id] );

  var z_distance_effect;

  if (z_distance == 0) {
    z_distance_effect = 1;
  } else {
    z_distance_effect = 1 / ( z_distance / 200 );
  }

  var vy_at_z = y_velocity * z_distance_effect;


  var py = $('#' + div_id).offset().top;

  py = py + vy_at_z;


  $('#' + div_id).css( { 'top': py } );

}


