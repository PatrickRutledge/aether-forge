document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.querySelector('.reset-button');
    const crtScreen = document.querySelector('.crt-screen');
    const powerLed = document.querySelector('.power-led');

    // Simple test to ensure button works
    if (resetButton) {
        console.log('Reset button found');
        resetButton.onclick = function(e) {
            e.preventDefault();
            console.log('Reset clicked - starting animation');

            if (!crtScreen) {
                console.error('CRT screen not found!');
                return;
            }

            if (crtScreen.classList.contains('shutting-down') ||
                crtScreen.classList.contains('powering-on')) {
                return;
            }

            crtScreen.classList.add('shutting-down');

            if (powerLed) {
                powerLed.style.animation = 'none';
                setTimeout(() => {
                    powerLed.style.opacity = '0.2';
                    powerLed.style.boxShadow = '0 0 2px #00ff66';
                }, 500);
            }

            const staticNoise = document.querySelector('.static-noise');
            if (staticNoise) {
                staticNoise.style.display = 'none';
            }

            setTimeout(() => {
                crtScreen.classList.remove('shutting-down');
                crtScreen.classList.add('powering-on');

                const typedText = document.querySelector('.typed-text');
                if (typedText) {
                    typedText.textContent = '';
                }

                setTimeout(() => {
                    if (powerLed) {
                        powerLed.style.opacity = '1';
                        powerLed.style.boxShadow = '0 0 10px #00ff66';
                        powerLed.style.animation = 'led-pulse 2s infinite';
                    }

                    crtScreen.classList.remove('powering-on');

                    if (typedText) {
                        const text = 'WE MAKE SIMPLE APPS';
                        let index = 0;

                        function retypeText() {
                            if (index < text.length) {
                                typedText.textContent += text[index];
                                index++;
                                setTimeout(retypeText, 100);
                            }
                        }

                        setTimeout(retypeText, 500);
                    }

                    if (staticNoise) {
                        staticNoise.style.display = 'block';
                    }
                }, 2000);
            }, 4500);
        };
    } else {
        console.error('Reset button not found in DOM');
    }

    const typedText = document.querySelector('.typed-text');
    const text = 'WE MAKE SIMPLE APPS';
    let index = 0;

    if (typedText) {
        typedText.textContent = '';

        function typeText() {
            if (index < text.length) {
                typedText.textContent += text[index];
                index++;
                setTimeout(typeText, 100);
            }
        }

        setTimeout(typeText, 500);
    }

    const crtScreenEffects = document.querySelector('.crt-screen');
    if (crtScreenEffects) {
        setInterval(() => {
            const random = Math.random();
            if (random < 0.05) {
                crtScreenEffects.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`;
                setTimeout(() => {
                    crtScreenEffects.style.transform = 'translate(0, 0)';
                }, 50);
            }
        }, 100);

        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            const crtFrame = document.querySelector('.crt-frame');
            if (crtFrame) {
                crtFrame.style.transform = `rotateX(${y * 2}deg) rotateY(${x * 2}deg)`;
            }
        });
    }

    // Project tiles click handling is now inline in HTML with onclick attributes

    const navLinks = document.querySelectorAll('.nav-link:not(.active)');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const audio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');
            audio.volume = 0.1;
            audio.play().catch(() => {});
        });
    });

    const powerLedEffect = document.querySelector('.power-led');
    if (powerLedEffect) {
        setInterval(() => {
            const brightness = 0.5 + Math.random() * 0.5;
            powerLedEffect.style.opacity = brightness;
        }, 2000);
    }

    const scanlines = document.querySelector('.crt-scanlines');
    if (scanlines) {
        let scanlinePosition = 0;
        setInterval(() => {
            scanlinePosition = (scanlinePosition + 1) % 100;
            scanlines.style.backgroundPosition = `0 ${scanlinePosition}%`;
        }, 50);
    }

    function addStaticNoise() {
        const screen = document.querySelector('.crt-screen');
        if (!screen) return;

        const canvas = document.createElement('canvas');
        canvas.className = 'static-noise';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.opacity = '0.02';
        canvas.style.zIndex = '5';

        screen.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = screen.offsetWidth;
        canvas.height = screen.offsetHeight;

        function drawStatic() {
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.random() * 255;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
                data[i + 3] = 255;
            }

            ctx.putImageData(imageData, 0, 0);
            requestAnimationFrame(drawStatic);
        }

        drawStatic();
    }

    if (document.querySelector('.crt-screen')) {
        addStaticNoise();
    }

    const controlButtons = document.querySelectorAll('.control-button');
    controlButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const screen = document.querySelector('.crt-screen');
            if (!screen) return;

            switch(index) {
                case 0:
                    const currentBrightness = parseFloat(screen.style.filter?.match(/brightness\(([\d.]+)\)/)?.[1] || 1);
                    screen.style.filter = `brightness(${Math.min(1.5, currentBrightness + 0.1)})`;
                    break;
                case 1:
                    const currentBrightness2 = parseFloat(screen.style.filter?.match(/brightness\(([\d.]+)\)/)?.[1] || 1);
                    screen.style.filter = `brightness(${Math.max(0.5, currentBrightness2 - 0.1)})`;
                    break;
                case 2:
                    screen.classList.toggle('high-contrast');
                    break;
            }
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .crt-screen.high-contrast {
            filter: contrast(1.5) brightness(1.1);
        }

        .crt-screen.high-contrast .crt-content {
            text-shadow: 0 0 10px #00ff66;
        }
    `;
    document.head.appendChild(style);
});