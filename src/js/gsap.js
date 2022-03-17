window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};

console.log('work')


let fade = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "+=10vh center",
        scrub: true,
        markers: false
    }
});

fade.to(".indicator", {
    opacity: '0', ease: Power0.linear, duration: 1
})


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "1500vh center",
        scrub: true,
        markers: false
    }
});

tl.to(".hero", {
    transform: 'scale(1) translate(0px, 0px)', ease: Power0.linear, duration: 1
})
tl.to(".giro", {
    display: 'flex', ease: Power0.linear, duration: 1
})

tl.to(".hero", {
    opacity: "0", ease: Power1.easeInOut, duration: 1
})

tl.to("#three", {
    opacity: "1", ease: Power1.easeInOut, duration: 1
})

tl.to(".text", {
    opacity: "1", ease: Power0.linear, duration: 2
})

tl.to(".cta", {
    opacity: "1", ease: Power0.linear, duration: 2
})





