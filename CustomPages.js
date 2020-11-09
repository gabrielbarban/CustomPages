<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/235516c8-3da0-4cb1-b441-7e7f80c94853-loader.js" ></script> <meta name="google-site-verification" content="25OtvfT0V7MYjhdvz5okhoyuy2DMInairDbe4M8mh-0" />

<script type = "text/javascript">

jQuery(document).ready(function($) {
	var url_anterior = document.referrer;
	$(".bricks-form__field:nth-child(5)").css("display", "none");
	$(".bricks-form__field:nth-child(6)").css("display", "none");
})
</script>

<script type = "text/javascript" DEFER = "DEFER" >
//$(window).on("load", function ()
jQuery(document).ready(function($){

	var url_anterior = document.referrer;
	$(".bricks-form__field:nth-child(5)").css("display", "none");
	$(".bricks-form__field:nth-child(6)").css("display", "none");


	// pagina de AREAS atendidas
	if (window.location.href === "https://ficatranquilo.com.br/contabilidade-online/tecnologia-da-informacao/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/marketing-e-design/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/saude/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/beleza/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/recursos-humanos/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/transporte-e-logistica/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/comunicacao/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/engenharia-e-arquitetura/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/educacao-e-ensino/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/fitness/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/corretores/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/astrologos-e-numerologos/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/investimentos-e-mercado-financeiro/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/eventos/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/advocacia/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/artistas/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/representacao-comercial/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/administracao-e-financas/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/palestrantes/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/digital-influencer-e-youtuber/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/coaching/" || window.location.href === "https://ficatranquilo.com.br/contabilidade-online/consultoria-e-auditoria/"){
			var vetor = document.getElementsByClassName("link-url");
			var tamanho_vetor = $(vetor).get(-1);
			for (var i = 0; i < vetor.length; i++)
			{
				vetor[i].href = vetor[i].href + vetor[i].text;
			}
	}
	  
	  

	  // pagina generica de PROFISSOES
	  var url_string = window.location.href;
	  var url = new URL(url_string);
	  var profissao = url.searchParams.get("profissao");
	  if(profissao){
	  	$(".bricks-form__field:nth-child(5)").css("display", "none");
	    $('.profissao').text(profissao);
	    var traffic_source = url.searchParams.get("utm_source"); 
		var traffic_medium = url.searchParams.get("utm_medium");
		var traffic_campaign = url.searchParams.get("utm_campaign");
	    document.getElementsByName("traffic_source")[0].setAttribute("value", traffic_source);
		document.getElementsByName("c_utmz")[0].setAttribute("value", traffic_medium);
	  }



	  // pagina generica de CIDADES
	  var cidade_url = url.searchParams.get("cidade");
	  if(cidade_url){
	  		$(".bricks-form__field:nth-child(5)").css("display", "none");
			$(".bricks-form__field:nth-child(6)").css("display", "none");
			cidade_url = cidade_url.split("_");
			for (var i = 0; i < cidade_url.length; i++)
			{
				if(i == 0){
					cidade_pagina = cidade_url[i];
				} else{
					cidade_pagina = cidade_pagina + " " + cidade_url[i];
				}
			}
			$('.sua-cidade').text(cidade_pagina);
	        var traffic_source = url.searchParams.get("utm_source"); 
		    var traffic_medium = url.searchParams.get("utm_medium");
		    var traffic_campaign = url.searchParams.get("utm_campaign");
	        document.getElementsByName("traffic_source")[0].setAttribute("value", traffic_source);
			document.getElementsByName("c_utmz")[0].setAttribute("value", traffic_medium);
	        $('#rd-text_field-kgkv9ss9').val(cidade_pagina);
	  }



	  // restante das paginas
	  if(!cidade_url && !profissao){
	  	$(".bricks-form__field:nth-child(5)").css("display", "none");
	  	if(url.searchParams.get("utm_source")){
	  		var traffic_source = url.searchParams.get("utm_source");
	  		document.getElementsByName("traffic_source")[0].setAttribute("value", traffic_source);
	  	}

	  	if(url.searchParams.get("utm_medium")){
	  		var traffic_medium = url.searchParams.get("utm_medium");
	  		document.getElementsByName("c_utmz")[0].setAttribute("value", traffic_medium);
	  	}

	  	if(url_anterior){
	  		document.getElementsByName("custom_fields[1171632]")[0].setAttribute("value", url_anterior);
	  		document.getElementsByName("custom_fields[1171632]")[0].setAttribute("type", "hidden");
	  	}
	  }

})
</script>

