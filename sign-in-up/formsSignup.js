(function() {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        var password = form.querySelector('#yourPassword').value;
        var confirmPassword = form.querySelector('#confirmPassword').value;

        if (!form.checkValidity() || password !== confirmPassword) {
          event.preventDefault();
          event.stopPropagation();

          if (password !== confirmPassword) {
            form.querySelector('#confirmPassword').setCustomValidity('Passwords do not match!');
          } else {
            form.querySelector('#confirmPassword').setCustomValidity('');
          }
        }

        form.classList.add('was-validated');
      }, false);
    });
})();