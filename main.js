document.addEventListener('DOMContentLoaded', () => {
    const cake = document.getElementById('cake');
    const flames = document.querySelectorAll('.flame');
    const sparkles = document.getElementById('sparkles');
    let isLit = false;
  
    function toggleCandles() {
      isLit = !isLit;
      
      flames.forEach(flame => {
        flame.classList.toggle('lit');
      });
  
      if (isLit) {
        sparkles.style.display = 'block';
        setTimeout(() => {
          sparkles.style.display = 'none';
        }, 2000);
      }
    }
  
    cake.addEventListener('click', toggleCandles);
  });