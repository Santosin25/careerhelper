// // for scrolling
// window.onscroll = function () {
//   myfunction();
//   scrollFunction();
// };
// window.onclick = function () {
//   boxclose();
// };
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
// function myfunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// // Back to Top
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// // for nav
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

// // menu click outside to close

// function boxclose(event) {
//   var box = document.getElementById("mysidenav");
//   if (event.target != box && event.target.parentNode != box) {
//     box.style.wide = "0";
//   }
// }
