document.addEventListener('DOMContentLoaded', () => {
      const form = document.querySelector('form');
      const modal = new bootstrap.Modal(document.getElementById('contactModal'));

      form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if(!name || !email || !message){
                  alert('Please fill in all fields.');
                  return;
            }else{
                  document.getElementById('modalName').textContent = name;
                  document.getElementById('modalEmail').textContent = email;
                  document.getElementById('modalMessage').textContent = message;

                  modal.show();
            }
      });
});