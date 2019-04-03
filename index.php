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
		<div class="gallery"></div>

		<div class="products">
			<h1>Produtos</h1>

			<!-- Elemento que receberá a lista de produtos -->
			<div data-primeirosProdutos></div>
		</div>
	</main>


	<script type="text/javascript" src="build/js/index.js<?=  uniqid('?=') ?>"></script>
</body>
</html>
