const form = document.querySelector('.form__container');
const inputs = form.querySelectorAll('.form__input');
const submitButton = form.querySelector('.form__submit');

submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (!checkForm()) {
        return;
    }

    const name = form.elements.name.value;
    const phone = '911';
    const comment = form.elements.message.value;
    const mail = form.elements.email.value;

    let formData = new FormData();

    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("comment", comment);
    formData.append("to", mail);

    fetch('https://webdev-api.loftschool.com/sendmail', {
        method: 'POST',
        body: formData
    }).then((response) => {
        return response.json();
    }).then((info) => {
        return info.message;
    }).then((message) => {
        showModal(message);
        form.reset();
        inputs.forEach((input)=> {
            input.closest('.form__block').classList.remove('active');
        })
    }).catch(() => {
        showModal('Что-то пошло не так...')
    })

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

    if (!checkInputAndToggleErrorClass(form.elements.name)) {
        validity = false;
    }

    if (!checkInputAndToggleErrorClass(form.elements.email)) {
        validity = false;
    }

    if (!checkInputAndToggleErrorClass(form.elements.message)) {
        validity = false;
    }


    return validity
}


function checkInputAndToggleErrorClass(input) {
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

function showModal(msg) {
    const container = document.querySelector('.wrapper');
    const popup = document.createElement('div');

    popup.classList.add('popup');
    let innerMarkUp = document.querySelector('#form-popup').innerHTML;
    popup.innerHTML = innerMarkUp;


    container.appendChild(popup);
    let popupText = popup.querySelector('.popup__content');
    popupText.innerHTML = msg;

    const closePopupButton = popup.querySelector('.popup__btn-close');

    closePopupButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        container.removeChild(popup);
    })
}