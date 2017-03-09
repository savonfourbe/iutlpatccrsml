 // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  function menuIconClick() {
  var menu = document.querySelector('.menu-icon')
  menu.classList.toggle('menu-icon-open');
}