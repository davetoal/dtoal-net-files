

// test-scrolling-inertia.js

// scrolling with timer on touch move, motor on touch end



var touch_move_start = {};

var global = {};

// global.touch_move_start ?

global.lambda = 0.003;




function init_page() {

  $('body').append('<div id="debug" style="position: absolute; top: 0; left: 0;"></div>');


  // scroll to top button, up, down

  $('body').append('<div id="scroll_to_top" style="position: absolute; top: 10px; left: 350px; height: 45px; width: 100px; background-color: #aaaaaa; font-size: 20px; border-radius: 4px;">'
                 + '<center><div style="padding-top: 7px;">top</div></center>'
                 + '</div>');

  $('body').append('<div id="scroll_down" style="position: absolute; top: 10px; left: 475px; height: 45px; width: 45px; background-color: #aaaaaa; font-size: 20px; border-radius: 4px;">'
                 + '<center><div style="padding-top: 7px;">v</div></center>'
                 + '</div>');

  $('body').append('<div id="scroll_up" style="position: absolute; top: 10px; left: 540px; height: 45px; width: 45px; background-color: #aaaaaa; font-size: 20px; border-radius: 4px;">'
                 + '<center><div style="padding-top: 7px;">^</div></center>'
                 + '</div>');
 

 
  // container and slider divs

  var screen_height = $(window).height();
  var screen_width  = $(window).width();

  var container_height = Math.floor( screen_height * 0.8 );
  var container_width  = Math.floor( screen_width  * 0.8 );

  var container_top    = ( screen_height - container_height ) / 2;
  var container_left   = ( screen_width  - container_width )  / 2;

  $('body').append('<div id="specialty_container"></div>');

  $('#specialty_container').css( { position: 'fixed',
                                   top: container_top + 'px',
                                   left: container_left + 'px',
                                   width: container_width + 'px',
                                   height: container_height + 'px',
                                   overflow: 'hidden'
                                 } );


  $('#specialty_container').append('<div id="specialty_slider"></div>');

  $('#specialty_slider').css( { position: 'relative',
                                top: 0 + 'px',
                                left: 0 + 'px',
                                width: container_width + 'px'
                              } );

  // decay rates

  var button_top = container_top + container_height + 15;

  $('body').append('<div id="lambda_005" style="position: absolute; top: ' + button_top + 'px; left: 120px; height: 45px; width: 45px; background-color: #aaaaaa; font-size: 20px; border-radius: 4px;">' + '<center><div style="padding-top: 7px;">5</div></center>' + '</div>');
  $('#lambda_005').on('click', function() { global.lambda = 0.005; set_button_colors( this );  } );


  $('body').append('<div id="lambda_004" style="position: absolute; top: ' + button_top + 'px; left: 185px; height: 45px; width: 45px; background-color: #aaaaaa; font-size: 20px; border-radius: 4px;">' + '<center><div style="padding-top: 7px;">4</div></center>' + '</div>');
  $('#lambda_004').on('click', function() { global.lambda = 0.004; set_button_colors( this );  } );


  $('body').append('<div id="lambda_003" style="position: absolute; top: ' + button_top + 'px; left: 250px; height: 45px; width: 45px; background-color: #aaaaff; font-size: 20px; border-radius: 4px;">' + '<center><div style="padding-top: 7px;">3</div></center>' + '</div>');
  $('#lambda_003').on('click', function() { global.lambda = 0.003; set_button_colors( this );  } );


  $('body').append('<div id="lambda_002" style="position: absolute; top: ' + button_top + 'px; left: 315px; height: 45px; width: 45px; background-color: #aaaaaa; font-size: 20px; border-radius: 4px;">' + '<center><div style="padding-top: 7px;">2</div></center>' + '</div>');
  $('#lambda_002').on('click', function() { global.lambda = 0.002; set_button_colors( this );  } );


  $('body').append('<div id="lambda_001" style="position: absolute; top: ' + button_top + 'px; left: 380px; height: 45px; width: 45px; background-color: #aaaaaa; font-size: 20px; border-radius: 4px;">' + '<center><div style="padding-top: 7px;">1</div></center>' + '</div>');
  $('#lambda_001').on('click', function() { global.lambda = 0.001; set_button_colors( this );  } );


  function set_button_colors( div ) {

    $('#lambda_001').css( { 'background-color': '#aaaaaa' } );
    $('#lambda_002').css( { 'background-color': '#aaaaaa' } );
    $('#lambda_003').css( { 'background-color': '#aaaaaa' } );
    $('#lambda_004').css( { 'background-color': '#aaaaaa' } );
    $('#lambda_005').css( { 'background-color': '#aaaaaa' } );

    $('#' + div.id ).css( { 'background-color': '#aaaaff' } );

  } 


  var path_left     = Math.floor( container_width * 0.5 );
  var path_left_min = Math.floor( container_width * 0.3 );
  var path_left_max = Math.floor( container_width * 0.7 );
  var path_change;
  var div_text;

  for ( var i = 0; i < 256; i++ ) {

    if ( parseInt( i / 10 ) == ( i / 10 ) ) {
      $('#specialty_slider').append('<div style="height: 5px; background-color: #444444;"></div>');
    }


    // add div at random position, height of parent.  path with stones

    path_change = Math.floor( Math.random() * 2 );

    if ( path_change > 0 ) { path_left = path_left + 20; }
                      else { path_left = path_left - 20; }

    if ( path_left < path_left_min ) path_left = path_left_min;
    if ( path_left > path_left_max ) path_left = path_left_max;

    div_text = '<div style="position: absolute; top: 0px; left: ' + path_left + 'px; width: 140px; height: 100%; background-color: #666666;"></div>';

    if ( Math.floor( Math.random() * 101 ) < 40 ) {
      div_text += '<div style="position: absolute; top: 40%; left: ' + ( path_left + 140 + 20 ) + 'px; width: 10px; height: 15%; background-color: #eeeeee;"></div>';
    }

    if ( Math.floor( Math.random() * 101 ) < 40 ) {
      div_text += '<div style="position: absolute; top: 40%; left: ' + ( path_left - ( 15 + 20 ) ) + 'px; width: 10px; height: 15%; background-color: #eeeeee;"></div>';
    }


    div_text += '<div style="position: absolute; top: 0px; left: ' + ( container_width - 20 ) + 'px; width: 20px; height: 100%; background-color: rgb( ' + i + ', ' + i + ', ' + i + ');"></div>';


    if ( parseInt( i / 5 ) == ( i / 5 ) ) {
      $('#specialty_slider').append('<div style="position: relative; padding-left: 50px; padding-top: 5px; padding-bottom: 5px; background-color: #cccccc; font-size: 42px;">' + i + div_text + '</div>');
    } else {
      $('#specialty_slider').append('<div style="position: relative; padding-left: 50px; padding-top: 5px; padding-bottom: 5px; background-color: #aaaaaa; font-size: 42px;">' + i + div_text + '</div>');
    }

    if ( parseInt( i / 10 ) == ( i / 10 ) ) {
      $('#specialty_slider').append('<div style="height: 5px; background-color: #444444;"></div>');
    }

  }



  global.specialty_slider = new Scroller( '#specialty_slider' );

  $('#scroll_to_top').on('click', function() { global.specialty_slider.scroll_to_top();  } );
  $('#scroll_down').on('click',   function() { global.specialty_slider.push_down();  } );
  $('#scroll_up').on('click',     function() { global.specialty_slider.push_up();  } );

}



