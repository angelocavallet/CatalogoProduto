$(function() {

	$.getJSON( "data/produtos.json", function( data ) {

		var prodVis = new Produto(data.data.reference.item);
		console.log(prodVis)
		$('#listaVisualizado').append(prodVis.render());
		
		var prodRec = [];
		$.each( data.data.recommendation, function( key, val ) {
			var prod = new Produto(val);
			prodRec.push(prod.render());
		});

		$('#listaRecomendado').append(prodRec.join( "" ));

	});
});

