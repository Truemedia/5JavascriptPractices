<?php
	/**
	 * Layout using markup and coding optimized for FuelPHP and RequireJS
	 */
?>
<!DOCTYPE html>
	<head>
		<meta charset="UTF-8">
		<?php
			echo Asset::css('bootstrap.flatly.min.css');
			echo Asset::js('libs/require.min.js', array(
				'data-main' => Asset::get_file('start.js', 'js')
			));
		?>
		<title>5 Javascript Practices</title>
	</head>
	<body id="layout"><?php echo $partials['content']; ?></body>
</html>