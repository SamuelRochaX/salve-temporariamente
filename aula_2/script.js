$(function(){

	$("input[type-text]").on("blur", function(){
		var idTexto = $(this).attr("id");
		var valor = $(this).val();

		if(valor !== ""){
			localStorage.setItem(idTexto, valor);
		} else {
			localStorage.removeItem(idTexto);
		}
	});

	$("input[type-text]").each(function(){
		var idTexto = $(this).attr("id");

		if(localStorage.getItem(idTexto) !== null){
			var info = localStorage.getItem(idTexto);
			$(this).val(info);
		}
	});

	$('#formulario').keydown(function (e){
		if(e.keyCode == 13){
			var ativo = $("active").attr('id');

			if(ativo == "fieldset1"){
				$("#avancar").trigger("click");
			} else if (ativo == "fieldset2") {
				$("#concluir").trigger("click");
			}
			e.preventDefault();
		}
	});

	$("#avancar").on("click", function(){
		var nome = $("#nome").val();
		var email = $("#email").val();
		var senha = $("#senha").val();

		if (nome == ""){
			alert("Digite seu nome");
		} else if (email == "") {
			alert("Digite seu email");
		} else if (senha == "") {
			alert("Digite sua senha");
		} else {
			$("#fieldset1").removeClass('active');
			$("#fieldset2").addClass('active');
			$("#voltar").removeClass("hidden");
			$("#avancar").addClass("hidden");
			$("#concluir").removeClass("hidden");
		}
	});

	$("#voltar").on("click", function(){
		$("#fieldset1").removeClass('active');
		$("#fieldset2").addClass('active');
		$("#voltar").addClass("hidden");
		$("#avancar").removeClass("hidden");
		$("#concluir").addClass("hidden");

	});

	$("#concluir").on("click", function(){
		var telefone = $("#telefone").val();
		var endereco = $("#endereco").val();

		if(telefone == ""){
			alert("Digite seu telefone");
		} else if(endereco == ""){
			alert("Digite seu endereco");
		} else {
			localStorage.clear();
		}
	});
})