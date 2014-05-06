

// test drag and throw of divs


var div_top, div_left;

var div_start = { 'top': 0, 'left': 0 };

var move_start = { 'x': 0, 'y': 0 };



function init_page() {

  var screen_width = $(document).width();
  var screen_height = $(document).height();

  var center_x = screen_width / 2;
  var center_y = screen_height / 2;


  $('body').css( { 'background-color': '#000000' } );


  $('body').append('<div id="drag_1"></div>');

  var d = $('#drag_1');


  div_top = center_y - 200;
  div_left = center_x - 200;

  div_start.top = div_top;
  div_start.left = div_left;


  var p = { 'position': 'absolute',
            'top': div_top,
            'left': div_left,
            'width': 400,
            'height': 400,
            'background-color': '#558855' };

  d.css(p);


  d.on('touchstart', function(e) {

    e.preventDefault();

    touch = e.originalEvent.touches[0];

    move_start.x = touch.pageX;
    move_start.y = touch.pageY;

    d.html('<br><h2><center>move start x ' + move_start.x + ', y ' + move_start.y + '</center></h1>');

    set_color_red();

  } );



  d.on('touchmove', function(e) {

    e.preventDefault();

    touch = e.originalEvent.touches[0];

    var dx = touch.pageX - move_start.x;
    var dy = touch.pageY - move_start.y;

    div_top = div_start.top + dy;
    div_left = div_start.left + dx;

    var d = $('#drag_1');

    d.css( { 'top': div_top, 'left': div_left } );

    d.html('<br><h2><center>move_start x ' + move_start.x + ', y ' + move_start.y + '</center></h1>');
    d.append('<h2><center>dx ' + dx + ', dy ' + dy + '</center></h2>');
    d.append('<h2><center>top ' + div_top + ', left ' + div_left + '</center></h2>');
    d.append('<h2><center>pageX ' + touch.pageX + ', pageY ' + touch.pageY + '</center></h2>');

    set_color_blue();

  } );



  d.on('touchend', function(e) {

    e.preventDefault();

    var d = $('#drag_1');

    d.html('');

    div_start.top = div_top;
    div_start.left = div_left;

    set_color_green()

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


