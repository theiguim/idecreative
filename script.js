window.addEventListener('load', () => {


    document.querySelectorAll('.nav-footer a').forEach(link => {
        const text = link.textContent;
        link.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");

        // Ao passar o mouse
        link.addEventListener('mouseenter', () => {
            anime.set(link.querySelectorAll('.letter'), {
                translateY: '100%',
                opacity: 0
            });

            anime({
                targets: link.querySelectorAll('.letter'),
                translateY: [200, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1,
                delay: (el, i) => 40 * i
            });
        });

    });

    gsap.registerPlugin(ScrollTrigger);

    // Cria uma timeline com scrub para deixar lento e suave
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".main",
            start: "top top",
            end: "+=600vh", // mais tempo para o efeito
            scrub: 1, // suaviza o movimento
            pin: true, // trava a section principal
        }
    });

    tl.to(".top-half", {
        yPercent: -100,
        ease: "power4.out"
    }, 0);

    tl.to(".bottom-half", {
        yPercent: 100,
        ease: "power4.out"
    }, 0);

});