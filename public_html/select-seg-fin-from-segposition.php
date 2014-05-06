<html><head></head>
<body>

<?php

  # $start = $_GET["start"] or die("No start parameter passed!");

  $start = $_GET["start"] ? $_GET["start"] : 0;
  $end   = $_GET["end"]   or die("No end parameter passed!");

  $dbc = mysql_connect("dtoal.ipowermysql.com", "davegeno", "davegeno") or die(mysql_error());

  $db = mysql_select_db("geno") or die(mysql_error());

  # $query = sprintf('select seg, fin from segposition where position >= "%s" and position <= "%s"', $start, $end);

  $query = "select seg, fin from segposition where position >= $start and position <= $end";

  $result = mysql_query($query) or die(mysql_error());

  # $row = json_encode(mysql_fetch_assoc($result));
  # echo "$row";

  $segs = "";
  $fins = "";

  while ($row = mysql_fetch_assoc($result)) {
    $segs = $segs . $row["seg"] . ",";
    $fins = $fins . $row["fin"] . ",";
  }

  $returnstring = $segs . ";" . $fins;

  echo "$returnstring";

  mysql_free_result($result);

?>

</body>
</html>


