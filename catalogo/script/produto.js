function Produto(prod){

		this.businessId = prod.businessId
		this.detailUrl = prod.detailUrl
		this.imageName = prod.imageName
		this.name = prod.name
		this.oldPrice = prod.oldPrice
		this.price = prod.price
		this.productInfo = prod.productInfo

		Produto.prototype.render = function(){
			var html = "<li class='item-produto'><a href='"+this.detailUrl+"'>"+
						"<span><img class='img-produto' src='"+this.imageName+"'></span>"+
						"<span class='item-produto-desc'>"+this.name+"</span>"+
						"<div class='detalhe-produto'>";
						if(this.oldPrice)
							html += "<span>De: <strong class='preco-antigo-produto'>"+this.oldPrice+"</strong></span>";
						
						html += "<span class='preco-atual-produto'>Por: "+this.price+"</span>"+
							"<span class='condicao-produto'>"+this.productInfo.paymentConditions+"</span>"+
						"</div>"+
					"</a></li>";
			return html;
		}
	
};