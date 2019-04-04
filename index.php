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
					<h1>Nossa especialidade:<br> experiência de compra.</h1>
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
			<div class="arrows">
				<span></span> <span></span>
			</div>
		</div>

		<div class="products">
			<h1>Produtos</h1>

			<!-- Elemento que receberá a lista de produtos -->
			<div data-primeirosProdutos></div>
		</div>
	</main>

	<footer>
		<div>
			<div class="block">
				<h1>Localização</h1>
				<div class="address">
					<h2>São Paulo</h2>
					<p>Rua do Rócio, 423/1801<br> Vila Olímpia - SP<br> 04552-000<br> +55 11 3333 3333</p>
				</div>
				<div class="address">
					<h2>Rio de Janeiro</h2>
					<p>Vol. da Pátria, 301/702<br> Botafogo - RJ<br> 22270-000<br> +55 21 3333 3333</p>
				</div>
			</div>
			<div class="block">
2
			</div>
			<div class="block">
3
			</div>
		</div>
	</footer>
	<script
	 data-main="build/js/index.js<?=  uniqid('?=') ?>"
	 src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"
	 type="text/javascript"></script>
</body>
</html>
