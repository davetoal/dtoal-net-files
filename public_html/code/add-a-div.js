

function load_page() {

  $('body').append('<br><p>append a div<br><br><input type="button" value="append a div" onclick="append_div();">  <input type="button" value="toggle gravity" onclick="toggle_global_attract();"><br><br><a href="http://jsbin.com/otipiv/1/edit">physics engine</a> <a href="http://dtoal.net/code/test-physics-engine.html">local copy</a>');

  $('body').append('<div id="output_div"></div>');

}



var global_intervals = {};

var c = {};

global_intervals.counter = c;


var global_div_info = {};



var global_div_number = 0;

var global_div_x = 100;
var global_div_y = 100;


var global_width = getWidth();
var global_height = getHeight();


var div_count = 0;


var global_attract = -1;



function toggle_global_attract() {

  global_attract = global_attract * -1;

}



function div_info() {

  var x;
  var y;

  var width;
  var height;

  var vx;
  var vy;

  var div_id;

  var max_count;

}



function append_div() {

  var x = global_div_x;
  global_div_x += 10;

  var y = global_div_y;
  // global_div_y++;

  var width = 20;
  var height = 20;

  var background_color = '#e0e0e0';

  var vx = 10;
  var vy = 10;

  var max_count = 100000;

  var delay = 10;

  var div_id = 'div' + global_div_number;

  global_div_number++;


  var info = new div_info();

  info.x = x;
  info.y = y;

  info.vx = vx;
  info.vy = vy;

  info.width = width;
  info.height = height;

  info.background_color = background_color;

  info.max_count = max_count;

  global_div_info[div_id] = info;


  append_a_div(div_id);

  div_count++;
  $('#output_div').html(div_count);


  var div_interval = setInterval( 'process_div(' + div_id + ')', delay );

  global_intervals[div_id] = div_interval;

  global_intervals.counter[div_id] = 0;

}



function append_a_div(div_id) {

  console.log('append a div, div_id is ' + div_id);

  $('body').append('<div id="' + div_id + '" style="border: 1px black solid; border-radius: 10px; margin: 2px; width: 200; height: 150; float: left; background-color: #e0e0e0"><p> <iframe id="iframe" src="http://dtoal.net" width="200" height="150" frameborder="1"></iframe> </div>');

}



function process_div(div_id) {

  // console.log('process div ' + div_id.id);
  // console.dir(div_id);

  var i = global_div_info[div_id.id];

  // list all other divs, compare distance with all of them
  // add all forces to vx and vy before getting tx

  for (var d in global_div_info) {

    var other_div = global_div_info[d];

    // console.log('process div, other div is ' + d);

    if (d != div_id.id) {

      var dx = i.x - other_div.x;

      if (Math.abs(dx) < 20) {
        if (dx < 0) { 
          dx = -20;
        } else {
          dx = 20;
        }
      }

      var dy = i.y - other_div.y;

      if (Math.abs(dy) < 20) {
        if (dy < 0) {
          dy = -20;
        } else {
          dy = 20;
        }
      }

      var distance = Math.sqrt((dx * dx) + (dy * dy));

      var inverse = (1 / distance);

      var fx = inverse * (dx / 8) * global_attract;
      var fy = inverse * (dy / 8) * global_attract;

      if (fx >  5) fx =  5;
      if (fx < -5) fx = -5;
      if (fy >  5) fy =  5;
      if (fy < -5) fy = -5;

      i.vx = i.vx + fx;
      i.vy = i.vy + fy;

      if (Math.abs(i.vx) > 5) i.vx = i.vx * 0.97;
      if (Math.abs(i.vy) > 5) i.vy = i.vy * 0.97;

    }

  }

  
  var tx = i.x + i.vx;
  var ty = i.y + i.vy;

  // if tx ty collides with anything on any side
  // x - width/2, x + width/2

  if (tx < 0) {
    tx = 0;
    i.vx = -1 * i.vx;
  }

  if (tx > global_width) {
    tx = global_width;
    i.vx = -1 * i.vx;
  }

  if (ty < 0) {
    ty = 0;
    i.vy = -1 * i.vy;
  }

  if (ty > global_height) {
    ty = global_height;
    i.vy = -1 * i.vy;
  }


  // console.log('process div ' + div_id.id + ', tx is ' + tx + ', ty is ' + ty);

  $('#' + div_id.id).offset({ top: ty, left: tx });

  i.x = tx;
  i.y = ty;

  global_intervals.counter[div_id.id]++;

  if (global_intervals.counter[div_id.id] > global_div_info[div_id.id].max_count) {

    clearInterval(global_intervals[div_id.id]);

    // delete div ?
    console.log('process div ' + div_id.id + ', clear interval');

  }

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


