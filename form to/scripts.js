const scriptURL = 'https://script.google.com/macros/s/AKfycbw8U1QEl6J3BXDfPZwVCxYedFzDEtsf7tLJHkJw0aJM3S4QH09EeEM61wf0Tg4ss0ea/exec' ;
const form = document.forms['submit-to-google-sheet-Notify'] ;
const loading = document.querySelector('.js-loading');
const successMessage = document.querySelector('.js-success-message');
const errorMessage = document.querySelector('.js-error-message');

form.addEventListener('submit', e => {
  e.preventDefault()
  showLoadingIndicator()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => response.json())
    .then(response => showSuccessMessage(response))
    .catch(error => showErrorMessage(error))
})

function showLoadingIndicator () {
  form.classList.add('is-hidden');
  loading.classList.remove('is-hidden');
}

function showSuccessMessage (response) {
  console.log('Success!', response);
  setTimeout(() => {
    successMessage.classList.remove('is-hidden')
    loading.classList.add('is-hidden');
    return;
  }, 500)
}

function showErrorMessage (error) {
  console.error('Error!', error.message);
  setTimeout(() => {
    errorMessage.classList.remove('is-hidden');
    loading.classList.add('is-hidden');
  }, 500)
}