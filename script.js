/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */

function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
}

if document.getElementsByClassName("stopscroll").display == 'block' {
	document.getElementById("body").style.overflow = "hidden"
}

