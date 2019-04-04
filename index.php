<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>teste-profite</title>

	<link rel="stylesheet" href="build/css/index.css<?=  uniqid('?=') ?>" type="text/css" media="all"/>
</head>
<body>
	<header class="header">
		<nav class="navbar">
			<a class="logo" href="#">
				<img src="images/logo.svg" alt="Profite">
			</a>
			<a class="cart-icon" href="#">
				<span>1</span>
			</a>
			<button class="toggle-menu" aria-controls="primary-menu" aria-expanded="false">Menu</button>
			<div class="search">
				<form action="">
					<input type="text" placeholder="O que você está procurando?">
					<input type="submit" value="">
				</form>
			</div>
		</nav>
	</header>

	<main>
		<div class="banner" id="banner_slider">
			<ul class="slider">
				<li>
					<img src="./images/Untitled design.png" alt="Image">
					<h1>Nossa especialidade: experiência de compra.</h1>
				</li>
				<li>
					<img src="./images/Untitled design.jpg" alt="Image">
					<h1>Quae hic rei publicae vulnera inponebat.</h1>
				</li>
				<li>
					<img src="./images/Untitled design.jpg" alt="Image">
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
				</li>
			</ul>
		</div>

		<div class="products">
			<h1>Produtos</h1>

			<!-- Elemento que receberá a lista de produtos -->
			<div data-primeirosProdutos></div>
		</div>
	</main>

	<footer>
		<!-- -->
	</footer>
	<script
	 data-main="build/js/index.js<?=  uniqid('?=') ?>"
	 src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"
	 type="text/javascript"></script>
</body>
</html>
