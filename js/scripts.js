// // burger menu
// window.onload = function () {

//     const menu_btn = document.querySelector(".hamburger");
//     const mobile_menu = document.querySelector('.mobile-nav');
//     menu_btn.addEventListener('click', function() {
//         menu_btn.classList.toggle('is-active');
//         mobile_menu.classList.toggle('is-active');
//     })


//     var listItems = document.querySelectorAll('.mobile-nav li');

//     listItems.forEach(function(listItem) {
//       listItem.addEventListener('click', function() {
//         var anchor = this.querySelector('a');
        
//         window.location.href = anchor.href;
//       });
//     });
// }

document.addEventListener('DOMContentLoaded', function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function() {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
  })


  var listItems = document.querySelectorAll('.mobile-nav li');

  listItems.forEach(function(listItem) {
    listItem.addEventListener('click', function() {
      var anchor = this.querySelector('a');
      
      window.location.href = anchor.href;
    });
  });
});








