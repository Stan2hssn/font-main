window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

console.log('work')

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

let fadeOut = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "1700vh center",
        end: "1900vh center",
        scrub: true,
        markers: false
    }
});

fadeOut.to(".hero", {
    opacity: "0", ease: Power1.easeInOut, duration: 1
})

let fadeIn = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "2000vh center",
        end: "2200vh center",
        scrub: true,
        markers: false
    }
});


fadeIn.to("#three", {
    opacity: "1", ease: Power1.easeInOut, duration: 1
})

let fadeInTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "2000vh center",
        end: "2000vh center",
        scrub: true,
        markers: false
    }
});


fadeInTwo.to(".text", {
    opacity: "1", ease: Power0.linear, duration: 1
})

