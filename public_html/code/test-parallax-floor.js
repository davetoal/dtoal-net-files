


// parallax scrolling of rows of images, 3d grid effect?
// size, spacing, movement ratio


// test drag and throw of divs


var div_top, div_left;

var div_start = { 'top': 0, 'left': 0 };

var move_start = { 'x': 0, 'y': 0 };



var screen_width;
var screen_height;


var dot_css = [];
var spacer_container_css = [];
var spacer_css = [];

var move_at_z = [];

var row_top = [];
var row_left = [];
var row_current_left = [];

var canvas_state = "showing";

var drag_handle_color = "green";

var canvas_button_toggle_color;
var canvas_button_toggle_shadow;




function init_page() {

  screen_width = $(window).width();
  screen_height = $(window).height();

  var center_x = screen_width / 2;
  var center_y = screen_height / 2;


  $('body').css( { 'background-color': '#000000' } );


  $('body').append('<canvas id="canvas" width="' + screen_width + '" height="' + screen_height + '"></canvas>');

  var c = $('#canvas')[0].getContext("2d");


  // the window is only as wide as the right side.  
  // set something at left = center + half of row


  var dot_size = 50;
  var dot_spacing = 200;

  var num_rows = 5;

  var row_max = 7;

  var row_start_top = screen_height - 50;
  var half_of_row = ( dot_size + ( row_max * ( dot_spacing + dot_size ) ) ) / 2;

  var previous_top_at_z = row_start_top;


  console.log('row start top ' + row_start_top);

  // rows at y, height and size and movement ratio, z distance effect

  for (var i = 1; i < num_rows; i++) {

    var z_distance = i * dot_spacing;
    var z_distance_effect;

    if (z_distance == 0) {
      z_distance_effect = 1;
    } else {
      z_distance_effect = 1 / ( z_distance / 200 );
    }


    var movement_ratio = z_distance_effect;

    move_at_z[i] = movement_ratio;


    // var top_at_z        = row_start_top - ( z_distance * 2 );

    var size_at_z       = dot_size * z_distance_effect;
    var spacing_at_z    = dot_spacing * z_distance_effect;
    var left_start_at_z = center_x - ( half_of_row * z_distance_effect );
    var top_at_z        = previous_top_at_z - ( spacing_at_z * 0.55 );

    previous_top_at_z = top_at_z;


    console.log('top at z ' + top_at_z);
    console.log('size at z ' + size_at_z);
    console.log('spacing at z ' + spacing_at_z);
    console.log('left start at z ' + left_start_at_z);


    var dot_html    = '<div class="dot_'    + i + '"></div>';
    var spacer_html = '<div class="spacer_container_' + i + '"><div class="spacer_' + i + '"></div></div>';


    var row_html = dot_html;

    for (var d = 0; d < row_max; d++) {
      row_html += spacer_html + dot_html;
    } 

    console.log('row html ' + row_html);


    append_row(row_html, i, top_at_z, left_start_at_z, size_at_z, spacing_at_z);

    draw_row(c, row_max, i, top_at_z, left_start_at_z, size_at_z, spacing_at_z);
     
  }
  


  $('body').append('<div id="toggle_button"><center>toggle canvas<center></div>');

  var t = { 'position': 'absolute',
            'top': 10,
            'left': ( screen_width - 190 ),
         // 'width': 190,
         // 'height': 60,
            'padding': 20,
            'border-radius': 10,
            'font-size': '23px',
            'box-shadow': 'inset 0px 0px 20px #000',
            'background-color': '#558888' };

  $('#toggle_button').css(t);

  $('#toggle_button').on('touchstart', function() { toggle_canvas(); } );

  $('#toggle_button').on('touchend', function() { set_toggled_color(); } );



  $('body').append('<div id="drag_1"></div>');

  var d = $('#drag_1');


  div_top  = center_y - 150;
  div_left = center_x - 75;

  div_start.top = div_top;
  div_start.left = div_left;


  var p = { 'position': 'absolute',
            'top': div_top,
            'left': div_left,
            'width': 150,
            'height': 150,
            'border-radius': 80,
            'border-color': '#226622',
            'border': '5px solid #114411',
            'background-color': '#558855' };

  d.css(p);


  d.on('touchstart', function(e) {

    e.preventDefault();

    touch = e.originalEvent.touches[0];

    move_start.x = touch.pageX;
    move_start.y = touch.pageY;

    // d.html('<center>move start x ' + move_start.x + ', y ' + move_start.y + '</center>');

    // add drop shadow glow


    // border 

    d.css( { 'border': '5px solid #9999cc',
             'box-shadow': 'inset 0px 0px 70px #9999cc',
             'box-shadow': '0px 0px 70px #8888ff' } );

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

    /*
    d.html('<br><h2><center>move_start x ' + move_start.x + ', y ' + move_start.y + '</center></h1>');
    d.append('<h2><center>dx ' + dx + ', dy ' + dy + '</center></h2>');
    d.append('<h2><center>top ' + div_top + ', left ' + div_left + '</center></h2>');
    d.append('<h2><center>pageX ' + touch.pageX + ', pageY ' + touch.pageY + '</center></h2>');
    */


    // move each row of the floor

    for (var i = 1; i < num_rows; i++) {

      var r = $('#row_' + i);

      row_current_left[i] = row_left[i] + ( 2 * ( dx * move_at_z[i] ) );

      r.css('left', row_current_left[i]);

    }


    // radius flickers

    // last radius +- random 20

    // d.css( { 'border': '5px solid #bbbbee',
    //          'box-shadow': '0px 0px 100px #6666ff' } );

    set_color_blue();

  } );



  d.on('touchend', function(e) {

    e.preventDefault();

    var d = $('#drag_1');

    // d.html('');

    div_start.top = div_top;
    div_start.left = div_left;



    // set left position of all rows to current left 

    for (var i = 1; i < num_rows; i++) {
      row_left[i] = row_current_left[i];
    }


    d.css( { 'border': '5px solid #114411', 
             'box-shadow': '0px 0px 0px #000' } );

    // animate box shadow to 0
    // d.animate( { 'box-shadow': '0px 0px 0px #000' }, 2000 ); 

    set_color_green()

  } );





  // raise canvas and buttons

  $('#canvas').css( { 'position': 'absolute',
                      'top': 0,
                      'left': 0,
                      'z-index': 999 } );

  d.css('z-index', 1000);

  $('#toggle_button').css('z-index', 1000);

}



