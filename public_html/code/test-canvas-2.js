

// recursive I shape


var screen_width = $(window).width();
var screen_height = $(window).height();

var center_x = screen_width / 2;
var center_y = screen_height / 2;


function init_page() {

  console.log(screen_width + ' x ' + screen_height);

  var center_x = screen_width / 2;
  var center_y = screen_height / 2;

  $('body').append('<canvas id="canvas" width="' + screen_width + '" height="' + screen_height + '"></canvas>');


  var c = $('#canvas')[0].getContext("2d");


  /*
  c.beginPath();
  c.arc(75, 75, 20, 0, Math.PI*2, true); 
  c.closePath();
  c.fill();
  */

  // draw_line(c, center_x, center_y, 'horizontal', 600, 0);
  // draw_line(c, center_x, center_y, 'horizontal', 900, 0);

  var interval = setInterval( function() { draw(c) }, 50 );

}


var start_length = 60;


function draw(c) {

  c.clearRect(0, 0, screen_width, screen_height);

  draw_line(c, center_x, center_y, 'horizontal', start_length, 0);

  start_length += 2;

}



function draw_line(c, x, y, type, length, count) {

  // start at x, y
  // horizontal or vertical
  //  x or y, + and -, length / 2
  // start another one at each end if count < maxcount

  var max_count = 12;

  if (count == max_count) { return; }
  count++;


  var max_width = 30;
  var my_width = max_width - ( count * 3 );
  if (my_width < 1) { my_width = 1; }

  var half_of_width  = my_width / 2;
  var half_of_length = length / 2;

  var amount_retained = 0.70;
  var length_of_child = length * amount_retained;

  var opacity = 1 - ( count * 0.03 );
  // var opacity = 1;


  if (type == 'horizontal') {

    var left_x  = x - half_of_length;
    var right_x = x + half_of_length;

    var top_y    = y - half_of_width;
    var bottom_y = y + half_of_width;

  } else {

    var left_x  = x - half_of_width;
    var right_x = x + half_of_width;

    var top_y    = y - half_of_length;
    var bottom_y = y + half_of_length;

  }


  var bar_width  = right_x - left_x;
  var bar_height = bottom_y - top_y;

  c.fillStyle = "rgba(0, 0, 0, " + opacity + ")";
  c.beginPath();
  c.rect(left_x, top_y, bar_width, bar_height);
  c.closePath();
  c.fill();


  if (type == 'horizontal') {

    draw_line(c, left_x,  y, 'vertical', length_of_child, count);
    draw_line(c, right_x, y, 'vertical', length_of_child, count);

  } else {

    draw_line(c, x, top_y,    'horizontal', length_of_child, count);
    draw_line(c, x, bottom_y, 'horizontal', length_of_child, count);

  }

}


// http://billmill.org/static/canvastutorial/ball.html

