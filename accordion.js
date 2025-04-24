function accordion_toggle(id) {
    var section = document.getElementById(id);
    
    // Toggle visibility
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      // Hide all sections first
      var allSections = document.querySelectorAll(".accordion-section");
      allSections.forEach(function (sec) {
        sec.style.display = "none";
      });
  
      // Show the selected one
      section.style.display = "block";
    }
  }
  