function set_color_red() {

  var d = $('#drag_1');

  d.css( { 'background-color': '#885555' } );

  drag_handle_color = "red";

}



function set_color_blue() {

  if (drag_handle_color != "blue") {

    var d = $('#drag_1');

    d.css( { 'background-color': '#555588' } );

    drag_handle_color = "blue";

  }

}



function set_color_green() {

  var d = $('#drag_1');

  d.css( { 'background-color': '#558855' } );

  drag_handle_color = "green";

}



function append_row(row_html, i, top_at_z, left_start_at_z, size_at_z, spacing_at_z) {


  // moved outside the loop for closures


    dot_css[i]    = { 'width': size_at_z,
                      'height': size_at_z,
                      'border-radius': ( size_at_z / 2),
                      'display': 'table-cell',
                      'background-color': '#88aadd' };

    spacer_container_css[i] = { 'width': spacing_at_z,
                                'height': size_at_z,
                                'padding-top': ( ( size_at_z / 2 ) - ( size_at_z / 20 ) ),
                                'display': 'table-cell' };



    spacer_css[i] = { 'width': spacing_at_z,
                      'height': ( size_at_z / 10 ),
                   // 'margin-top': ( ( size_at_z / 2 ) - ( size_at_z / 20 ) ),
                      'display': 'table-cell',
                      'background-color': '#555555' };


    $('body').append('<div id="row_' + i + '">');

    var r = $('#row_' + i);

    r.html(row_html);

    $('.dot_' + i).css(dot_css[i]);
    $('.spacer_container_' + i).css(spacer_container_css[i]);
    $('.spacer_' + i).css(spacer_css[i]);

    r.css( { 'position': 'absolute',
             'top': top_at_z,
             'left': left_start_at_z } );

    row_top[i]  = top_at_z;
    row_left[i] = left_start_at_z;

}



function draw_row(c, row_max, i, top_at_z, left_start_at_z, size_at_z, spacing_at_z) {

  var opacity = 1;

  var radius = size_at_z / 2;


  for (var x = 0; x <= row_max; x++) {

    var px = ( left_start_at_z + ( x * ( spacing_at_z + size_at_z ) ) ) + ( size_at_z / 2 );
    var py = top_at_z + ( size_at_z / 2 );


    // c.fillStyle = "rgba(220, 220, 255, " + opacity + ")";
    c.fillStyle = "rgba(200, 200, 255, 1)";
    c.strokeStyle = "rgba(200, 200, 255, 1)";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(px, py, radius, 0, Math.PI*2, true); 
    c.closePath();
    c.stroke();


    // c.fillStyle = 'rgba(200, 255, 200, ' + opacity + ')';
    c.fillStyle = "rgba(200, 255, 200, 1)";
    c.strokeStyle = "rgba(200, 255, 200, 1)";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(px, py, ( size_at_z / 25 ), 0, Math.PI*2, true);
    c.closePath();
    c.stroke();


  }


}



// on touchstart, button goes all the way down
// on touch end, comes back up to on or off position
// down off, down on

function toggle_canvas() {

  if (canvas_state == 'showing') {

    $('#canvas').hide();
    canvas_state = 'hidden';

    $('#toggle_button').css( { 'background-color': '#336666',
                               'color': '#114444',
                               'box-shadow': 'inset 0px 0px 35px #000' } );

    // set to dark
    canvas_button_toggle_color  = '#447777';
    canvas_button_toggle_text  = '#003333';
    canvas_button_toggle_shadow = 'inset 0px 0px 30px #000';

  } else {

    $('#canvas').show();
    canvas_state = 'showing';

    $('#toggle_button').css( { 'background-color': '#669999',
                               'color': '#88bbbb',
                               'box-shadow': 'inset 0px 0px 45px #000' } );

    // set to light
    canvas_button_toggle_color = '#558888';
    canvas_button_toggle_text  = '#000000';
    canvas_button_toggle_shadow = 'inset 0px 0px 20px #000';

  }

}



function set_toggled_color() {

  $('#toggle_button').css( { 'background-color': canvas_button_toggle_color,
                             'color': canvas_button_toggle_text,
                             'box-shadow': canvas_button_toggle_shadow } );

}










