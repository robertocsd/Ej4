

window.onload=()=>{
	
	var d1 = document.getElementById("1");
	var d2 = document.getElementById("2");
	var d3 = document.getElementById("3");
	var d4 = document.getElementById("4");
	var d5 = document.getElementById("5");

	d2.style.display = "none";
	d3.style.display = "none";
	d4.style.display = "none";
	d5.style.display = "none";
	var Bt1 = document.querySelector(".b1");
	var Bt2 = document.querySelector(".b2");
	var Bt3 = document.querySelector(".b3");
	var Bt4 = document.querySelector(".b4");
	var Bt5 = document.querySelector(".b5");

	Bt1.addEventListener("click",()=>{
		d1.style.display = "block";
		d2.style.display = "none";
		d3.style.display = "none";
		d4.style.display = "none";
		d5.style.display = "none";
		console.log("wow");
	})

	Bt2.addEventListener("click",()=>{
		d1.style.display = "none";
		d2.style.display = "block";
		d3.style.display = "none";
		d4.style.display = "none";
		d5.style.display = "none";
	})
	Bt3.addEventListener("click",()=>{
		d1.style.display = "none";
		d2.style.display = "none";
		d3.style.display = "block";
		d4.style.display = "none";
		d5.style.display = "none";
	})
	Bt4.addEventListener("click",()=>{
		d1.style.display = "none";
		d2.style.display = "none";
		d3.style.display = "none";
		d4.style.display = "block";
		d5.style.display = "none";
	})
	Bt5.addEventListener("click",()=>{
		d1.style.display = "none";
		d2.style.display = "none";
		d3.style.display = "none";
		d4.style.display = "none";
		d5.style.display = "block";
	})
}