<?php

if(isset($_POST["concluir"])) {
	$nome = $_POST["nome"];
	$email = $_POST["email"];
	$senha = $_POST["senha"];
	$endereco = $_POST["endereco"];
	$telefone = $_POST["telefone"];

	echo $nome;
	echo "<br />";
	echo $email;
	echo "<br />";
	echo $senha;
	echo "<br />";
	echo $endereco;
	echo "<br />";
	echo $telefone;

} else {
	echo "<div>";
	echo "<h3>Erro no envio dos dados<h3>";
	echo "</div>";
	die();
}
?>