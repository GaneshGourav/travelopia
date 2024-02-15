let alert = document.querySelector(".alert");
let btn = document.querySelector(".main-content-btn");
btn.addEventListener("click", function() {
	alert.style.display = "block";
	btn.disabled = true;
	btn.style.cursor = "not-allowed";
	setTimeout(() => {
		alert.style.display = "none";
		btn.disabled = false;
		btn.style.cursor = "pointer";
	}, 3000);
});