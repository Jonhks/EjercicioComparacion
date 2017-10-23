

//					 paso 1 
// function comparar = (array1, array2){

// }

					// paso 2

// function comparar = (array1, array2){
// 	if(array1.length !== array2.length){
// 		return false;
// 	}else{

// 	}

// }

				// Paso 3
// 				recorrer  todods los valores


// function comparar = (array1, array2){
// 	if(array1.length !== array2.length){
// 		return false;
// 	}else{
// 		for (var i = 0; i < array1.length; i++){
			// console.log(array1[i], array2[i]);
// 		}
// 	}

// }

				// Paso 3.1
				
				
var array1 = [1,2,3,4,5,6,7,8,9];
var array2 = [1,2,3,4,5,6,7,8,9];

var  comparar = function (primerArray, segundoArray){
	if(array1.length !== array2.length){
		document.write("Tus arreglos no tienen la misma longitud");
	}else{
		for (var i = 0; i < array1.length; i++){
			if(array1[i] !== array2[i]){
			document.write("Los valores de tus arreglos no son iguales");
			return false
			}
		}
		document.write("Tu primer arreglo: " + array1 + "</br>" + "Es igual a tu segundo arreglo: " + array2);		
		return true;
	}
}

comparar(array1, array2);