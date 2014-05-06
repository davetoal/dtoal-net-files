

// test drag and throw of divs


var div_top, div_left;

var div_start = { 'top': 0, 'left': 0 };

var move_start = { 'x': 0, 'y': 0 };


var motor_interval;

var motor_rate = 50;

// motor_interval = setInterval, motor_rate


var motor_last_x, motor_last_y;

var motor_dx, motor_dy;


var timer_interval;

var motor_x, motor_y;


var screen_width;
var screen_height;


function init_page() {

  screen_width  = $(document).width();
  screen_height = $(document).height();

  var center_x = screen_width / 2;
  var center_y = screen_height / 2;


  $('body').css( { 'background-color': '#000000' } );


  $('body').append('<div id="motor_debug"></div>');

  $('#motor_debug').css( { 'top': 10, 'left': 0, 'color': '#ddddff', 'font-size': '30px' } );

                            
  $('body').append('<div id="timer_debug"></div>');

  $('#timer_debug').css( { 'top': 40, 'left': 0, 'color': '#ddddff', 'font-size': '30px' } );


  $('#motor_debug').html('motor debug');
  $('#timer_debug').html('timer debug');



  $('body').append('<div id="drag_1"></div>');

  var d = $('#drag_1');


  div_top  = center_y - 100;
  div_left = center_x - 200;

  div_start.top  = div_top;
  div_start.left = div_left;


  var p = { 'position': 'absolute',
            'top': div_top,
            'left': div_left,
            'width': 400,
            'height': 200,
            'padding': 20,
            'font-size': '25px',
            'background-color': '#558855' };

  d.css(p);


  d.on('touchstart', function(e) {

    e.preventDefault();

    touch = e.originalEvent.touches[0];

    move_start.x = touch.pageX;
    move_start.y = touch.pageY;

    d.html('move start x ' + move_start.x + ', y ' + move_start.y);

    div_start.top  = parseInt( d.css('top') );
    div_start.left = parseInt( d.css('left') );

    set_color_red();

    stop_motor();

    motor_last_x = move_start.x;
    motor_last_y = move_start.y;

    motor_x = motor_last_x;
    motor_y = motor_last_y;

    start_timer();

    $('#motor_debug').html('motor debug');
    $('#timer_debug').html('timer debug');

  } );



  d.on('touchmove', function(e) {

    e.preventDefault();

    touch = e.originalEvent.touches[0];

    motor_x = touch.pageX;
    motor_y = touch.pageY;

    var dx = motor_x - move_start.x;
    var dy = motor_y - move_start.y;

    div_top  = div_start.top + dy;
    div_left = div_start.left + dx;

    var d = $('#drag_1');

    d.css( { 'top': div_top, 'left': div_left } );

    d.html('move start x ' + move_start.x + ', y ' + move_start.y);
    d.append('<br>dx ' + dx + ', dy ' + dy);
    d.append('<br>top ' + div_top + ', left ' + div_left);
    d.append('<br>pageX ' + touch.pageX + ', pageY ' + touch.pageY);

    set_color_blue();

  } );



  d.on('touchend', function(e) {

    e.preventDefault();

    touch = e.originalEvent.touches[0];


    var d = $('#drag_1');

    d.html('');

    set_color_green()

    // if dx or dy, set color purple


    stop_timer();

    start_motor();

  } );


}



function set_color_red() {

  var d = $('#drag_1');

  d.css( { 'background-color': '#885555' } );

}



function set_color_blue() {

  var d = $('#drag_1');

  d.css( { 'background-color': '#555588' } );

}



function set_color_green() {

  var d = $('#drag_1');

  d.css( { 'background-color': '#558855' } );

}



function set_color_purple() {

  var d = $('#drag_1');

  d.css( { 'background-color': '#885588' } );

}



function start_motor() {

  $('#motor_debug').html('start motor');

  motor_interval = setInterval(function() { movediv(); }, motor_rate);

}



function stop_motor() {

  $('#motor_debug').html('motor done');

  clearInterval(motor_interval);

}



function start_timer() {

  $('#timer_debug').html('start timer');

  timer_interval = setInterval(function() { timediv(); }, motor_rate);

}



function stop_timer() {
  
  $('#timer_debug').html('timer done');

  clearInterval(timer_interval);

}



function movediv() {

  // every motor_interval, move div by motor_dx, motor_dy
  // friction, gravity

  var d = $('#drag_1');


  // bounce

  var tx = parseInt( d.css('left') ) + motor_dx;
  var ty = parseInt( d.css('top') )  + motor_dy;

  if ( (tx < 0) 
    || ( ( tx + 400 + 40 ) > screen_width)
     ) { motor_dx = motor_dx * -1; }

  if ( (ty < 0) 
    || ( ( ty + 200 + 40 ) > screen_height)
     ) { motor_dy = motor_dy * -1; }


  d.css( { 'left': '+=' + motor_dx,
           'top':  '+=' + motor_dy } )

  d.html('div top is '    + d.css('top') );
  d.append('<br>div left is ' + d.css('left') );


  motor_dx = motor_dx * 0.97;
  motor_dy = motor_dy * 0.97;

  if ( Math.abs(motor_dx) < 0.01 ) { motor_dx = 0; }
  if ( Math.abs(motor_dy) < 0.01 ) { motor_dy = 0; }

  $('#motor_debug').html('motor dx is ' + motor_dx + ', dy is ' + motor_dy);


  if ( ( motor_dx == 0 ) && ( motor_dy == 0 ) ) { 
    stop_motor(); 
  }


}



function timediv() {

  // get last and current positions while touchmove
  // update motor_dx, motor_dy

  var current_x = motor_x;
  var current_y = motor_y;

  motor_dx = current_x - motor_last_x;
  motor_dy = current_y - motor_last_y;

  motor_last_x = current_x;
  motor_last_y = current_y;

  $('#timer_debug').html('motor dx is ' + motor_dx + ', dy is ' + motor_dy);

}



