var mi;
var vi;
var zvanjeMi;
var zvanjeVi;
var igra = 162;
var ukupnaIgra = 1001;
var ukupnoVi = 0;
var ukupnoMi = 0;

function glavnaFunkcija() /*ako se upise u mi polje poziva se funkcija za mi, ako se upise u vi polje poziva se funkcija vi*/
{


	mi = parseInt(document.getElementById("mi").value);
	vi = parseInt(document.getElementById("vi").value); 
	var dodatnaZvanjaMi = parseInt(document.getElementById("dodatnaZvanjaMi").value);
	var dodatnaZvanjaVi = parseInt(document.getElementById("dodatnaZvanjaVi").value);

	if (mi == 0 || vi == 0) 
	{
		stiglje(mi, vi, dodatnaZvanjaMi, dodatnaZvanjaVi);
	}

	else
	{
		provjeraZvanja(dodatnaZvanjaMi, dodatnaZvanjaVi);
		provjeraBela();
		izracunaj(vi, mi);
	}

}

function provjeraZvanja(dodatnaZvanjaMi, dodatnaZvanjaVi)
{
	if (dodatnaZvanjaMi > 0) 
	{
		igra = igra + parseInt(dodatnaZvanjaMi);
		mi += dodatnaZvanjaMi;
	}

	if (dodatnaZvanjaVi > 0)
	{
		igra = igra + parseInt(dodatnaZvanjaVi);
		vi += dodatnaZvanjaVi;
	}
}

function provjeraBela()
{
	if (document.getElementById("belaMi").checked) 
	{
		igra += 20;
		mi += 20;
	}

	if (document.getElementById("belaVi").checked) 
	{
		igra += 20;
		vi += 20;
	}
}

function izracunaj(rezultatVi, rezultatMi) /*racuna rezultat partije*/ 
{

	if (document.getElementById("zvanjeMi").checked) /*ako je mi zvao*/
		{
			if (rezultatMi > igra/2) /*ako je mi prosao napravi ovo*/
			{
				ukupnoMi += rezultatMi; /*povecava ukupni rezultat*/
				ukupnoVi += rezultatVi; /*povecava ukupni rezultat*/
				ispisPartija(rezultatMi, rezultatVi);
				ispisUkupni(ukupnoMi, ukupnoVi)
			}

			else if (rezultatMi <= igra/2) /*ako je mi pao napravi ovo*/
			{
				rezultatMi = 0; 
				rezultatVi = igra; 
				ukupnoMi += rezultatMi; 
				ukupnoVi += rezultatVi; 
				ispisPartija(rezultatMi, rezultatVi);
				ispisUkupni(ukupnoMi, ukupnoVi)
			}

		}


	else if (document.getElementById("zvanjeVi").checked) /*ako je vi zvao*/
		{
			if (rezultatVi > igra/2) /*ako je vi prosao*/
			{
				ukupnoMi += rezultatMi; 
				ukupnoVi += rezultatVi; 
				ispisPartija(rezultatMi, rezultatVi);
				ispisUkupni(ukupnoMi, ukupnoVi)
			}

			else if (rezultatVi <= igra/2) /*ako je vi pao*/
			{
				rezultatVi = 0;
				rezultatMi = igra; 
				ukupnoMi += rezultatMi; 
				ukupnoVi += rezultatVi; 
				ispisPartija(rezultatMi, rezultatVi);
				ispisUkupni(ukupnoMi, ukupnoVi);
			}
		}
}

function stiglje(mi, vi, dodatnaZvanjaMi, dodatnaZvanjaVi)
{
	if (mi == 0)
	{
		provjeraZvanja(dodatnaZvanjaMi, dodatnaZvanjaVi);
		provjeraBela();
		vi = igra + 90;
		ukupnoVi += igra + 90;
		ispisPartija(0, vi);
		ispisUkupni(0, ukupnoVi);
	}

	if (vi == 0)
	{
		provjeraZvanja(dodatnaZvanjaMi, dodatnaZvanjaVi);
		provjeraBela();
		mi = igra + 90;
		ukupnoMi += igra + 90;
		ispisPartija(mi, 0);
		ispisUkupni(ukupnoMi, 0);
	}
}


function ispisPartija(rezultatMi, rezultatVi)
{
	var tr = document.createElement("TR");
	var tdMi = tr.appendChild(document.createElement("TD"));
	var tdVi = tr.appendChild(document.createElement("TD"));
	tdMi.innerHTML = rezultatMi;
	tdVi.innerHTML = rezultatVi;
	document.getElementById("rezultat").appendChild(tr);
}


function ispisUkupni(ukupnoMi, ukupnoVi)
{
	if (ukupnoMi > ukupnaIgra) 
		{
			if (ukupnoMi > ukupnoVi) 
			{
				alert("Mi je pobjedio" + ukupnoMi + " " + ukupnoVi);
				location.reload();		
			}
			
			else
			{
				alert("Vi je pobjedio" + ukupnoMi + " " + ukupnoVi);
				location.reload();
			}
		}

	else if (ukupnoVi > ukupnaIgra) 
		{
			if (ukupnoVi > ukupnoMi) 
			{
				alert("Vi je pobjedio" + ukupnoMi + " " + ukupnoVi);
				location.reload();
			}
			
			else
			{
				alert("Mi je pobjedio" + ukupnoMi + " " + ukupnoVi);
				location.reload();
			}
		}

	document.getElementById("ukupnoMi").innerHTML = "Mi: " + ukupnoMi;
	document.getElementById("ukupnoVi").innerHTML = "Vi: " + ukupnoVi;
	igra = 162;
}

