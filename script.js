const timeline = gsap.timeline({ defaults: { duration: 1 } })
        .from('.header', { y: '-100%', ease: 'sine.in' })
        .from('.links .link-item', { opacity: 0, stagger: 0.5 })
        .from('.left', { x: '100vw', ease: 'sine.in' })
        .from('.right', { x: '-100vw', ease: 'sine.in' }, '<')
        .from('.footer', { y: '100%', ease: 'elastic' })
        .from('.button', { scale: 0, opacity: 1, rotation: 720 }, '<');

    const button = document.querySelector('.button');
    const startButton = document.querySelector('.startButton');

    button.addEventListener('click', () => {
        timeline.reverse();
    });

    timeline.eventCallback("onReverseComplete", () => {
        startButton.classList.add('showStartButton');
    });

    startButton.addEventListener('click', () => {
        startButton.classList.remove('showStartButton');
        timeline.play();
    });