

// gravity-box.js


// get accelerometer event data

// canvas, create a new object ? every n

// create them on the screen, at p[] 
// or off-screen, above the volume ?

// accelerometer events added to velocity of object

// each one gets event data, ?

// frame draw function gets the accel event data at t
// applies a[] to item[].v[] at t
// draws at p[]

// z distance effect, apparent size is size * 1/( distance / f ), scaling factor

// port zspace to javascript, do the reference by name as objects instead


// add acceleration volumes at random

// region of p where a is n for t 


// canvas to display event data

// interval to draw canvas from global variables



var global_orientation = {};
var global_motion = {};


function init_page() {

  $('body').append( '<div id="orientation_data" style="position: fixed; top: 20; left: 20; font: 18px sans-serif;"> gravity box </div>' );

  $('body').append( '<div id="motion_data" style="position: fixed; top: 100; left: 20; font: 18px sans-serif;"> gravity box </div>' );

  $('body').append('<div style="position: fixed; top: 0; left: 0; height: ' + $(window).height() + '; width: ' + $(window).width() + ';"><canvas id="canvas" width="' + $(window).width() + '" height="' + $(window).height() + '"></canvas></div>');


  window.addEventListener('deviceorientation', function ( event ) {

    display_orientation_data( event );

  } );


  window.addEventListener('devicemotion', function ( event ) {

    display_motion_data( event );

  } );


  setInterval( function() { display_data(); }, 20 );

}



function display_orientation_data( e ) {

  global_orientation = e;

  $('#orientation_data').html('<div>alpha is ' + e.alpha + '</div>'
                            + '<div>beta is '  + e.beta  + '</div>'
                            + '<div>gamma is ' + e.gamma + '</div>');

}



function display_motion_data( e ) {

  global_motion = e;

  $('#motion_data').html('<div>x is ' + e.acceleration.x + '</div>'
                       + '<div>y is ' + e.acceleration.y + '</div>'
                       + '<div>z is ' + e.acceleration.z + '</div>');

}



function display_data() {

  var c = $('#canvas')[0].getContext("2d");

  var px = $(window).width() / 2  - global_motion.acceleration.x * 50;
  var py = $(window).height() / 2 + global_motion.acceleration.y * 50;

  var ox = $(window).width() / 2  + global_orientation.gamma;
  var oy = $(window).height() / 2 + global_orientation.beta;

  c.clearRect( 0, 0, $(window).width(), $(window).height() );

  c.beginPath();
  c.arc( px, py, 20, 0, Math.PI*2, true ); 
  c.closePath();
  c.fill();

  c.beginPath();
  c.arc( ox, oy, 20, 0, Math.PI*2, true );
  c.closePath();
  c.fill();


  
}


