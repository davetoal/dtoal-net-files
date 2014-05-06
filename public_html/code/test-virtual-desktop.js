

// positions on each div, workspace switcher row of buttons, move all divs by +x or -x, +y or -y

function div_info() {

  var div_id, x, y, width, height, vx, vy, background_color, url, interval;

}



var global_div_list = [];
var global_div_counter = 0;


// fill up a huge area with random divs, width of screen x 3 high and 7 wide

var current_workspace_x = 3;
var current_workspace_y = 1;
// from 0

var workspace_max_x = 20;
var workspace_max_y = 20;

// how large can this be?  mouse drag to scroll around?

var global_workspace_width  = getWidth()  * workspace_max_x;
var global_workspace_height = getHeight() * workspace_max_y;



$('body').append('<div id="background_div" style="position: fixed; overflow: auto; overflow-x: hidden;"></div>');



function screen_div() {

  var d = new div_info();

  d.x = ( Math.floor(Math.random() * global_workspace_width) )  - ( current_workspace_x * getWidth() );
  d.y = ( Math.floor(Math.random() * global_workspace_height) ) - ( current_workspace_y * getHeight() );

  d.div_id = 'div' + global_div_counter;
  global_div_counter++;

  d.width  = 100 + ( Math.floor(Math.random() * 300) );
  d.height = 100 + ( Math.floor(Math.random() * 200) );

  d.vx = 0;
  d.vy = 0;

  if (true) {

    $('#background_div').append('<div id="' + d.div_id + '" style="position: absolute; top: ' + d.y + 'px; left: ' + d.x + 'px; width: ' + d.width + 'px; height: ' + d.height + 'px; background-color: #e0e0e0; border: 1px black solid; border-radius: 30px;"> &nbsp; </div>');

  }

}



function div_inside_screen(d) {

  if ( (d.x > 0) && (d.x < getWidth())
    && (d.y > 0) && (d.y < getHeight()) ) { return true; }

}



// a div of workspace switcher icon buttons

function add_button_div() {

  var top = getHeight() - 200;
  var left = getWidth() - 200;

  $('body').append('<div id="button_div" style="position: fixed; top: ' + top + 'px; left: ' + left + 'px; height: 160px; width; 150px; padding: 2px; background-color: #606060; border-radius: 35px;"></div>');

  // onclick = move_to(x, y)

  // onclick = move(dx, dy);

  // scrolling window, body window?  

  $('#button_div').append('<table id="button_table">');

  for (var row = 0; row < 3; row++) {

    $('#button_div').append('<tr>');

    for (var col = 0; col < 3; col++) {

      var div_id = 'button_' + row + '_' + col;

      $('#button_div').append('<td><div id="' + div_id + '" style="height: 1px; width; 50px; margin: 0px; padding: 25px; background-color: #a0a0a0; border-radius: 25px; border: 1px #e0e0e0 solid" ></div></td>');

      // $('#' + div_id).bind('mouseover', function(e) { set_color_light(div_id); }).bind('mouseleave', function(e) { set_color_dark(div_id); });
      // this gets _2_2 for all of them, wtf

      bind_events(div_id);

    }

    $('#button_div').append('</tr>');

  }

  $('#button_div').append('</table>');


  var b = $('#background_div');


  $('#button_0_0').click(function() { b.css('left', '+=100'); } );

  // $('#button_0_1').click(function() { b.animate({"scrollTop": b[0].scrollTop() - getHeight() * 0.5}, 250); } );
  // $('#button_2_1').click(function() { b.animate({"scrollTop": b[0].scrollTop() + getHeight() * 0.5}, 250); } );

  // $('#button_1_0').click(function() { b.animate({"scrollLeft": b[0].scrollLeft() - getWidth() * 0.5}, 250); } );
  // $('#button_1_2').click(function() { b.animate({"scrollLeft": b[0].scrollLeft() + getWidth() * 0.5}, 250); } );

}



function bind_events(div_id) {

  $('#' + div_id).bind('mouseover', function(e) { set_color_light(div_id); }).bind('mouseleave', function(e) { set_color_dark(div_id); });

}



function set_color_light(div_id) { $('#' + div_id).css('background', '#b0b0b0'); } 

function set_color_dark(div_id)  { $('#' + div_id).css('background', '#a0a0a0'); }



function add_divs() {

  for (var i = 0; i < 3000; i++) {

    var d = new screen_div();

    global_div_list.push(d);

  }

}


add_divs();

add_button_div();



function draw_screen() {

  add_divs();

  add_button_div();

}


// setInterval draw_screen();

// process_divs adds 1 to all divs, moves some in random direction, ?



function move_nw() {

  console.log('move nw');

}




function move_to(x, y) {

  // update the positions of all the divs

  // the ones that have positions from 0 to width will show up

  // the ones with positions < 0 and > width, don't get set visible maybe?  or not.

  //  there are divs to the left for 3 screen widths, divs above to 1 * screen width

  // all of them get moved, as far as i have to go

  //  dx, dy

  //  distance, number of moves for that distance.  distance per move, same number of moves, or not.

  //  angle.  dx / moves, dy / moves

  // update positions of all divs by that, set interval with counter down from number of moves

}



function getWidth() {

    xWidth = 1921;

    if(window.screen != null)
      xWidth = window.screen.availWidth;

    if(window.innerWidth != null)
      xWidth = window.innerWidth;

    if(document.body != null)
      xWidth = document.body.clientWidth;

    return xWidth;

}


function getHeight() {

    xHeight = 900;

    if(window.screen != null)
      xHeight = window.screen.availHeight;

    if(window.innerHeight != null)
      xHeight = window.innerHeight;

    if(document.body != null)
      xHeight = document.body.clientHeight;

    return xHeight;

}


