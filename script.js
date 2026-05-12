document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const fields = [...this.querySelectorAll('input, textarea')];
    const hasEmpty = fields.some(f => !f.value.trim());

    fields.forEach(f => {
        f.style.border = f.value.trim() ? '' : '2px solid red';
    });

    if (hasEmpty) return;

    alert('Form submitted successfully!');
    this.reset();
    
});