document.querySelector('ul').addEventListener('focusout', function(e) {
    if(e.target.tagName === 'INPUT') {
        e.target.required = true;
    }

    if(e.target.value === '' && e.target.required) {
        e.target.classList.add('input-error');
    } else {
        e.target.classList.remove('input-error');
    }

    if(e.target.id === 'confirm-password') {
        let passElement = document.querySelector('#password');
        console.log(e.target.classList);

        if(passElement.value !== e.target.value) {
            passElement.nextElementSibling.style.display = 'block';
            passElement.classList.add('input-error');
            e.target.classList.add('input-error');
        } else {
            passElement.nextElementSibling.style.display = 'none';
            passElement.classList.remove('input-error');
            e.target.classList.remove('input-error');
        }

        console.log(e.target.classList);
    }
});