const form = document.querySelector('.form__container');
const inputs = form.querySelectorAll('.form__input');
const submitButton = form.querySelector('.form__submit');

submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (!checkForm()) {
        return;
    }


});

inputs.forEach(input => {
    const inputWrapper = input.closest('.form__block');
    input.addEventListener('focus', function () {
        inputWrapper.classList.remove('error');
        inputWrapper.classList.add('active');
        inputWrapper.querySelector('.form__error').classList.add('hidden');
    });
    input.addEventListener('blur', function () {
        if (!input.value) {
            inputWrapper.classList.remove('active');
        }

    });
});

function checkForm() {
    let validity = true;

    if (!checkInput(form.elements.name)) {
        validity = false;
    }

    if (!checkInput(form.elements.email)) {
        validity = false;
    }

    if (!checkInput(form.elements.message)) {
        validity = false;
    }


    return validity
}


function checkInput(input) {
    const inputWrapper = input.closest('.form__block');
    const errorWrapper = inputWrapper.querySelector('.form__error');
    if (!input.checkValidity()) {
        errorWrapper.textContent = input.validationMessage;
        errorWrapper.classList.remove('hidden');
        inputWrapper.classList.add('error');
        return false
    } else {
        errorWrapper.textContent = '';
        return true
    }

}