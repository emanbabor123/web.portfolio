document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;

    form.onsubmit = function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;

        // check inputs
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.border = '2px solid red';
                valid = false;
            } else {
                input.style.border = '1px solid #ccc';
            }
        });

        // create message box
        let box = document.getElementById('msg');

        if (!box) {
            box = document.createElement('div');
            box.id = 'msg';

            box.style.position = 'fixed';
            box.style.top = '50%';
            box.style.left = '50%';
            box.style.transform = 'translate(-50%, -50%)';
            box.style.background = '#333';
            box.style.color = '#fff';
            box.style.padding = '15px 25px';
            box.style.borderRadius = '6px';
            box.style.zIndex = '9999';

            document.body.appendChild(box);
        }

        // show message
        box.textContent = valid
            ? 'Form submitted successfully!'
            : 'Please fill all fields!';

        if (valid) form.reset();

        // auto hide
        setTimeout(() => {
            box.remove();
        }, 3000);
    };
});