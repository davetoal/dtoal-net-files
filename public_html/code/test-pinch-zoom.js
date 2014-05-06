

// test-pinch-zoom.js


// how many touch events are there in the event array ?

// put wedge and arc cursors around each touch.  canvas added at xy - half of canvas

// if more than one touch,

//   get distance between, xy of each one

//   rotation on pinch?  angle of the line, then deltas of that angle

//   get average point, move the image the dxy of the average





var global = {};

global.touch_move_start = [];

global.zoom_ratio = 1;

// pinch changes ratio.  if width < screen width, = screen width
//   if > screen width, get new size, get new top and left, set top and left, width and height




function init_page() {

  // compare div with image and canvas with image

  // get top and left from the size of the canvas after the zoom difference


  $('body').css( { margin: 0 + 'px',
                  'background-color': '#888888' } );

  $('body').append('<div id="debug" style="position: absolute; top: 10px; left: 10px; font-size: 24px;"></div>');

  $('#debug').html('start');


  var screen_height = $(window).height();
  var screen_width  = $(window).width();

  var div_height = ( screen_height - 100 ) / 2;

  div_height = screen_height - 120;


  // $('body').append('<div id="image_gallery_shade" style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #000000; opacity: 0.7; z-index: 110;"></div>');


  // image div

  $('body').append('<div id="image_div" style="position: absolute; top: 50px; left: 0px; height: ' + div_height + 'px; width: ' + ( screen_width - 2 ) + 'px; background-color: #000000; border: 1px solid #000000; z-index: 110; overflow: hidden;">'
                 +   '<img style="position: relative; top: 0px; left: 0px;" id="gallery_image" width=' + ( screen_width - 2 ) + ' height="auto" src="cartoon_doctor.png"></img>'
                 + '</div>');

  $('#gallery_image').on('load', function () { global.image_div_zoom = new Zoomer( '#image_div', '#gallery_image' ); } );


  /*

  // canvas div

  $('body').append('<div id="canvas_div" style="position: absolute; top: ' + ( div_height + 80 ) + 'px; left: 0px; height: ' + div_height + 'px; width: ' + ( screen_width - 2 ) + 'px; background-color: #000000; border: 1px solid #000000;"></div>');

  global.canvas_div_zoom = new Zoomer( '#canvas_div' );

  */


  // set img

  var button_top = screen_height - 60;
  var button_width = 50;
  var button_height = 50;
  var button_space = 20;
  var button_left;


  button_left = button_space + ( ( button_width + button_space ) * 0 );

  $('body').append('<div id="pic_1" style="position: absolute; top: ' + button_top + 'px; left: ' + button_left + 'px; height: ' + button_height + 'px; width: ' + button_width + 'px; background-color: #aaaaaa;"><center><div style="padding-top: 10px; font-size: 24px;">1</div></center></div>');

  $('#pic_1').on('click', function() { 
    $('#gallery_image').attr( 'src', 'cartoon_doctor.png' ); 
    $('#gallery_image').css( { height: 'auto', width: ( screen_width - 2 ) + 'px', top: 0 + 'px', left: 0 + 'px' } );
  } );



  button_left = button_space + ( ( button_width + button_space ) * 1 );

  $('body').append('<div id="pic_2" style="position: absolute; top: ' + button_top + 'px; left: ' + button_left + 'px; height: ' + button_height + 'px; width: ' + button_width + 'px; background-color: #aaaaaa;"><center><div style="padding-top: 10px; font-size: 24px;">2</div></center></div>');

  $('#pic_2').on('click', function() { 
    $('#gallery_image').attr( 'src', 'voyager.jpg' ); 
    $('#gallery_image').css( { height: 'auto', width: ( screen_width - 2 ) + 'px', top: 0 + 'px', left: 0 + 'px' } ); 
  } );



  button_left = button_space + ( ( button_width + button_space ) * 2 );

  $('body').append('<div id="pic_3" style="position: absolute; top: ' + button_top + 'px; left: ' + button_left + 'px; height: ' + button_height + 'px; width: ' + button_width + 'px; background-color: #aaaaaa;"><center><div style="padding-top: 10px; font-size: 24px;">3</div></center></div>');

  $('#pic_3').on('click', function() { 
    $('#gallery_image').attr( 'src', 'javascript.jpg' ); 
    $('#gallery_image').css( { height: 'auto', width: ( screen_width - 2 ) + 'px', top: 0 + 'px', left: 0 + 'px' } ); 
  } );



  button_left = button_space + ( ( button_width + button_space ) * 3 );

  $('body').append('<div id="pic_4" style="position: absolute; top: ' + button_top + 'px; left: ' + button_left + 'px; height: ' + button_height + 'px; width: ' + button_width + 'px; background-color: #aaaaaa;"><center><div style="padding-top: 10px; font-size: 24px;">4</div></center></div>');

  $('#pic_4').on('click', function() { 
    $('#gallery_image').attr( 'src', 'banana.jpg' );
    $('#gallery_image').css( { height: 'auto', width: ( screen_width - 2 ) + 'px', top: 0 + 'px', left: 0 + 'px' } ); 
  } );


}