function Scroller( div ) {

  this.div = div;

  console.log('Scroller, div is ' + div );

  console.log('Scroller, this.div is ' + this.div );


  global[ div ] = {};

  global[ div ].container_height      = $( div ).parent().height();
  global[ div ].slider_height         = $( div ).height();
  global[ div ].start_top             = parseInt( $( div ).css('top') );
  global[ div ].slider_last_top       = global[ div ].start_top;
  global[ div ].slider_current_top    = global[ div ].start_top;
  global[ div ].slider_min_y          = global[ div ].container_height - global[ div ].slider_height;
  global[ div ].slider_velocity       = 0;
  global[ div ].slider_start_velocity = 0;
  global[ div ].slider_acceleration   = 0.2;
  global[ div ].slider_interval       = '';
  global[ div ].slider_timestamp      = '';

  if ( global[ div ].slider_min_y > 0 ) global[ div ].slider_min_y = 0;



  $( div ).on('touchstart', function( e ) {

    var touch = e.originalEvent.touches[0];

    touch_move_start.y = touch.pageY;

    global[ div ].start_top       = parseInt( $( div ).css('top') );
    global[ div ].slider_last_top = global[ div ].start_top;

    clearInterval( global[ div ].slider_interval );

    global[ div ].slider_interval     = setInterval( function () { record_slider_position( div ); }, 50 );
    global[ div ].slider_acceleration = 0.2;

    // $('#debug').html('start_top is ' + global[ div ].start_top );

  } );



  $( div ).on('touchmove', function( e ) {

    e.preventDefault();

    var touch = e.originalEvent.touches[0];
    var dy    = touch.pageY - touch_move_start.y;

    var slider_top = global[ div ].start_top + dy;

    if ( slider_top > 0 ) slider_top = 0;

    if ( slider_top < global[ div ].slider_min_y ) slider_top = global[ div ].slider_min_y;

    $( div ).css( { top: slider_top + 'px' } )

  } );
  


  $( div ).on('touchend', function( e ) {

    clearInterval( global[ div ].slider_interval );

    global[ div ].slider_interval = setInterval( function() { move_slider( div ); }, 50 );

    // requestAnimationFrame( function () { move_slider( div ); } );

    // timestamp for exponential decay

    global[ div ].slider_timestamp = Date.now();

  } );



  // mouse wheel

  $( div ).on('mousewheel', function( e, delta ) {

    var slider_top;

    if ( e.originalEvent.wheelDelta/120 > 0 ) {

      slider_top = $( div ).position().top + 100;

      if ( slider_top > 0 ) slider_top = 0;

    } else {

      slider_top = $( div ).position().top - 100;

      if ( slider_top < global[ div ].slider_min_y ) slider_top = global[ div ].slider_min_y;

    }

    global[ div ].slider_current_top  = slider_top;

    $( div ).css( { 'top': slider_top  + 'px'} );

  } );



  // motor, record velocity

  function record_slider_position( div ) {

    global[ div ].slider_current_top    = parseInt( $( div ).css('top') );
    global[ div ].slider_velocity       = global[ div ].slider_current_top - global[ div ].slider_last_top;
    global[ div ].slider_start_velocity = global[ div ].slider_velocity;
    global[ div ].slider_last_top       = global[ div ].slider_current_top;

    // $('#debug').html('slider_velocity is ' + global[ div ].slider_velocity );

  }



  // motor, move slider

  function move_slider( div ) {

    var slider_top = global[ div ].slider_current_top + global[ div ].slider_velocity;

    if ( slider_top > 0 ) {
      slider_top = 0;
      // global[ div ].slider_velocity = 0;
      global[ div ].slider_velocity = global[ div ].slider_velocity * -0.5;
    }

    if ( slider_top < global[ div ].slider_min_y ) {
      slider_top = global[ div ].slider_min_y;
      // global[ div ].slider_velocity = 0;
      global[ div ].slider_velocity = global[ div ].slider_velocity * -0.5;
    }


    $( div ).css( { top: parseInt( slider_top ) + 'px' } )

    global[ div ].slider_current_top = slider_top


    // exponential decay, velocity = start velocity * e to the power of -lambda delta t
    // lambda = 0.003 for fast decay

    var now     = Date.now();
    var delta_t = now - global[ div ].slider_timestamp;
    var lambda  = 0.001;
    var e       = Math.E;
    // var l_d_t   = -1 * lambda * delta_t;
    var l_d_t   = -1 * global.lambda * delta_t;

    var e_expr = Math.pow( e, l_d_t );

    var new_velocity = global[ div ].slider_start_velocity * e_expr;

    global[ div ].slider_velocity = new_velocity;


    if ( Math.abs( global[ div ].slider_velocity ) < 0.3 ) {
      clearInterval( global[ div ].slider_interval );
      global[ div ].slider_interval = '';
    }


    /*

    if ( Math.abs( global[ div ].slider_velocity ) > 0.4 ) {

      requestAnimationFrame( function () { move_slider( div ); } );

    }

    */


    /*

    $('#debug').html('slider_velocity is ' + global[ div ].slider_velocity + '<br>' 
                   + 'slider_top is ' + slider_top + '<br>'
                   + 'decay rate is ' + global.lambda + '<br>' );

    */

  }



  this.scroll_to_top = function animate_to_top() {

    console.log('scroll_to_top, div is ' + this.div );

    global[ this.div ].slider_velocity = 0;

    $( this.div ).animate( { top: 0 }, 300 );

  }



  this.push_down = function set_velocity_down() {

    var div = this.div;

    global[ div ].slider_current_top    = parseInt( $( div ).css('top') );
    global[ div ].slider_velocity       = global[ div ].slider_velocity - 100;
    global[ div ].slider_start_velocity = global[ div ].slider_velocity;
    global[ div ].slider_timestamp      = Date.now();

    if ( global[ div ].slider_interval == '' ) global[ div ].slider_interval = setInterval( function() { move_slider( div ); }, 50 );

  }



  this.push_up = function set_velocity_up() {

    var div = this.div;

    global[ div ].slider_current_top    = parseInt( $( div ).css('top') );
    global[ div ].slider_velocity       = global[ div ].slider_velocity + 100;
    global[ div ].slider_start_velocity = global[ div ].slider_velocity;
    global[ div ].slider_timestamp      = Date.now();

    if ( global[ div ].slider_interval == '' ) global[ div ].slider_interval = setInterval( function() { move_slider( div ); }, 50 );

  }

}


