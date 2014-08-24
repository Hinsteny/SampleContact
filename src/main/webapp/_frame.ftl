<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Contact</title>
    
  
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap-theme.min.css">
    
    <script type="text/javascript" src="jquery/jquery.min.js"></script>
    <script type="text/javascript" src="js/brite.js"></script>
    <script type="text/javascript" src="js/RemoteDAOHandler.js"></script>
    <script type="text/javascript" src="js/handlebars-1.0.rc.1.js"></script>

	[@webBundle path="/js/" type="js" /]
	[@webBundle path="/css/" type="css" /]

  </head>
  <body>
 
    <div id = "mainview" ></div>
		<script type="text/javascript">
			var $mainview = $("body").find("#mainview");
			$(document).ready(function(){
				brite.display("MainView",$mainview);
			});
		</script>
  </body>
</html>