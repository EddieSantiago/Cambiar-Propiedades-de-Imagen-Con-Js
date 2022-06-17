//Obtener 3 cosas basicas (imagen, botones)

const img = document.getElementById('img');
const aplicar = document.getElementById('aplicar');
const resetear = document.getElementById('resetear');

//Eventos

aplicar.addEventListener('click', function() {
	//Todo el codigo que se ejecutaria cuando presione el boton

	//Variables (Informacion de los inputs)
	const width_img = document.getElementById('width_img').value;
	const height_img = document.getElementById('height_img').value;
	const top_img = document.getElementById('top_img').value;
	const left_img = document.getElementById('left_img').value;

	img.style.width = width_img + "px";
	img.style.height = height_img + "px";
	img.style.top = top_img + "px";
	img.style.left = left_img + "px";
})

resetear.addEventListener('click', function() {
	img.style.width = "200px";
	img.style.height = "200px";
	img.style.top = "200px";
	img.style.left = "0px";
})