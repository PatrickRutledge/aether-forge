document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const thankYou = document.getElementById('thank-you');
    const statusText = document.getElementById('status-text');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        statusText.textContent = 'TRANSMITTING...';
        statusText.style.color = '#ffff00';

        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.style.display = 'none';
                thankYou.style.display = 'block';
                statusText.textContent = 'TRANSMISSION SUCCESSFUL';
                statusText.style.color = '#00ff66';

                setTimeout(() => {
                    statusText.textContent = 'CONNECTION ESTABLISHED';
                }, 2000);
            } else {
                throw new Error('Transmission failed');
            }
        } catch (error) {
            statusText.textContent = 'TRANSMISSION ERROR - RETRY';
            statusText.style.color = '#ff0066';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';

            setTimeout(() => {
                statusText.textContent = 'READY FOR INPUT';
                statusText.style.color = '#00ff66';
            }, 3000);
        }
    });

    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            statusText.textContent = `ENTERING ${input.name.toUpperCase()}...`;
        });

        input.addEventListener('blur', () => {
            statusText.textContent = 'READY FOR INPUT';
        });

        input.addEventListener('input', () => {
            const audio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');
            audio.volume = 0.05;
            audio.play().catch(() => {});
        });
    });
});