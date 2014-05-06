<html><head></head>
<body>

<?php


  $myimage = ImageCreate(500, 500);

  $black = ImageColorAllocate($myimage, 0, 0, 0);
  $blue = ImageColorAllocate($myimage, 0, 0, 200);

  ImageRectangle($myimage, 10, 10, 100, 20, $black);
  ImageRectangle($myimage, 10, 50, 100, 20, $blue);

  // header("Content-type:image/png");

  ImagePng($myimage);

  ImageDestroy($myimage);

?>

</body>
</html>


