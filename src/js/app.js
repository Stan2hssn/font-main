window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        scrub: true,
        markers: false
    }
});

tl.to(".L", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlSecond = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "70vh center",
        end: "400vh center",
        scrub: true,
        markers: false
    }
});

tlSecond.to(".U", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlThird = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "300vh center",
        end: "500vh center",
        scrub: true,
        markers: false
    }
});

tlThird.to(".O", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 1
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlFourth = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "400vh center",
        end: "600vh center",
        scrub: true,
        markers: false
    }
});

tlFourth.to(".M", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 2
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let tlFifth = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "500vh center",
        end: "650vh center",
        scrub: true,
        markers: false
    }
});

tlFifth.to(".U-2", {
    transform: "matrix(1, 0, 0, 1, 0, 0)", transform: "scale(1)", ease:
    Power0.linear, duration: 3
})

////////////////////////////////// SEPARATOR //////////////////////////////////

let preHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "650vh center",
        end: "650vh center",
        scrub: true,
        markers: false
    }
});

preHeader.to(".link", {
    display: "flex", duration: 1
})

preHeader.to(".logo_header", {
    display: "flex", duration: 1
})
////////////////////////////////// SEPARATOR //////////////////////////////////

let header = gsap.timeline({
    scrollTrigger: {
        trigger: ".logo",
        start: "660vh center",
        end: "660vh center",
        scrub: true,
        markers: false,
        toggleActions: "play none reverse none",
    }
});

header.to(".logo", {
    visibility: 'hidden',
    opacity: '0',
})

header.to(".link", {
    opacity: 1, duration: 1
})

header.to(".logo_header", {
    opacity: 1, duration: 1
})


////////////////////////////////// SEPARATOR //////////////////////////////////

$('.round').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});