window.addEventListener('load', function() {

	var dohvatiZvanjeMi = document.getElementById("zvanjeMi");
	var dohvatiZvanjeVi = document.getElementById("zvanjeVi");



		dohvatiZvanjeMi.addEventListener('click', function() {
			if (dohvatiZvanjeMi.checked) {
				dohvatiZvanjeVi.checked = false;
			}
			
		});
		dohvatiZvanjeVi.addEventListener('click', function() {
			if (dohvatiZvanjeVi.checked) {
				dohvatiZvanjeMi.checked = false;
			}
			
		})
})