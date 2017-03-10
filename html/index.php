<!doctype html>
<html lang="fr">
<head>
<!-- ROUTING HEADER -->
  <?php
    include 'header/header_base.php';
    include 'header/header_accueil.php';
  ?>
</head>

<body>
<!-- ROUTING ELEMENT PAGE -->
  <?php
    include 'navigation/navigation.php';
    include 'accueil/liste_projet.php';
    include 'effet_fond_ecran.php';
  ?>
<!-- ROUTING JS -->
  <?php
    include 'routingjs/js_base.php';
    include 'routingjs/js_accueil.php';
  ?>

</body>
</html>