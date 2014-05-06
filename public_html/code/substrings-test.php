<html><head><title>unique substrings</title></head>
<body><pre>


  <a href="http://dtoal.net/code">back</a>


<?php

  $today = getdate(time());

  print("the time is " . $today['hours'] . ":" );

  if($today['minutes'] < 10) { print("0"); }

  print($today['minutes'] . ":" );

  if($today['seconds'] < 10) { print("0"); }

  print($today['seconds'] . ", ");

  print(date("l F j") . "\n\n");


  $phpname = "substrings-test.php";


  print("connecting to mysql\n");

  $link = mysql_connect('dtoal.ipowermysql.com', 'davegeno', 'davegeno'); 

  if (!$link) { 
      die('Could not connect: ' . mysql_error()); 
  } 

  print("Connected successfully\n\n"); 

  mysql_select_db(geno, $link); 

  $query = "select count(seg) from segposition;";

  print("query is " . $query . "\n");

  $mysql_result = mysql_query($query, $link);

  $row = mysql_fetch_row($mysql_result);

  print($row[0]);

  print("\n\n");

  print("frame select\n\n");


  // toggle the fin position passed in args if any, then draw chart
  // each fin link calls this cgi again with those args

  print("query string is -->" . $_SERVER['QUERY_STRING'] . "<--\n");
  print("get pos string is -->" . $_GET['pos'] . "<--\n");
  print("get fin string is -->" . $_GET['fin'] . "<--\n");
  print("get start string is -->" . $_GET['start'] . "<--\n");
  print("get end string is -->" . $_GET['end'] . "<--\n\n");
 

  if (($_GET['pos'] != '') && ($_GET['fin'] != '')) {

    $query = "update segposition set fin = " . $_GET['fin'] . " where position = " . $_GET['pos'] . ";";

    print("query is " . $query . "\n");

    $mysql_result = mysql_query($query, $link);

  }


  $startframe = 0;
  $endframe = 60;


  if (($_GET['start'] != '') && ($_GET['end'] != '')) {

    print("query from " . $_GET['start'] . " to " . $_GET['end'] . "\n\n");

    $startframe = $_GET['start'];
    $endframe = $_GET['end'];

  }


  $query = "select * from segposition where position >= $startframe and position < $endframe;";

  $mysql_result = mysql_query($query, $link);

  for ($i = $startframe; $i < $endframe; $i++) {

    $row = mysql_fetch_row($mysql_result);

    // print("$row[0], $row[1], $row[2], i is $i\n");

    $t[$i] = $row[1];
    $f[$i] = $row[2];

  }

  // print("done with frame select\n\n");


  // table of values from frame region, links to toggle fin position
  // "<a href=\"${myurl}?$prefix&$positn&$current&$boxnum=0\">\n";


  print("</pre><h1><table border=\"1\"><tr>");

  for ($i = $startframe; $i < $endframe; $i++) { print("<td>$t[$i]</td>"); }

  print("</tr><tr>");

  for ($i = $startframe; $i < $endframe; $i++) { 

    if ($f[$i] > 0) { print("<td><a href=\"$phpname?pos=$i&fin=0&start=$startframe&end=$endframe\">$f[$i]</a></td>"); }
               else { print("<td><a href=\"$phpname?pos=$i&fin=1&start=$startframe&end=$endframe\">$f[$i]</a></td>"); }

  }

  print("</tr></table></h1><pre>");


  $backten = $startframe - 10;
  if ($backten < 0) { $backten = 0; }
  $backendframe = $backten + 60;

  $forwardten = $startframe + 10;
  $forwardendframe = $forwardten + 60;
 
  print("\n");

  print("<table border=1 bgcolor=\"#cccccc\" cellspacing=\"2\"><tr>");

  print("<td></td><td></td><td>.  frame position  .</td><td></td>");

  print("<td><form method=\"post\" action=\"$phpname?start=0&end=60\">");
  print("<input type=\"submit\" value=\"reset\">");
  print("</form></td>");

  print("<td><form method=\"post\" action=\"$phpname?start=$backten&end=$backendframe\">");
  print("<input type=\"submit\" value=\".  << 10  .\">");
  print("</form></td>");

  print("<td><form method=\"post\" action=\"$phpname?start=$forwardten&end=$forwardendframe\">");
  print("<input type=\"submit\" value=\".  10 >>  .\">");
  print("</form></td>");


  print("</table>");







?>

</pre></body></html>



