
	var motor = prompt("ingrese tipo de motor (0-1-2-3 ó 4): ")
	switch (motor){
		case 0:
			document.write("No hay establecido un valor definido para el tipo de bomba<br>")
			break
		case 1:
			document.write("La bomba es una bomba de agua<br>")
			break
		case 2:
			document.write("La bomba es una bomba de gasolina<br>")
			break
		case 3:
			document.write("La bomba es una bomba de hormigon<br>")
			break
		case 4:
			document.write("La bomba es una bomba de pasta alimenticia<br>")
			break
		default:
			document.write("No existe un valor valido para ese tipo de bomba")

	}
