/* ============================================
   Contact Form Handling
   ============================================ */

(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var successMsg = document.querySelector('.form-success');

  function validateField(field) {
    var group = field.closest('.form-group');
    if (!group) return true;

    var isRequired = field.hasAttribute('required');
    var value = field.value.trim();
    var valid = true;

    if (isRequired && !value) {
      valid = false;
    }

    if (field.type === 'email' && value) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    group.classList.toggle('has-error', !valid);
    return valid;
  }

  // Real-time validation on blur
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(function (field) {
    field.addEventListener('blur', function () {
      validateField(this);
    });

    field.addEventListener('input', function () {
      var group = this.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        validateField(this);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fields = form.querySelectorAll('.form-input[required], .form-select[required], .form-textarea[required]');
    var allValid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    if (!allValid) {
      var firstError = form.querySelector('.form-group.has-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    // Submit to Formspree
    var formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          form.style.display = 'none';
          if (successMsg) successMsg.classList.add('visible');
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function () {
        alert('送信に失敗しました。お電話またはLINEでお問い合わせください。\nSubmission failed. Please contact us by phone or LINE.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
  });
})();
