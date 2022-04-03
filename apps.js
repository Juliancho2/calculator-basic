var opA;
var opB;
var operacion;


function unit(){
	var resultado= document.querySelector(".resultado");
	var nueve = document.querySelector(".nueve");
	var ocho = document.querySelector(".ocho");
	var siete= document.querySelector(".siete");
	var division= document.querySelector(".division");
	var seis= document.querySelector(".seis");
	var cinco= document.querySelector(".cinco");
	var cuatro= document.querySelector(".cuatro");
	var multiplicacion= document.querySelector(".multiplicacion");
	var tres= document.querySelector(".tres");
	var dos= document.querySelector(".dos");
	var uno = document.querySelector(".uno");
	var suma= document.querySelector(".suma");
	var borra= document.querySelector(".borrar");
	var cero= document.querySelector(".cero");
	var igual= document.querySelector(".igual");
	var restar= document.querySelector(".resta");
	

	//EVENTOS
	uno.onclick = function(e){
		resultado.textContent= resultado.textContent +  "1"
	}
	dos.onclick = function(e){
		resultado.textContent= resultado.textContent +  "2"
	}
	tres.onclick = function(e){
		resultado.textContent= resultado.textContent +  "3"
	}
	cuatro.onclick = function(e){
		resultado.textContent= resultado.textContent +  "4"
	}
	cinco.onclick = function(e){
		resultado.textContent= resultado.textContent +  "5"
	}
	seis.onclick = function(e){
		resultado.textContent= resultado.textContent +  "6"
	}
	siete.onclick = function(e){
		resultado.textContent= resultado.textContent +  "7"
	}
	ocho.onclick = function(e){
		resultado.textContent= resultado.textContent +  "8"
	}
	nueve.onclick = function(e){
		resultado.textContent= resultado.textContent +  "9"
	}
	cero.onclick = function(e){
		resultado.textContent= resultado.textContent +  "0"

	}
	borra.onclick = function(e){
		resetear();

	}
	suma.onclick = function(e){
		opA = resultado.textContent;
		operacion= "+";
		limpiar();

	}
	restar.onclick = function(e){
		opA = resultado.textContent;
		operacion= "-";
		limpiar();

	}
	multiplicacion.onclick = function(e){
		opA = resultado.textContent;
		operacion= "*";
		limpiar();

	}
	division.onclick = function(e){
		opA = resultado.textContent;
		operacion= "/";
		limpiar();

	} 
	igual.onclick = function(e){
		opB = resultado.textContent;
		resolver();

	}
	
	function limpiar(){
		resultado.textContent = " ";
	}
	function resetear(){
		opA=0;
		opB=0;
		operacion="";
		limpiar()
	}
	function resolver(){
		var res=0;
		switch(operacion){
			
			case "+":
				res= parseFloat(opA) + parseFloat(opB);
				break;
			case "-":
				res= parseFloat(opA) - parseFloat(opB);
				break
			case "*":
				res= parseFloat(opA) * parseFloat(opB);
				break;
			case "/":
				res= parseFloat(opA) / parseFloat(opB);
				break;
		}
	
	return resultado.textContent=res
	
	
		
	}
	function agregarScroll(){
		if(resultado.textContent.length >= 21){
			resultado.classList.add("resultado2");
		}else{
			resultado.classList.remove("resultado2")
		}
		
		

	}

	window.addEventListener("click",agregarScroll);
	
	
	
}


	
	




	
	

	










	