function Zoomer( div, img ) {

  this.div = div;


  var zoom = {};

  zoom.touch_move_start = [];
  zoom.touch_move_now   = [];

  zoom.average_move_start = {};
  zoom.average_move_now   = {};

  zoom.width_original  = $( img ).width();
  zoom.height_original = $( img ).height();



  $( div ).on('touchstart', function( e ) {

    $('.touch').remove();


    var touch_count = e.originalEvent.touches.length;

    zoom.touch_count = touch_count;


    if ( zoom.end_zoom == true ) return;

    zoom.end_zoom = false;


    $( div ).css( { border: '1px solid #ffff00' } );


    var total_x = 0;
    var average_x;
    var total_y = 0;
    var average_y;

    for ( var i in e.originalEvent.touches ) {

      var touch = e.originalEvent.touches[i];

      if ( ( typeof touch.pageX == 'undefined' ) || ( typeof touch.pageY == 'undefined' ) ) continue;

      if ( typeof zoom.touch_move_start[i] == 'undefined' ) zoom.touch_move_start[i] = {};

      zoom.touch_move_start[i].x = touch.pageX;
      zoom.touch_move_start[i].y = touch.pageY;

      var tx = touch.pageX - ( 50 + 5 );
      var ty = touch.pageY - ( 50 + 5 );

      total_x = total_x + touch.pageX;
      total_y = total_y + touch.pageY;

      $('body').append('<div class="touch" style="position: fixed; top: ' + ty + 'px; left: ' + tx + 'px; height: 100px; width: 100px; border: 5px solid #002299; border-radius: 100px; z-index: 110;"></div>');

      // $('body').append('<div class="touch" style="position: fixed; top: ' + ty + 'px; left: ' + tx + 'px; height: 100px; width: 100px; border-radius: 100px; box-shadow: 0px 0px 80px 40px rgba( 235, 235, 255, 0.5);"></div>');

    }


    // var touch_count = e.originalEvent.touches.length;

    $('#debug').html( touch_count + ' touches' );


    if ( touch_count > 0 ) {

      average_x = Math.floor( total_x / touch_count );
      average_y = Math.floor( total_y / touch_count );

      zoom.average_move_start.x = average_x;
      zoom.average_move_start.y = average_y;

      var a_x = average_x - 10;
      var a_y = average_y - 10;


      zoom.width_start  = $( img ).width();
      zoom.height_start = $( img ).height();

      zoom.left_start = $( img ).position().left;
      zoom.top_start  = $( img ).position().top;


      // $('body').append('<div class="touch" style="position: fixed; top: ' + a_y + 'px; left: ' + a_x + 'px; height: 20px; width: 20px;"><img src="crosshairs-red.png" height=20 width=20 ></img></div>');

      $('#debug').html( touch_count + ' touches, average is ' + a_x + ', ' + a_y );

    }


    if ( touch_count == 2 ) {

      zoom.dx = zoom.touch_move_start[1].x - zoom.touch_move_start[0].x;
      zoom.dy = zoom.touch_move_start[1].y - zoom.touch_move_start[0].y;

      zoom.distance_start = Math.sqrt( ( zoom.dx * zoom.dx ) + ( zoom.dy * zoom.dy ) );


      $('#debug').html( touch_count + ' touches, 0 is ' + e.originalEvent.touches[0].pageX + ', ' + e.originalEvent.touches[0].pageY + ', 1 is ' + e.originalEvent.touches[1].pageX + ', ' + e.originalEvent.touches[1].pageY );

    }


  } );



  $( div ).on('touchmove', function( e ) {

    e.preventDefault();

    $('.touch').remove();


    var touch_count = e.originalEvent.touches.length;

    if ( ( zoom.touch_count > touch_count ) || ( zoom.end_zoom == true ) ) {

      zoom.end_zoom = true;

      return;

    }


    var total_x = 0;
    var average_x;
    var total_y = 0;
    var average_y;

    for ( var i in e.originalEvent.touches ) {

      var touch = e.originalEvent.touches[i];

      if ( ( typeof touch.pageX == 'undefined' ) || ( typeof touch.pageY == 'undefined' ) ) continue;

      if ( typeof zoom.touch_move_now[i] == 'undefined' ) zoom.touch_move_now[i] = {};

      zoom.touch_move_now[i].x = touch.pageX;
      zoom.touch_move_now[i].y = touch.pageY;

      // $('#debug').html('page x y is ' + touch.pageX + ', ' + touch.pageX );

      var tx = touch.pageX - ( 50 + 5 );
      var ty = touch.pageY - ( 50 + 5 );

      total_x = total_x + touch.pageX;
      total_y = total_y + touch.pageY;

      $('body').append('<div class="touch" style="position: fixed; top: ' + ty + 'px; left: ' + tx + 'px; height: 100px; width: 100px; border: 5px solid #0088ff; border-radius: 100px; z-index: 110;"></div>');

      // $('body').append('<div class="touch" style="position: fixed; top: ' + ty + 'px; left: ' + tx + 'px; height: 100px; width: 100px; border-radius: 100px; box-shadow: 0px 0px 80px 40px rgba( 235, 235, 255, 0.5);"></div>');

    }


    // var touch_count = e.originalEvent.touches.length;

    // $('#debug').html( touch_count + ' touches, total is ' + total_x + ', ' + total_y );



    if ( touch_count > 0 ) {

      average_x = Math.floor( total_x / touch_count );
      average_y = Math.floor( total_y / touch_count );

      var a_x = average_x - 10;
      var a_y = average_y - 10;

      // $('body').append('<div class="touch" style="position: fixed; top: ' + a_y + 'px; left: ' + a_x + 'px; height: 20px; width: 20px;"><img src="crosshairs-red.png" height=20 width=20 ></img></div>');


      var dx = average_x - zoom.average_move_start.x;
      var dy = average_y - zoom.average_move_start.y;

      // if ( zoom.top_start  + dy > 0 ) dy = 0;
      // if ( zoom.left_start + dx > 0 ) dx = 0;


      var new_top  = zoom.top_start  + dy;
      var new_left = zoom.left_start + dx;


      $('#debug').html( touch_count + ' touches, average is ' + a_x + ', ' + a_y );


      // zoom if 2 touches

      if ( touch_count == 2 ) {

        zoom.dx = zoom.touch_move_now[1].x - zoom.touch_move_now[0].x;
        zoom.dy = zoom.touch_move_now[1].y - zoom.touch_move_now[0].y;

        zoom.distance_now = Math.sqrt( ( zoom.dx * zoom.dx ) + ( zoom.dy * zoom.dy ) );

        var ratio = zoom.distance_now / zoom.distance_start;

        var x_distance = average_x - zoom.left_start;
        var y_distance = average_y - zoom.top_start;

        // distance is img left - avg x
        // width = width * ratio
        // distance * ratio = new distance, new img left - old avg x

        var new_width  = ratio * zoom.width_start;
        var new_height = ratio * zoom.height_start;

        // if ( new_width < zoom.width_original ) new_width = zoom.width_original;
        // if ( new_height < zoom.height_original ) new_height = zoom.height_original;

        // prevent zoom from changing left and top ?




        var new_x_distance = ratio * x_distance;
        var new_y_distance = ratio * y_distance;

        // var new_img_left = new_x_distance - average_x;
        // var new_img_top  = new_y_distance - average_y;

        var new_img_left = average_x - new_x_distance;
        var new_img_top  = average_y - new_y_distance;







        // if ( width  < zoom.width_original )  width  = zoom.width_original;
        // if ( height < zoom.height_original ) height = zoom.height_original;

        // xy of average from center of the image ?
        // top and left move is percentage of total according to xy of average

        // distance of average from top and left of image, not window
        // distance from starting top and left ?  current top and left

        // image top, left, width, height
        // average top, left
        // distance = average - image

        // average xy on the screen.  distance to image top and left from average point

        // zoom.image_width, height, percent is distance / width, height

        // var x_distance = average_x - new_top;
        // var y_distance = average_y - new_left;

        // var x_distance = average_x - zoom.top_start;
        // var y_distance = average_y - zoom.left_start;

        // var percent_x = x_distance / new_width;
        // var percent_y = y_distance / new_height;

        // position of top and left by subtracting new distance from average point ?

        // new_x_distance = x_distance * ratio

        // average - new x distance ?

        // new distance is new width, minus old average distance to edge.  offset, average x ?
        // distance is img left - avg x
        // width = width * ratio
        // new distance is new img left - old avg x
        // img left is new distance


        // var percent_x = average_x / $(window).width();
        // var percent_y = average_y / $(window).height();


        // left = left - ( width - zoom.width_start ) / 2;
        // top  = top  - ( height - zoom.height_start ) / 2;

        // new_left = new_left - ( new_width - zoom.width_start ) * percent_x;
        // new_top  = new_top  - ( new_height - zoom.height_start ) * percent_y;



        new_top  = new_img_top  + dy;
        new_left = new_img_left + dx;


        // new_top  = new_img_top;
        // new_left = new_img_left;




        // min width, min height ?

        $('#debug').html( touch_count + ' touches, ratio is ' + ratio );

      }



      if ( touch_count == 2 ) {

        $( img ).css( { top: new_top + 'px',
                        left: new_left + 'px',
                        width: new_width + 'px',
                        height: new_height + 'px'
                      } );

      } else {

        $( img ).css( { top: new_top + 'px',
                        left: new_left + 'px'
                      } );

      }
      
    }


  } );



  $( div ).on('touchend', function( e ) {

    $('.touch').remove();


    zoom.end_zoom = false;


    $( div ).css( { border: '1px solid #000000' } );


    $('#debug').html( e.originalEvent.touches.length + ' touches' );

  } );


}


