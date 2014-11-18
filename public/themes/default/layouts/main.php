<?php
	/**
	 * Layout using markup and coding optimized for FuelPHP and RequireJS
	 */
?>
<!DOCTYPE html>
	<head>
		<meta charset="UTF-8">
			<link rel="stylesheet" href="vendor/bootstrap/bootstrap.flatly.min.css" />
			<script src="vendor/requirejs/require.min.js" data-main="start.js"></script>
		<title>5 Javascript Practices</title>
	</head>
	<body id="layout"><?php echo $partials['content']; ?></body>
</html>