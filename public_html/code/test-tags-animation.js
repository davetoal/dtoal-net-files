

// append tag div after it loads

// list of tag words

// append float left
// opacity 0
// get its left and top
// add 100 to top
// animate to 0
// fadeto 1


var tag_words = [ 'clinic', 'dyspnea', 'drop', 'vc', 'chest', 'ct', 'glass',
                  'subpleural', 'emphysema', 'oxygen', 'saturation', 'cough',
                  'student', 'hemosiderosis', '', '', '', '', '', '', '', '' ];

var global_screen_height = $(window).height();
var global_screen_width = $(window).width();

var global_current_tag = 0;
var global_tag_interval;




function init_page() {

  tags_demo();

}



function tags_demo() {

  $('body').css( { 'background-color': '#000000' } );


  $('body').append('<div id="tags_test">Tags<br><br><br><br></div>');

  var tags_width = Math.floor( global_screen_width * 0.3 );
  var tags_left = global_screen_width - tags_width;

  var tags_top = 200;
  var tags_height = global_screen_height - tags_top;

  var tt_css = {  position: 'absolute',
                  width: tags_width,
                  height: tags_height,
                  top: tags_top,
                  left: tags_left,
                  padding: 5,
                 'background-color': '#404040',
                  color: '#a0a0a0',
                 'font-size': '30px' };

  $('#tags_test').css( tt_css );


  /*

  // list of tag words

  for ( var t in tag_words ) {

    var this_word = tag_words[ t ];


    // replace space with underscore

    var this_tag_id = this_word;


    $('#tags_test').append('<div id="' + this_tag_id + '">' + this_word + '</div>');  

    tag_css = { 'padding-top': 7,
                'padding-bottom': 10,
                'padding-left': 15,
                'padding-right': 15,
                'border-radius': 30,
                 margin: 3,
                'background-color': '#808080',
                 color: '#404040',
                 float: 'left' };

    $('#'+ this_tag_id).css( tag_css );


  }

  */



  // set interval, append next tag, with global_this_tag

  global_tag_interval = setInterval( append_next_tag, 500 );

}



function append_next_tag() {

  if ( typeof( tag_words[ global_current_tag ] ) == 'undefined' ) {

    clearInterval( global_tag_interval );

    return;

  }


  // random interval ?


  var this_word = tag_words[ global_current_tag ];

  global_current_tag++;


  var this_tag_id = this_word;

  $('#tags_test').append('<div id="' + this_tag_id + '">' + this_word + '</div>');

  tag_css = { 
               position: 'relative',
              'offset-top': 100,
              'padding-top': 7,
              'padding-bottom': 10,
              'padding-left': 15,
              'padding-right': 15,
              'border-radius': 30,
               margin: 3,
               opacity: 0,
              'background-color': '#808080',
               color: '#404040',
               float: 'left' };

  $('#' + this_tag_id).css( tag_css );

  $('#' + this_tag_id).animate( { opacity: 1, top: '-=' + 100 }, 500 );

}



