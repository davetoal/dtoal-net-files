<html><head></head>
<body>

<?php

  $selection = $_GET["query"] or die("No query parameter passed!");

  $dbc = mysql_connect("dtoal.ipowermysql.com", "davegeno", "davegeno") or die(mysql_error());

  $db = mysql_select_db("geno") or die(mysql_error());

  $query = sprintf('SELECT count FROM segcount WHERE seg="%s"', $selection);

  $result = mysql_query($query) or die(mysql_error());

  # $row = json_encode(mysql_fetch_assoc($result));
  # hmm

  $row = mysql_fetch_assoc($result);

  echo $row["count"];

  mysql_free_result($result);

?>

</body>
</html>


