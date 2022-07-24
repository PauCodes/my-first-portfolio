const formElement = document.querySelector('form');
const inputElement =  document.querySelectorAll('#name, #email, #message');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submited!!');

    inputElement.forEach(input => {
        input.value = '';
      });
    // inputElement.value = '';
    // formElement.reset();
})