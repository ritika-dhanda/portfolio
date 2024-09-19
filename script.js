// script.js

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.remove('visible');
  });
  
  // Show the selected section
  document.getElementById(sectionId).classList.add('visible');
}

