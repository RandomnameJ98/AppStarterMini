<?php

	$a=htmlspecialchars($_POST["data"]);
	if(is_numeric($a)){
		$b=$a." times two equals ".(2*$a);
	}
	else{
		$b="This variable isn't a number!";
	}

	echo("Server response: ".$b);

?>