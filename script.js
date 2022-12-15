/*//TODO
//aggiungere gli id ai pulsanti nella codifica xls - aggiunti manualmente per adesso


function main () {
	var btn_134 = document.getElementById ("btn_134");
	var btn_155 = document.getElementById ("btn_155");
	var btn_198 = document.getElementById ("btn_198");
	var fronte_134 = document.getElementsByName ("c134_fronte");
	var fronte_155 = document.getElementsByName ("c155_fronte");
	var fronte_198 = document.getElementsByName ("c198_fronte");
	var retro_134 = document.getElementsByName ("c134_retro");
	var retro_155 = document.getElementsByName ("c155_retro");
	var retro_198 = document.getElementsByName ("c198_retro");
	var holder_134 = document.getElementById ("c134");
	var holder_155 = document.getElementById ("c155");
	var holder_198 = document.getElementById ("c198");
	
	function cambio_cartolina () {
	//rimuovo la classe visible da tutti gli holder
	holder_134.classList.remove ("visible");
	holder_155.classList.remove ("visible");
	holder_198.classList.remove ("visible");
	//assegno la classe visible all'holder a seconda del pulsante premuto
	switch (this) {
		case btn_134:
		holder_134.classList.add ("visible");
		break;
		case btn_134:
		holder_134.classList.add ("visible");
		break;
		case btn_134:
		holder_134.classList.add ("visible");
		break;
	}
}
	document.btn_134.onclick = cambio_cartolina();
	document.btn_155.onclick = cambio_cartolina();
	document.btn_198.onclick = cambio_cartolina();

}

window.onload = main();*/

$(function() {

    /* Rendo invisibili tutti i div contenenti immagini + info e poi rendo visibile solo quello selezionato, che deduco
    * dall'id del pulsante.
    */
    $(".view").on('click', function() {
        $(".c_holder").removeClass("visible");
        $("#c" + this.id).addClass("visible");
		$(".view").removeClass ("active");
        $(this).addClass("active");
        console.log("#r_c" + this.id + "_f");
        $("#r_c" + this.id + "_f").prop("checked", true).change();
    });
});





















