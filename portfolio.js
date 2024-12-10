gsap.to(".profile-image", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#home",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".profile-content", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#home",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});


gsap.to("#about", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});


gsap.to("#projects", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});


gsap.to("#contact", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    }
});