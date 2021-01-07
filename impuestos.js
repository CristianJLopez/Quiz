function obtenerValorConImpuestos(valorsin, tipopro){
	var tipopro=prompt("ingrese tipo de producto (1-2-3): ")
	switch (tipopro){
		case '1':
			var valorsin=1000
			var v1=valorsin+valorsin*21/100
			alert("Valor sin impuestos: "+valorsin+" valor con impuesto de 21%: "+v1)
			break;
		case '2':
			var valorsin=1000
			var v2=valorsin+valorsin*10/100
			alert("Valor sin impuestos: "+valorsin+" valor con impuesto de 10%: "+v2)
			break;
		case '3':
			var valorsin=1000
			var v3=valorsin+valorsin*5/100
			alert("Valor sin impuestos: "+valorsin+" valor con impuesto de 5%: "+v3)
			break;
		default:
			alert("No existe el producto")

	}
}
obtenerValorConImpuestos() 