var dropdowns = document.querySelectorAll('.dropdown');

// loop through each dropdown
dropdowns.forEach(function(dropdown) {

  // add event listener to toggle the dropdown
  dropdown.addEventListener('click', function() {

    // toggle the class 'active' to show/hide the dropdown
    this.classList.toggle('active');
  });
});
