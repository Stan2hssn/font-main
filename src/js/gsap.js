window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

console.log('work')

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "2000vh center",
        scrub: true,
        markers: true
    }
});

tl.to(".hero", {
    transform: 'scale(1) translate(0px, 0px)', ease: Power0.linear, duration: 1
})

let fadeOut = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "2300vh center",
        end: "2500vh center",
        scrub: true,
        markers: true
    }
});

fadeOut.to(".hero", {
    opacity: "0", ease: Power1.easeInOut, duration: 1
})

let fadeIn = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "2500vh center",
        end: "2600vh center",
        scrub: true,
        markers: true
    }
});


fadeIn.to("#three", {
    opacity: "1", ease: Power1.easeInOut, duration: 1
})
