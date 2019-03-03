<?php
    session_start();
      
      if (!$_SESSION['id']) 
      {
        header("Location: login.php");
        }
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Bela Zapisnik</title>

    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <link href="css/creative.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="./css/style.css" rel="stylesheet" type="text/css">
    <script src="js/blok.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



</head>

<body id="page-top">
<div class="wrapper"> 
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand page-scroll" href="#page-top">Bela Zapisnik</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <form action="signout.php">
                            <div class="lol">
                                <button type="submit" class="btn btn-primary button">Odjava</button>
                            </div>
                        </form>
                    
                    </li>
                </ul>
            </div>
        </div>
    </nav>

<section>
    <div class="container formPosition">
        <img src="img/bela.png">
    </div>

    <div class="container formPosition">
        <!--Rezultat-->
        <div>
            <div class="col-sm-2 col-md-2 col-lg-2 formPadding">
                <input type="checkbox" id="zvanjeMi" style="float: right;">
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 formPadding">
                <input class="form-control" type="number" name="text2" id="mi" placeholder="Rezultat" max="162" min="0">
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 formPadding">
                <input class="form-control" type="number" name="text2" id="vi" placeholder="Rezultat" max="162" min="0">
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 formPadding">
                <input type="checkbox" id="zvanjeVi" style="float: left;">
            </div>
        </div>

        <!--Zvanja-->
        
            <div class="col-sm-3 col-md-3 col-lg-3 formPadding">
                <input type="checkbox" id="belaMi" style="float: right;">
            </div>
        
            <div class="col-sm-3 col-md-3 col-lg-3 formPadding">
                <input class="form-control" type="number" name="text2" id="dodatnaZvanjaMi" placeholder="Zvanja">
            </div>

            <div class="col-sm-3 col-md-3 col-lg-3 formPadding">
                <input class="form-control" type="number" name="text2" id="dodatnaZvanjaVi" placeholder="Zvanja">
            </div>
                
            <div class="col-sm-3 col-md-3 col-lg-3 formPadding">
                <input type="checkbox" id="belaVi" style="float: left;">
            </div>  
        

        <!--Potvrda button-->            
        <div>
            <div class="col-md-12 formPosition formPadding">
                <button type="button" class="btn btn-primary button" onclick="glavnaFunkcija()">Potvrdi</button>
            </div>
        </div>

        <!--Tablica s rezultatima-->    
        <div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <table class="table table-striped"> 
                    <thead class="thead-default">
                        <tr>
                            <th align="center" id="ukupnoMi" style="text-align: right!important;">Mi: 0</th>
                            <th align="center" id="ukupnoVi">Vi: 0</th>
                        </tr>
                    </thead>

                    <tbody id="rezultat">

                    </tbody>
                </table>
                <p id="msg"></p>
            </div>
            <div class="col-md-4"></div>
        </div>
          
    </div>

   
</section>


<footer>
   <div class="container" style="padding-top: 7px;">
        <p>
           Designed and developed by Matej Milić <br>
           <a href="https://www.facebook.com/matej.milic.3"><i class="fa fa-facebook faIcons" aria-hidden="true"></i></a>
           <a href="https://twitter.com/"><i class="fa fa-twitter faIcons" aria-hidden="true"></i></a>
        </p>
    </div> 
</footer>

</div>

<script type="text/javascript" src="js/checkBoxControler.js"></script>
<script type="text/javascript" src="js/autoResult.js"></script>
</body>

</html>