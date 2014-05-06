<html><head></head>
<body>

<?php

  # $fin = $_GET["fin"] or die("No fin parameter passed!");
  # $pos = $_GET["pos"] or die("No pos parameter passed!");

  $fin = $_GET["fin"] ? 1 : 0;
  $pos = $_GET["pos"] ? $_GET["pos"] : 0;

  $dbc = mysql_connect("dtoal.ipowermysql.com", "davegeno", "davegeno") or die(mysql_error());

  $db = mysql_select_db("geno") or die(mysql_error());

  $query = "update segposition set fin = " . $fin . " where position = " . $pos . ";";

  echo "$query";

  $result = mysql_query($query) or die(mysql_error());

  # mysql_free_result($result);

?>

</body>
</html>

