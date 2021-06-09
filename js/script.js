// JavaScript Document
window.onscroll = function() {myFunction()};
function myFunction() {
	
	var header = document.getElementById("headerId");
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
	 	 
		 header.style.position = "fixed";
		  header.style.backgroundColor = "rgb(255,255,255,0.4)";
		  header.style.left = 0;
		  header.style.right = 0;
		   header.style.zIndex = 9;
  }else{
	  header.style.position = "relative";
	   header.style.backgroundColor = "rgb(255,255,255)";
 }

}