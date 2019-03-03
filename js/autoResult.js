window.addEventListener('load', function() {

	var inputRezultatMi = document.getElementById("mi");
	var inputRezultatVi = document.getElementById("vi");


	inputRezultatMi.addEventListener("keyup", function() {

		if (parseInt(inputRezultatMi.value) >= 0 && inputRezultatMi.value <= 162) {
			inputRezultatVi.value = 162 - (inputRezultatMi.value);
		}

		else
		{
			inputRezultatVi.value = "";
		}
	})

	inputRezultatVi.addEventListener("keyup", function() {
		if (parseInt(inputRezultatVi.value) >= 0 && inputRezultatVi.value <= 162) {
			inputRezultatMi.value = 162 - (inputRezultatVi.value);
		}

		else
		{
			inputRezultatVi.value = "";
		}
	})

})
