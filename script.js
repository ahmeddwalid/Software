document.addEventListener('DOMContentLoaded', function() {
    const collapsibleButtons = document.querySelectorAll('.collapsible-button');
  
    collapsibleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
      });
    });
  });
  