<?php

  $word = $_GET['word'];

  $json = file_get_contents("http://tabeeb-db.myimedia.com/tab_api/searchexact/tags/$word");

  print "$json";

?>

