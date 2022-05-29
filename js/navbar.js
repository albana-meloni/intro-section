let navbarButton = document.getElementById("navbarBtn");
let navbarButtonClose = document.getElementById("navbarBtnClose");
let sideNavbar = document.getElementById("navbarCollapse");

navbarButton.addEventListener('click', function() {
  sideNavbar.setAttribute("data-navbar", "open");
});
navbarButtonClose.addEventListener('click', function() {
  sideNavbar.removeAttribute("data-navbar", "open"),
  sideNavbar.setAttribute("data-navbar", "close");
});



let dropdownLink1 = document.getElementById("dropdown1");
let dropdownLink2 = document.getElementById("dropdown2");
let dropdownList1 = document.getElementById("dropdownList1");
let dropdownList2 = document.getElementById("dropdownList2");
let dropdownArrow1 = document.getElementById("dropdownArrow1");
let dropdownArrow2 = document.getElementById("dropdownArrow2");

dropdownLink1.addEventListener('click', function() {
  if (dropdownList1.style.height ===  '100%'){
    dropdownList1.style.height = '0';
    dropdownList1.style.display = 'none';
    dropdownList1.style.animation = 'fade-out 0.3s';
    dropdownArrow1.style.transform = 'rotate(0deg)';
  }else {
    dropdownList1.style.height = '100%';
    dropdownList1.style.display = 'block';
    dropdownList1.style.animation = 'fade-in 0.3s';
    dropdownArrow1.style.transform = 'rotate(180deg)';
  }
});

dropdownLink2.addEventListener('click', function() {
  if (dropdownList2.style.height ===  '100%'){
    dropdownList2.style.display = 'none';
    dropdownList2.style.height = '0';
    dropdownList2.style.animation = 'fade-out 0.3s';
    dropdownArrow2.style.transform = 'rotate(0deg)';
  }else {
    dropdownList2.style.height = '100%';
    dropdownList2.style.display = 'block';
    dropdownList2.style.animation = 'fade-in 0.3s';
    dropdownArrow2.style.transform = 'rotate(180deg)';
  }
});