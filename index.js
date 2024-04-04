
function addingEventListener() {
    const input = document.getElementById('button');
  
    function clickAlert() {
      alert('I was happy!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  addingEventListener(); // Call the outer function to execute addEventListener()
  
